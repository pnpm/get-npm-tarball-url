export default function (
  pkgName: string,
  pkgVersion: string,
  opts?: {
    registry?: string
  }): string {
  let registry!: string
  if (opts?.registry) {
    registry = opts.registry.endsWith('/') ? opts.registry : `${opts.registry}/`
  } else {
    registry = 'https://registry.npmjs.org/'
  }

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
