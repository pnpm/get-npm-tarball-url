export default function (
  pkgName: string,
  pkgVersion: string,
  opts?: {
    registry?: string
  }): string {
  const registry = normalizeRegistry(opts && opts.registry || 'http://registry.npmjs.org/')

  const scopelessName = getScopelessName(pkgName)
  return `${registry}${pkgName}/-/${scopelessName}-${pkgVersion}.tgz`
}

function normalizeRegistry (registry: string) {
  if (registry[registry.length - 1] === '/') return registry
  return `${registry}/`
}

function getScopelessName (name: string) {
  if (name[0] !== '@') {
    return name
  }
  return name.split('/')[1]
}
