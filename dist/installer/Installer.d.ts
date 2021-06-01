declare class Installer {
    /**
     * WP-webpack installation directory
     *
     * @private
     * @type {string}
     * @memberof Installer
     */
    private installDir;
    /**
     * Release version
     *
     * @private
     * @type {string}
     * @memberof Installer
     */
    private releaseVer;
    /**
     * Spinner variable for use in console
     *
     * @private
     * @type {ora.Ora}
     * @memberof Installer
     */
    private spinner;
    constructor(version: string);
    /**
     * Main installer function
     *
     * @return {Promise<0|1>} Program exit code
     */
    run(): Promise<number>;
    private sanityCheck;
    private preinstallCheck;
    /**
     * Displays confirm files promt during installation
     */
    private confirmOverwrite;
    private install;
    private downloadRelease;
    private extractFiles;
    private installPackages;
    private postInstall;
    private exit;
}
export default Installer;
