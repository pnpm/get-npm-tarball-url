# get-npm-tarball-url

[![Greenkeeper badge](https://badges.greenkeeper.io/pnpm/get-npm-tarball-url.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/pnpm/get-npm-tarball-url.svg?branch=master)](https://travis-ci.org/pnpm/get-npm-tarball-url)

> Create the tarball URL of a npm package

## Installation

```
npm i -S get-npm-tarball-url
```

## Usage

```js
import getNpmTarbalUrl from 'get-npm-tarball-url'

const url = getNpmTarbalUrl('foo', '1.0.0')

console.log(url)
// 'http://registry.npmjs.org/foo/-/foo-1.0.0.tgz'
```

## License

[MIT](LICENSE) © [Zoltan Kochan](https://www.kochan.io)
