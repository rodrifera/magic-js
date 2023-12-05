import { iterate, removeItem } from './storage';
import { isWebCryptoSupported } from './web-crypto';

export const DEVICE_SHARE_KEY = 'ds';
export const ENCRYPTION_KEY_KEY = 'ek';
export const INITIALIZATION_VECTOR_KEY = 'iv';

const ALGO_NAME = 'AES-GCM'; // for encryption
const ALGO_LENGTH = 256;

export function clearDeviceShares() {
  const keysToRemove: string[] = [];
  iterate((value, key, iterationNumber) => {
    if (key.startsWith(`${DEVICE_SHARE_KEY}_`)) {
      keysToRemove.push(key);
    }
  });
  keysToRemove.forEach((key) => {
    removeItem(key);
  });
}

export function strToArrayBuffer(str: string) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export function base64ToArrayBuffer(base64: string) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

export function bufferToString(buffer: ArrayBuffer) {
  const decoder = new TextDecoder('utf-8');
  return decoder.decode(buffer);
}

async function createInitializationVector() {
  if (!isWebCryptoSupported()) {
    console.info('webcrypto is not supported');
    return undefined;
  }
  const { crypto } = window;

  if (!crypto) return undefined;

  const iv = crypto.getRandomValues(new Uint8Array(12)); // 12 bytes for AES-GCM
  return iv;
}

async function createEncryptionKey() {
  if (!isWebCryptoSupported()) {
    console.info('webcrypto is not supported');
    return undefined;
  }
  const { subtle } = window.crypto;
  if (!subtle) return undefined;
  const key = subtle.generateKey(
    { name: ALGO_NAME, length: ALGO_LENGTH },
    false, // non-extractable
    ['encrypt', 'decrypt'],
  );
  return key;
}

export async function encryptDeviceShare(
  plaintextDeviceShare: string,
): Promise<{ encryptionKey?: CryptoKey; encryptedDeviceShare?: String; iv?: string }> {
  const iv = await createInitializationVector();
  const encryptionKey = await createEncryptionKey();

  if (!iv || !encryptionKey || !plaintextDeviceShare) {
    return { iv: undefined, encryptionKey: undefined, encryptedDeviceShare: undefined };
  }

  const { subtle } = window.crypto;

  const encryptedData = await subtle.encrypt(
    {
      name: ALGO_NAME,
      iv,
    },
    encryptionKey,
    strToArrayBuffer(plaintextDeviceShare),
  );

  const encryptedDeviceShare = arrayBufferToBase64(encryptedData);

  return { encryptionKey, encryptedDeviceShare, iv: JSON.stringify(Array.from(iv)) };
}

export async function decryptDeviceShare(
  encryptedDeviceShare: string,
  encryptionKey: CryptoKey,
  ivString: string,
): Promise<string | undefined> {
  if (!encryptedDeviceShare || !isWebCryptoSupported()) {
    return undefined;
  }

  const iv = new Uint8Array(JSON.parse(ivString));
  const { subtle } = window.crypto;

  if (!iv || !encryptedDeviceShare || !encryptionKey || !subtle) return undefined;

  const ab = await subtle.decrypt({ name: ALGO_NAME, iv }, encryptionKey, base64ToArrayBuffer(encryptedDeviceShare));

  return bufferToString(ab);
}
