export default function (
  pkgName: string,
  pkgVersion: string,
  opts?: {
    registry?: string
  }): string {
  const registry = normalizeRegistry(opts && opts.registry || 'http://registry.npmjs.org/')

  const encodedName = getEncodedName(pkgName)
  const scopelessName = getScopelessName(pkgName)
  return `${registry}${encodedName}/-/${scopelessName}-${pkgVersion}.tgz`
}

function normalizeRegistry (registry: string) {
  if (registry[registry.length - 1] === '/') return registry
  return `${registry}/`
}

function getEncodedName (name: string) {
  if (name[0] === '@') {
    return `@${name.substr(1).replace('/', '%2f')}`
  }
  return name
}

function getScopelessName (name: string) {
  if (name[0] !== '@') {
    return name
  }
  return name.split('/')[1]
}
