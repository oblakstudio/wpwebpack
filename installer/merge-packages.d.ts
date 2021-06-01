declare module 'merge-packages' {

  declare interface PackageJson {
    description: appendString,
    main: replaceString,
    bin: mergeBin,
    repository: mergeRepository,
    dependencies: mergeDependencies,
    devDependencies: mergeDependencies,
    peerDependencies: mergeDependencies,
    engines: mergeDependencies,
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  declare function mergeJson(...packageJson: any) : PackageJson
}
