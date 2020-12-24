# Template Literal querySelector

Type declaration wrapper for, and extension of an [early implementation][playground] of extended template literal type inferrence for `querySelector` posted by Oorta in [microsoft/TypeScript#29037][issue]. 

![][ex01]

In addition to `ParentNode#querySelector`, `ParentNode#querySelectorAll` is extended and returns an appropirately narrowed `HTMLCollection` (`HTMLCollectionOf`).

This is intended to be an interim solution; the library implementation should be used when added.

## Install

``` shell
npm install --save-dev "http://github.com/disco0/template-literal-queryselectors/tarball/main"
# Or
yarn add --dev "http://github.com/disco0/template-literal-queryselectors/tarball/main"
```

Or to install the alternative widended `typesVersions` branch:

``` shell
npm install --save-dev "http://github.com/disco0/template-literal-queryselectors/tarball/wide-typesVersions"
# Or
yarn add --dev "http://github.com/disco0/template-literal-queryselectors/tarball/wide-typesVersions"
```

This branch can be used if there's an issue with `typescript@next`'s semver resolution with typesVersions. If the functionality is enabled in Code, you can check which declaration file is being loaded by displaying the definition of the module import, or reference—if a valid version of TypeScript was detected, it should resolve to a file with the content:

```ts
///<reference path="../src/index.d.ts"/>

```

If its an empty file, make sure you've installed a version of TypeScript that's >= 4.1.0 globally or in your active workspace's project, and it's being used (which can be checked in Code by running the command `typescript.selectTypeScriptVersion` with JavaScript or TypeScript file focussed).

## Usage

In `globals.d.ts`, or each JavaScript / TypeScript file:

``` ts
///<reference types="template-literal-queryselectors"/>
```

[playground]: https://tsplay.dev/BmxabW
[issue]: https://github.com/microsoft/TypeScript/issues/29037

[ex01]: ./media/example-01.png
