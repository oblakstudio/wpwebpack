export default class Upgrader {
    private installDir;
    private upgradeDir;
    private spinner;
    constructor(installDir: string, upgradeDir: string);
    run(): Promise<void>;
    private upgradePackageJson;
    private upgradeConfig;
    private getBuildFiles;
    private updateFiles;
    private cleanup;
    private upgradeCheck;
}
