import test = require('tape')
import getNpmTarballUrl from 'get-npm-tarball-url'

test('create simple URL', t => {
  const url = getNpmTarballUrl('foo', '1.0.0')

  t.equal(url, 'https://registry.npmjs.org/foo/-/foo-1.0.0.tgz')

  t.end()
})

test('create URL of scoped package', t => {
  const url = getNpmTarballUrl('@types/semver', '5.3.31')

  t.equal(url, 'https://registry.npmjs.org/@types/semver/-/semver-5.3.31.tgz')

  t.end()
})

test('create URL of with custom registry package', t => {
  const url = getNpmTarballUrl('foo', '1.0.0', { registry: 'http://sinopia'})

  t.equal(url, 'http://sinopia/foo/-/foo-1.0.0.tgz')

  t.end()
})

test('create URL of with custom registry package with slash at the end', t => {
  const url = getNpmTarballUrl('foo', '1.0.0', { registry: 'http://sinopia/'})

  t.equal(url, 'http://sinopia/foo/-/foo-1.0.0.tgz')

  t.end()
})

test('ignore the build metadata in the version', t => {
  const url = getNpmTarballUrl('foo', '1.0.0+abc')

  t.equal(url, 'https://registry.npmjs.org/foo/-/foo-1.0.0.tgz')

  t.end()
})
