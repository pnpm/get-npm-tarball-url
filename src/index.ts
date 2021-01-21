import normalizeRegistry = require('normalize-registry-url')

export default function (
  pkgName: string,
  pkgVersion: string,
  opts?: {
    registry?: string
  }): string {
  const registry = normalizeRegistry(opts && opts.registry || 'https://registry.npmjs.org/')

  const scopelessName = getScopelessName(pkgName)
  return `${registry}${pkgName}/-/${scopelessName}-${removeBuildMetadataFromVersion(pkgVersion)}.tgz`
}

function removeBuildMetadataFromVersion (version: string) {
  const plusPos = version.indexOf('+')
  if (plusPos === -1) return version
  return version.substring(0, plusPos)
}

function getScopelessName (name: string) {
  if (name[0] !== '@') {
    return name
  }
  return name.split('/')[1]
}
