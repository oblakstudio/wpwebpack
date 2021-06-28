## [2.0.3](https://github.com/oblakstudio/wpwebpack/compare/v2.0.2...v2.0.3) (2021-06-28)


### Bug Fixes

* **imagemin:** Downgraded imagemin-svgo to 8.0.0 ([d0d8b45](https://github.com/oblakstudio/wpwebpack/commit/d0d8b450ea25723b5ea1aa63e05c527eb98ccfbb))

## [2.0.2](https://github.com/oblakstudio/wpwebpack/compare/v2.0.1...v2.0.2) (2021-06-03)


### Bug Fixes

* **installer:** Fixed error when installing without directory parameter ([e8db280](https://github.com/oblakstudio/wpwebpack/commit/e8db2800bb7f04b65144bc3825d61107332917dc))
* **upgrader:** Fixed typos ([e96409e](https://github.com/oblakstudio/wpwebpack/commit/e96409e4fbe7e445527e23bb21bf5c1892feb090))

## [2.0.1](https://github.com/oblakstudio/wpwebpack/compare/v2.0.0...v2.0.1) (2021-06-01)


### Bug Fixes

* **core:** Added a tsconfig.json file ([f10a7e0](https://github.com/oblakstudio/wpwebpack/commit/f10a7e0c0e2caadedfd4a73add5ac0778f152cd9))
* **stylelint:** Added ignore options to value-keyword-case ([3cf03e7](https://github.com/oblakstudio/wpwebpack/commit/3cf03e7d472016871a3fd26f54b4f44aa0f51d63)), closes [#4](https://github.com/oblakstudio/wpwebpack/issues/4)

# [2.0.0](https://github.com/oblakstudio/wpwebpack/compare/v1.5.0...v2.0.0) (2021-06-01)


### Bug Fixes

* **build:** Changed the release script path in .releaserc ([c02b7c9](https://github.com/oblakstudio/wpwebpack/commit/c02b7c95f920ee9d389df27917c9070022397774))
* **core:** Fixed images and fonts assets in node_modules folder not being added to the dist ([75ecade](https://github.com/oblakstudio/wpwebpack/commit/75ecadecd9ffe4c01b1036fb646b8d2e26e99af5))
* **core:** Removed folder added by mistake [skip ci] ([61b6502](https://github.com/oblakstudio/wpwebpack/commit/61b6502e0f0938e179c92a5fe096c4e80eb7bf7e))
* **core:** Removed git property from package.json to prevent conflicts with semantic-release ([287949a](https://github.com/oblakstudio/wpwebpack/commit/287949a0abe1db9aa9b202bf6444a34e43f092a0))
* **core:** Removed languages folder from gitignore ([8c8b9c0](https://github.com/oblakstudio/wpwebpack/commit/8c8b9c0769c4db2c1882a48486806dbd639e9934))
* **core:** Removed sourceMap option from CSS loader due to 5.0.0 upgrade recommendations and fixed [#4](https://github.com/oblakstudio/wpwebpack/issues/4) ([b0dc690](https://github.com/oblakstudio/wpwebpack/commit/b0dc690241cec494e962a27aa028935bc383c651))
* **core:** removed unsued var from config.js ([8e1de40](https://github.com/oblakstudio/wpwebpack/commit/8e1de406005269a3af62371ea8c867356d87b68d))
* **core:** removed unused vars ([ced0b2a](https://github.com/oblakstudio/wpwebpack/commit/ced0b2addafa3c759173d15bc6e001f33a2a6d16))
* **core:** Removed yarn.lock and yarn-error.log from git and added them to gitignore ([89bdea8](https://github.com/oblakstudio/wpwebpack/commit/89bdea802b960b61ddc714970a8b0bce7ac1b668))
* **docs:** Fixed getting started link [skip ci] ([7fb60e6](https://github.com/oblakstudio/wpwebpack/commit/7fb60e640ee910d46825b0e84805dc2ce8aad62f))
* **docs:** Restored docs deleted by mistake ([057a8f1](https://github.com/oblakstudio/wpwebpack/commit/057a8f10ca3032011db4c1fcf895fe11c7d2d3bc))


### Features

* **build:** Added proper versioning to wpwebpack package.json ([866a8d7](https://github.com/oblakstudio/wpwebpack/commit/866a8d7feab2f7c772d2c06f115f476824cdcd29))
* **core:** Added the option to turn off linting during the build process ([830c4ab](https://github.com/oblakstudio/wpwebpack/commit/830c4ab2255d5ab1157301538f4a8e91205a52d3))
* **core:** Removed home resolver and renamed common route to follow angular standards ([9000788](https://github.com/oblakstudio/wpwebpack/commit/90007884a2a7119c0a4ba1f7771a346032b81c27))
* **docs:** Improved the documentation [skip ci] ([9bb8362](https://github.com/oblakstudio/wpwebpack/commit/9bb83628150c77dfd50beedf0c5001cce7054256))
* **npm:** Upgraded package versions ([d2ca644](https://github.com/oblakstudio/wpwebpack/commit/d2ca644a085da5e6df1a6f8c38ac351afa7c4d81))
* **updater:** Added the updater ([9508fda](https://github.com/oblakstudio/wpwebpack/commit/9508fda1a46baf92a8bff2cf106194888e49f4ae))


### BREAKING CHANGES

* **npm:** TypeScript updated to 4.3.2. Please test your code thoroughly for regression bugs

# [1.5.0](https://github.com/oblakstudio/wpwebpack/compare/v1.4.0...v1.5.0) (2021-03-06)


### Bug Fixes

* **docs:** Added basic documentation [skip ci] ([4d913c1](https://github.com/oblakstudio/wpwebpack/commit/4d913c1529a3f2869b8f3ba9948f6285e91760d2))


### Features

* **build:** Streamlined build process ([47ab30b](https://github.com/oblakstudio/wpwebpack/commit/47ab30bf3329f3c2ecd9881a1f219cc827606905))

# [1.4.0](https://github.com/oblakstudio/wpwebpack/compare/v1.3.6...v1.4.0) (2021-03-06)


### Bug Fixes

* **core:** Fixed config includes that caused erroneous jQuery include ([e98d771](https://github.com/oblakstudio/wpwebpack/commit/e98d771100eda7871f14d2a91084d2816babdf45))


### Features

* **docs:** Added a Docsify template [skip ci] ([9383429](https://github.com/oblakstudio/wpwebpack/commit/9383429ed289ff52cc948bfe44c7b8169500556a))

## [1.3.6](https://github.com/oblakstudio/wpwebpack/compare/v1.3.5...v1.3.6) (2021-03-06)


### Bug Fixes

* **core:** remove unneeded files ([6c7da0d](https://github.com/oblakstudio/wpwebpack/commit/6c7da0d3873b3feec766e6fee3c7c4f866b35585))
* **core:** Removed unneeded NPM packages ([0210ea1](https://github.com/oblakstudio/wpwebpack/commit/0210ea116cf2846ef8e9e5338f79ba7240a55741))

## [1.3.5](https://github.com/oblakstudio/wpwebpack/compare/v1.3.4...v1.3.5) (2021-03-06)


### Bug Fixes

* **installer:** Fixed zip file handling ([0572467](https://github.com/oblakstudio/wpwebpack/commit/0572467684833b35f372eb28abadcc6382a89242))

## [1.3.4](https://github.com/oblakstudio/wpwebpack/compare/v1.3.3...v1.3.4) (2021-03-06)


### Bug Fixes

* **build:** Tweaked build process to include the latest version in the installer ([c4a5211](https://github.com/oblakstudio/wpwebpack/commit/c4a521126025fdd5260a394ad035f033a46d30c8))
* **installer:** Fixed zipball url ([6c933c1](https://github.com/oblakstudio/wpwebpack/commit/6c933c1137e5206774c8e60bce7be62de45bffc2))

## [1.3.3](https://github.com/oblakstudio/wpwebpack/compare/v1.3.2...v1.3.3) (2021-03-06)


### Bug Fixes

* **npm:** Fixed npmignore ([ef81f1c](https://github.com/oblakstudio/wpwebpack/commit/ef81f1c61cacf0098e5ea5e918ab5cd76eb8e805))

## [1.3.2](https://github.com/oblakstudio/wpwebpack/compare/v1.3.1...v1.3.2) (2021-03-06)


### Bug Fixes

* **build:** Fixed file paths in the installer binary ([7bfbced](https://github.com/oblakstudio/wpwebpack/commit/7bfbceda320cb81484740ce786c4c9b02ffd3a4f))
* **core:** Fixed tsc errors ([1abfb6c](https://github.com/oblakstudio/wpwebpack/commit/1abfb6c60f07890cd5c52d16204daf9f6d690bd8))

## [1.3.1](https://github.com/oblakstudio/wpwebpack/compare/v1.3.0...v1.3.1) (2021-03-06)


### Bug Fixes

* **build:** Assets not compiling during deploy process ([a8aefde](https://github.com/oblakstudio/wpwebpack/commit/a8aefde83d8813750bf372ba6221535a6e063f2c))

# [1.3.0](https://github.com/oblakstudio/wpwebpack/compare/v1.2.5...v1.3.0) (2021-03-06)


### Bug Fixes

* **docs:** Fixed README.md ([8e3040a](https://github.com/oblakstudio/wpwebpack/commit/8e3040ae757db0ab2c2f9ca1358f10212f1d952e))
* **docs:** Fixed README.md [skip ci] ([23cd832](https://github.com/oblakstudio/wpwebpack/commit/23cd832395f7e0833f3fe3bf8ef6a741f6e6aa41))


### Features

* **installer:** Change the installer to work with this repo ([f1d301e](https://github.com/oblakstudio/wpwebpack/commit/f1d301ebc8174e11c102a815ae26e4480efb7bb3))

## [1.2.5](https://github.com/oblakstudio/wpwebpack/compare/v1.2.4...v1.2.5) (2021-03-06)


### Bug Fixes

* **build:** Fixed order of semantic-release plugins ([2258c4f](https://github.com/oblakstudio/wpwebpack/commit/2258c4fd307defffee5316eda6615d210facd01d))

## [1.2.4](https://github.com/oblakstudio/wpwebpack/compare/v1.2.3...v1.2.4) (2021-03-06)


### Bug Fixes

* **build:** Added update to package.json version ([4ef0249](https://github.com/oblakstudio/wpwebpack/commit/4ef024975ae8740f6088b8d69b145f9a64d6f4a4))

## [1.2.3](https://github.com/oblakstudio/wpwebpack/compare/v1.2.2...v1.2.3) (2021-03-06)


### Bug Fixes

* **build:** Fixed zip file folder path ([b4f5e93](https://github.com/oblakstudio/wpwebpack/commit/b4f5e933935f991503d55dd96ec4a72b9bc74074))

## [1.2.2](https://github.com/oblakstudio/wpwebpack/compare/v1.2.1...v1.2.2) (2021-03-06)


### Bug Fixes

* **build:** Fixed zip glob for asset name ([1611434](https://github.com/oblakstudio/wpwebpack/commit/1611434e3c2fb661d7694bbad8fc15b967fbb8c0))

## [1.2.1](https://github.com/oblakstudio/wpwebpack/compare/v1.2.0...v1.2.1) (2021-03-06)


### Bug Fixes

* **build:** Fixed [#1](https://github.com/oblakstudio/wpwebpack/issues/1) ([b9be74f](https://github.com/oblakstudio/wpwebpack/commit/b9be74f02ace83037c4148adaa13a84cb190d86d))
* **build:** Fixed [#2](https://github.com/oblakstudio/wpwebpack/issues/2) ([f29d648](https://github.com/oblakstudio/wpwebpack/commit/f29d648c52b62c37dc3169e20c47598294562c5b))
* **build:** Fixed build workflow ([46b935b](https://github.com/oblakstudio/wpwebpack/commit/46b935b949540dc3511e46a48d2f6606dba56242))
* **build:** Fixed permission issue ([1309326](https://github.com/oblakstudio/wpwebpack/commit/1309326bd98badc1de82311baa3b68092cfd878a))
* **core:** Fixed the stupid two-repo workflow ([8e36f46](https://github.com/oblakstudio/wpwebpack/commit/8e36f46a388c1aa900a1feabab6a0215e369bb67))
* **core:** Fixed typo in package.json ([fdc4600](https://github.com/oblakstudio/wpwebpack/commit/fdc460091003ee39515f27840f11cf744e5f95b2))


### Features

* **docs:** Removed unneeded header from readme [skip release] ([f725b17](https://github.com/oblakstudio/wpwebpack/commit/f725b178f7f6933a21d6f9457d4efe3aa22d5c4f))

## [1.2.1](https://github.com/oblakstudio/wpwebpack/compare/v1.2.0...v1.2.1) (2021-03-06)


### Bug Fixes

* **build:** Fixed [#1](https://github.com/oblakstudio/wpwebpack/issues/1) ([b9be74f](https://github.com/oblakstudio/wpwebpack/commit/b9be74f02ace83037c4148adaa13a84cb190d86d))
* **build:** Fixed [#2](https://github.com/oblakstudio/wpwebpack/issues/2) ([f29d648](https://github.com/oblakstudio/wpwebpack/commit/f29d648c52b62c37dc3169e20c47598294562c5b))
* **build:** Fixed build workflow ([46b935b](https://github.com/oblakstudio/wpwebpack/commit/46b935b949540dc3511e46a48d2f6606dba56242))
* **core:** Fixed the stupid two-repo workflow ([8e36f46](https://github.com/oblakstudio/wpwebpack/commit/8e36f46a388c1aa900a1feabab6a0215e369bb67))
* **core:** Fixed typo in package.json ([fdc4600](https://github.com/oblakstudio/wpwebpack/commit/fdc460091003ee39515f27840f11cf744e5f95b2))


### Features

* **docs:** Removed unneeded header from readme [skip release] ([f725b17](https://github.com/oblakstudio/wpwebpack/commit/f725b178f7f6933a21d6f9457d4efe3aa22d5c4f))

# [1.2.0](https://github.com/oblakstudio/wpwebpack/compare/v1.1.0...v1.2.0) (2021-03-06)


### Features

* **docs:** Improved readme and added package.json keywords ([84727cf](https://github.com/oblakstudio/wpwebpack/commit/84727cf8cd3375a71f37607be38fcfc3ed743ea7))

# [1.1.0](https://github.com/oblakstudio/wpwebpack/compare/v1.0.0...v1.1.0) (2021-03-05)


### Bug Fixes

* **build:** Fixed npx execution ([053c9cf](https://github.com/oblakstudio/wpwebpack/commit/053c9cfe968ae771de44b3b126a161bb8f9d2eaa))


### Features

* **build:** tweaked sem-res builds ([f356a38](https://github.com/oblakstudio/wpwebpack/commit/f356a38766a34c5b0d3bba764ad3f58225ae36ea))

# 1.0.0 (2021-03-05)


### Bug Fixes

* **build:** Finalizing build process ([59c9496](https://github.com/oblakstudio/wpwebpack/commit/59c9496d08644d9d38974340920bd0c0157f2fcb))
* **build:** further fixes to build system ([c5989a5](https://github.com/oblakstudio/wpwebpack/commit/c5989a51d654657d16ca0df72257aaf1e3b91cd7))
* **build:** further fixes to build system ([5a3ade7](https://github.com/oblakstudio/wpwebpack/commit/5a3ade74d903f2c190d5d5888883d211ab84e73f))
* **build:** Further tweaks for auto-builds ([c802589](https://github.com/oblakstudio/wpwebpack/commit/c802589be892b7ecc008ba63369fc6c65ea84dc1))
* **build:** semantic-release tweaks ([1fd448c](https://github.com/oblakstudio/wpwebpack/commit/1fd448c23d1d9640f61e3f4d5a4ac1d5716054a4))
* **build:** still working out semver kinks ([c66fb49](https://github.com/oblakstudio/wpwebpack/commit/c66fb493f874aa83be5678f5bdf33e198918afe2))
* **installer:** Fixed an error during overwrite ([8932e9d](https://github.com/oblakstudio/wpwebpack/commit/8932e9d71c4fb98a91372b76f750d339053afc31))
* **package:** fixed erroneous package version ([1036622](https://github.com/oblakstudio/wpwebpack/commit/1036622b765a801cd2e9b4dc16346b7d0cc6d762))


### Features

* **base:** added base files ([e07a0ac](https://github.com/oblakstudio/wpwebpack/commit/e07a0acc7f2deb75697405ac6a4287a6cdf9f534))
* **build:** Added basic github action file ([5c9d6bf](https://github.com/oblakstudio/wpwebpack/commit/5c9d6bf28a4f2a56a784550dfd05abd636911548))
* **build:** new build workflow ([e27b324](https://github.com/oblakstudio/wpwebpack/commit/e27b324a9ba49da516dfb9a284d9f0baa00dc2a4))
* **build:** semantic release test ([1c59837](https://github.com/oblakstudio/wpwebpack/commit/1c59837cc294931d15894f72fce9d1f8075d82b9))
* **docs:** Added a changelog ([2675886](https://github.com/oblakstudio/wpwebpack/commit/2675886a409aac21acc94d4bac6f78709c9bdb10))

# 1.0.0 (2021-03-05)


### Bug Fixes

* **build:** Finalizing build process ([59c9496](https://github.com/oblakstudio/wpwebpack/commit/59c9496d08644d9d38974340920bd0c0157f2fcb))
* **build:** further fixes to build system ([5a3ade7](https://github.com/oblakstudio/wpwebpack/commit/5a3ade74d903f2c190d5d5888883d211ab84e73f))
* **build:** Further tweaks for auto-builds ([c802589](https://github.com/oblakstudio/wpwebpack/commit/c802589be892b7ecc008ba63369fc6c65ea84dc1))
* **build:** semantic-release tweaks ([1fd448c](https://github.com/oblakstudio/wpwebpack/commit/1fd448c23d1d9640f61e3f4d5a4ac1d5716054a4))
* **build:** still working out semver kinks ([c66fb49](https://github.com/oblakstudio/wpwebpack/commit/c66fb493f874aa83be5678f5bdf33e198918afe2))
* **installer:** Fixed an error during overwrite ([8932e9d](https://github.com/oblakstudio/wpwebpack/commit/8932e9d71c4fb98a91372b76f750d339053afc31))
* **package:** fixed erroneous package version ([1036622](https://github.com/oblakstudio/wpwebpack/commit/1036622b765a801cd2e9b4dc16346b7d0cc6d762))


### Features

* **base:** added base files ([e07a0ac](https://github.com/oblakstudio/wpwebpack/commit/e07a0acc7f2deb75697405ac6a4287a6cdf9f534))
* **build:** Added basic github action file ([5c9d6bf](https://github.com/oblakstudio/wpwebpack/commit/5c9d6bf28a4f2a56a784550dfd05abd636911548))
* **build:** new build workflow ([e27b324](https://github.com/oblakstudio/wpwebpack/commit/e27b324a9ba49da516dfb9a284d9f0baa00dc2a4))
* **build:** semantic release test ([1c59837](https://github.com/oblakstudio/wpwebpack/commit/1c59837cc294931d15894f72fce9d1f8075d82b9))
* **docs:** Added a changelog ([2675886](https://github.com/oblakstudio/wpwebpack/commit/2675886a409aac21acc94d4bac6f78709c9bdb10))
