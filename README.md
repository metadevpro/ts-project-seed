# ts-project-seed

TypeScript seed project. Use it to scaffold a TS project with all the tooling need to *properly* (opinated) set up a project.

[![Build Status](https://travis-ci.org/metadevpro/ts-project-seed.svg?branch=master)](https://travis-ci.org/metadevpro/ts-project-seed)
[![Dependency Status](https://david-dm.org/metadevpro/ts-project-seed.svg)](https://david-dm.org/metadevpro/ts-project-seed)
[![devDependencies Status](https://david-dm.org/metadevpro/ts-project-seed/dev-status.svg)](https://david-dm.org/metadevpro/ts-project-seed?type=dev)
[![bitHound Overall Score](https://www.bithound.io/github/metadevpro/ts-project-seed/badges/score.svg)](https://www.bithound.io/github/metadevpro/ts-project-seed)
[![Known Vulnerabilities](https://snyk.io/test/github/metadevpro/ts-project-seed/badge.svg)](https://snyk.io/test/github/metadevpro/ts-project-seed)
[![Greenkeeper badge](https://badges.greenkeeper.io/metadevpro/ts-project-seed.svg)](https://greenkeeper.io/)

## How to use it

1. Clone from github
2. Remove origin to seed project
3. Change the license, metadata, etc. and start building.

```
git clone https://github.com/metadevpro/ts-project-seed <yourProjectName>
cd <yourProjectName>
git remote remove origin
npm (or yarn) install
```

## Features
Scripts provided:

### Lint
Linting using tslint.

```
npm run lint
```

### Clean
Clear the `dist/` folder.

```
npm run clean
```

### Build
Transpile TS code to JS in `dist/` folder. Maps included.

```
npm run build
```

Continous build:

```
npm run build:w
```

### Uglify
Concat and minify all JS files in `dist/` folder to one output (default `dist/all.min.js`).

```
npm run uglify
```

### Unit Test
Tests framework used are: mocha & chai.

TDD mode to run it concurrently with your editions:

```
npm run test:tdd
```

CI mode to run it only one:

```
npm test
```

Testing with coverage:

```
nyc npm test
nyc report -r text lcov html
coverage/index.html
```


### Coverage Test
TDD mode to run it concurrently with your editions:

```
npm run test:tdd
```

CI mode to run it only one:

```
npm run test
```

## Code Structure

- `/src` Place your TS code under this folder. Test also following the naming convention `*.spec.ts` next to file to be unit tested.
- `/dist` Output folder for transpiled project output.
- `/coverage` Output folder for coverage reports.

## Tools used

- `ts-node` Node tool to compile TS code on the fly.
- `mocha` Testing framework.
- `chai` Assertion framework.
- `rimraf` Safe cross-platform rmdir for clean step.
- `tslint` TS linter.
- `typescript`, of course.

This project seed will be updated to keep the dependences up to date.

## License
This project seed is licensed as Public Domain. Therefore, do whatever you want including changing the license for your needs in your project.
More specifically, it was licensed as CC0 (Creative Commons 0) to further improve the freedom of a Public Domain Licence in context where it is not applicable.


## Credits
**Contact:** Pedro J. Molina | github: [pjmolina](https://github.com/pjmolina) | twitter: [pmolinam](https://twitter.com/pmolinam)

(c) 2017. Metadev S.L. [https://metadev.pro](https://metadev.pro) twitter: [metad3v](https://twitter.com/metad3v)