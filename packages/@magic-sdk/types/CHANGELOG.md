# v5.0.1 (Tue Sep 14 2021)

#### 🐛 Bug Fix

- Import regeneratorRuntime in Magic JS (non-CDN version) [#210](https://github.com/magiclabs/magic-js/pull/210) ([@smithki](https://github.com/smithki))

#### Authors: 1

- Ian K Smith ([@smithki](https://github.com/smithki))

---

# v5.0.0 (Tue Sep 14 2021)

#### 💥 Breaking Change

- v6.0.0 [#208](https://github.com/magiclabs/magic-js/pull/208) ([@smithki](https://github.com/smithki))

#### Authors: 1

- Ian K Smith ([@smithki](https://github.com/smithki))

---

# v4.0.0 (Tue Aug 31 2021)

#### 💥 Breaking Change

- Custom session duration [#199](https://github.com/magiclabs/magic-js/pull/199) ([@dgerrellsMagic](https://github.com/dgerrellsMagic))

#### Authors: 1

- [@dgerrellsMagic](https://github.com/dgerrellsMagic)

---

# v3.2.2 (Mon Aug 16 2021)

#### 🐛 Bug Fix

- Migrate unit tests to Jest [#194](https://github.com/magiclabs/magic-js/pull/194) ([@smithki](https://github.com/smithki))

#### Authors: 1

- Ian K Smith ([@smithki](https://github.com/smithki))

---

# v3.2.1 (Mon Aug 09 2021)

#### 🐛 Bug Fix

- register access control rpc error code [#193](https://github.com/magiclabs/magic-js/pull/193) ([@Dizigen](https://github.com/Dizigen))

#### Authors: 1

- David He ([@Dizigen](https://github.com/Dizigen))

---

# v3.2.0 (Wed Jul 28 2021)

#### 🚀 Enhancement

- Add explicit JSDelivr entry-point for `magic-sdk` [#191](https://github.com/magiclabs/magic-js/pull/191) ([@smithki](https://github.com/smithki))

#### Authors: 1

- Ian K Smith ([@smithki](https://github.com/smithki))

---

# v3.1.1 (Fri Mar 19 2021)

#### 🐛 Bug Fix

- register "inactive recipient" rpc error code [#170](https://github.com/magiclabs/magic-js/pull/170) ([@Dizigen](https://github.com/Dizigen))

#### Authors: 1

- David He ([@Dizigen](https://github.com/Dizigen))

---

# v3.1.0 (Mon Mar 15 2021)

#### 🚀 Enhancement

- Add testing framework [#168](https://github.com/magiclabs/magic-js/pull/168) (harry [@smithki](https://github.com/smithki) [@harryEth](https://github.com/harryEth))

#### Authors: 3

- [@harryEth](https://github.com/harryEth)
- harry (harry)
- Ian K Smith ([@smithki](https://github.com/smithki))

---

# v3.0.1 (Tue Dec 01 2020)

#### 🐛 Bug Fix

- Add 'importHelpers: true' to base tsconfig.json [#152](https://github.com/magiclabs/magic-js/pull/152) ([@smithki](https://github.com/smithki))

#### 📝 Documentation

- Fix incorrect TypeScript project references and update READMEs with changelog links [#151](https://github.com/magiclabs/magic-js/pull/151) ([@smithki](https://github.com/smithki))

#### Authors: 1

- Ian K Smith ([@smithki](https://github.com/smithki))

---

# v3.0.0 (Tue Nov 17 2020)

#### 🐛 Bug Fix

- Update CHANGELOGs and CONTRIBUTING guide [#146](https://github.com/magiclabs/magic-js/pull/146) ([@smithki](https://github.com/smithki))

#### 🏠 Internal

- Simplify scripts [#147](https://github.com/magiclabs/magic-js/pull/147) ([@smithki](https://github.com/smithki))

#### Authors: 1

- Ian K Smith ([@smithki](https://github.com/smithki))

---

## `2.0.1` - 10/21/2020

#### Changed

- Removed the following public methods and functions
    - `BaseExtension.utils.encodeQueryParameters`
    - `BaseExtension.utils.decodeQueryParameters`

## `1.6.0` - 09/24/2020

#### Added

- Adds a Magic SDK extensions runtime compatibility check, ensuring you're version of Magic SDK is designed for the extensions you have in use.

## `1.5.0` - 09/15/2020

#### Added

- New, optional `redirectURI` parameter for the `loginWithMagicLink` method
- New `loginWithCredential` method for completing a magic link login with redirect: `await magic.auth.loginWithCredential()`

## `1.4.8` - 08/20/2020

#### Added

- Updated dependencies

## `1.4.7` - 08/20/2020

#### Added

- Updated dependencies

## `1.4.6` - 08/20/2020

#### Added

- New RPC error code for the `loginWithMagicLink` method: `-10005`

## `1.4.5` - 07/22/2020

#### Added

- Export `PromiEvent` type and `isPromiEvent` utility from SDK entry-points (`magic-sdk` and `@magic-sdk/react-native`).

## `1.4.1` through `1.4.4` - 07/13/2020

#### Fixed

- Bug preventing NPM tarball from containing `/dist` files.

## `1.4.0` - 07/13/2020

#### Changed

- Updated build system to use TypeScript project references instead of Microbundle.
- Pass `targetOrigin` parameter to `postMessage` calls.

## `1.3.1` - 07/08/2020

#### Fixed

- Bug affecting `localforage` type imports causing compilation failure in TypeScript.

## `1.3.0` - 07/08/2020

#### Added

- WebAuthn support.

## `1.1.0` - 06/23/2020

#### Added

- Add `SDKWarningCode.DeprecationNotice`.

## `1.0.3` - 06/23/2020

#### Changed

- Update dependencies.

## `1.0.2` - 06/12/2020

#### Changed

- Update dependencies.
- Circle CI tag in readme is broken after namechange from MagicHQ to MagicLabs

## `1.0.1` - 06/11/2020

#### Changed

- Update `package.json` description.

## `1.0.0` - 06/02/2020

This is the first release our changelog records. Future updates will be logged in the following format:

#### Fixed

- Bug fixes and patches will be described here.

#### Changed

- Changes (breaking or otherwise) to current APIs will be described here.

#### Added

- New features or APIs will be described here.