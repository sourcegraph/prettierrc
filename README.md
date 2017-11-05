
# Sourcegraph Prettier Config

[![npm](https://img.shields.io/npm/v/@sourcegraph/prettierrc.svg)](https://www.npmjs.com/package/@sourcegraph/prettierrc)
[![downloads](https://img.shields.io/npm/dt/@sourcegraph/prettierrc.svg)](https://www.npmjs.com/package/@sourcegraph/prettierrc)
[![build](https://badge.buildkite.com/bb1be4ec327c5bac82a5d01684dc978fdf535094cd3466acab.svg)](https://buildkite.com/sourcegraph/prettierrc)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Prettier config for projects at Sourcegraph.

## Usage

```
npm install --save-dev @sourcegraph/prettierrc
```

Then add this package.json:

```json
{
  "scripts": {
    "prettier": "prettier --config node_modules/@sourcegraph/prettierrc/.prettierrc --list-different --write"
  }
}
```

## Making changes

```
npm link
cd <project>
npm link @sourcegraph/prettierrc
npm run prettier
```

## Publish a new version

Follow [semver](http://semver.org/). **Changing or adding a rule is a breaking change and requires a new major version**.

```
npm version major|minor|patch
git push
git push --tags
npm publish
```
