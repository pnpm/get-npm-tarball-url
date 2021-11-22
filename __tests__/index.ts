import getNpmTarballUrl from '../src'

test('create simple URL', () => {
  const url = getNpmTarballUrl('foo', '1.0.0')

  expect(url).toBe('https://registry.npmjs.org/foo/-/foo-1.0.0.tgz')
})

test('create URL of scoped package', () => {
  const url = getNpmTarballUrl('@types/semver', '5.3.31')

  expect(url).toBe('https://registry.npmjs.org/@types/semver/-/semver-5.3.31.tgz')
})

test('create URL of with custom registry package', () => {
  const url = getNpmTarballUrl('foo', '1.0.0', { registry: 'http://sinopia'})

  expect(url).toBe('http://sinopia/foo/-/foo-1.0.0.tgz')
})

test('create URL of with custom registry package with slash at the end', () => {
  const url = getNpmTarballUrl('foo', '1.0.0', { registry: 'http://sinopia/'})

  expect(url).toBe('http://sinopia/foo/-/foo-1.0.0.tgz')
})

test('ignore the build metadata in the version', () => {
  const url = getNpmTarballUrl('foo', '1.0.0+abc')

  expect(url).toBe('https://registry.npmjs.org/foo/-/foo-1.0.0.tgz')
})

test('create URL with custom registry package', () => {
  const url = getNpmTarballUrl('foo', '1.0.0', { registry: 'https://npm.pkg.github.com/owner'})

  expect(url).toBe('https://npm.pkg.github.com/owner/foo/-/foo-1.0.0.tgz')
})
