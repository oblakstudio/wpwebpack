/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs-extra';
import path from 'path';
import yargs from 'yargs';
import ora from 'ora';
import logSymbols from 'log-symbols';
import prompts from 'prompts';
import download from 'download';
import * as unzipper from 'unzipper';
import {yellow as y, green as g, cyan as c, blueBright as b} from 'chalk';
import { command } from 'execa';
import Upgrader from './upgrader';

class Installer {

  /**
   * WP-webpack installation directory
   *
   * @private
   * @type {string}
   * @memberof Installer
   */
  private installDir : string;

  /**
   * Release version
   *
   * @private
   * @type {string}
   * @memberof Installer
   */
  private releaseVer : string;

  /**
   * Spinner variable for use in console
   *
   * @private
   * @type {ora.Ora}
   * @memberof Installer
   */
  private spinner : ora.Ora;

  private upgrading : boolean

  private upgradeDir : string;

  public constructor(version: string) {

    const argv = yargs.options({
      dir: {
        alias: 'd',
        demandOption: false,
        description: 'Directory to install WP Webpack to',
      },
    }).argv;

    this.releaseVer = version;
    this.installDir = path.resolve(process.cwd(), (argv.dir as string)) ?? process.cwd();
    this.upgradeDir = path.resolve(this.installDir, 'tmp');
    this.upgrading = false;

    this.spinner = ora({
      text: '',
    });

  }


  /**
   * Main installer function
   *
   * @return {Promise<0|1>} Program exit code
   */
  public async run() : Promise<number> {

    try {
      this.sanityCheck();
    }
    catch (error) {
      this.exit(error.message);
      return 1;
    }

    try {

      const upgrade = (this.preinstallCheck()) ? await this.upgradePrompt() : false;

      await this.install(upgrade);

      return 0;
    }
    catch(reason) {
      this.exit(reason);
      return 1;
    }

  }

  private sanityCheck() : void {

    console.clear();

    console.log(`Welcome to ${c('WPwebpack')} installer v${this.releaseVer}`);
    console.log(`Depending on your internet and computer speed, this might take a couple of minutes`);

    const nodeVersion = parseInt(process.versions.node.split('.')[0]);

    if (nodeVersion < 12) {
      throw new Error(`Incorrect Node.js version. Required: 12, Found:${nodeVersion}`)
    }


  }

  private preinstallCheck() : boolean {
    return fs.existsSync(
      path.resolve(
        this.installDir,
        'wpwp.config.js'
      )
    );
  }

  /**
   * Displays confirm files promt during installation
   */
  private async upgradePrompt() : Promise<boolean> {

    console.log(logSymbols.info, y('Detected WP-webpack instalation files.'));

    const doUpgrade = await prompts({
      type: 'text',
      name: 'response',
      message: 'Upgrade? (y/n)',
    });

    if (doUpgrade.response == 'y') {
      return true;
    }

    const doOverwrite = await prompts({
      type: 'text',
      name: 'response',
      message: 'Overwrite? (y/n)',
    });

    if (doOverwrite.response !== 'y') {
      throw new Error('Installation cancelled');
    }

    return false;

  }

  private async install(upgrade : boolean) : Promise<void> {

    const downloadDir = upgrade ? this.upgradeDir : this.installDir;

    this.spinner.start(`${y('DOWNLOADING')} WP-webpack files...`);

    await this.downloadRelease(this.releaseVer, downloadDir);

    this.spinner.succeed(`${g(`DOWNLOADED`)} WP-webpack files`);

    if (upgrade) {
      const upgrader = new Upgrader(this.installDir, this.upgradeDir);
      await upgrader.run();
    }

    this.spinner.start(`${y('Installing')} packages...`);

    await this.installPackages();

    this.spinner.succeed(`${g(`Installed`)} packages`);

    this.postInstall();

  }

  private async downloadRelease(version: string, dirPath: string) {

    const releaseFile : Buffer = await download(`https://github.com/oblakstudio/wpwebpack/releases/download/v${version}/wp-webpack-${version}.zip`);
    const unzippedDir: unzipper.CentralDirectory = await unzipper.Open.buffer(releaseFile);

    // for each file
    // remove base folder from path (first folder in path string exploded by /)
    // plop files to disk recursively creating directories while including the install dir as base
    try {
      await Promise.all(this.extractFiles(unzippedDir, dirPath));
    } catch (error) {
      console.error(error);
    }

  }

  private extractFiles(unzippedDir: unzipper.CentralDirectory, dirPath: string) : Promise<void>[] {

    return unzippedDir.files.filter((file) => 'File' === file.type).map(async (file) => {

      const formattedPath = [dirPath].concat(file.path);
      const fullPath      = path.resolve(...formattedPath);

      return await fs.outputFile(
        fullPath,
        await file.buffer()
      );

    });

  }

  private async installPackages() : Promise<void> {
    process.chdir(this.installDir);
    await command('yarn install', );
  }

  private postInstall() {

    // Basic info
    console.log();
    console.log(logSymbols.success, g('ALL DONE!'), 'WPwebpack has been installed');
    console.log(logSymbols.info, 'Files have been installed to: ', c(this.installDir));

    // Quickstart
    console.log();
    console.log(logSymbols.info, 'You can find the QuickStart guide at:');
    console.log(b('https://wpwebpack.js.org'));

  }

  private exit(message = 'Installation cancelled') : void {
    console.log(logSymbols.info, y(message));
  }

}

export default Installer;
