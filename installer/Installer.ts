/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs-extra';
import path from 'path';
import yargs from 'yargs';
import ora from 'ora';
import logSymbols from 'log-symbols';
import prompts from 'prompts';
import download from 'download';
import checkNode from 'check-node-version';
import * as unzipper from 'unzipper';
import {red as r, yellow as y, green as g} from 'chalk';
import { command } from 'execa';

const clearConsole = require('clear-any-console');

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

  public constructor(version: string) {

    const argv = yargs.options({
      dir: {
        alias: 'd',
        demandOption: false,
        description: 'Directory to install WP Webpack to',
      },
    }).argv;

    this.releaseVer = version;
    this.installDir = (argv.dir as string) ?? process.cwd();

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
      await this.sanityCheck();
    }
    catch (error) {
      this.exit(error.message);
      return 1;
    }

    try {

      if (this.preinstallCheck()) {
        await this.confirmOverwrite();
      }

      await this.install();

      return 0;
    }
    catch(reason) {
      this.exit(reason);
      return 1;
    }

  }

  private async sanityCheck() : Promise<void> {

    clearConsole();

    const manualPromisification = new Promise<void>((resolve, reject) => {
      checkNode(
        {node: '>= 12'},
        (error, result) => {
          if (error) {
            return reject(error);
          }
          if (!result.isSatisfied) {
            return reject(new Error(`Incorrect Node.js version. Required: ${result.versions.node.wanted}, Found:${result.versions.node.version}`));
          }
          return resolve();
        }
      );
    });

    await manualPromisification;

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
  private async confirmOverwrite() : Promise<void> {

    console.log(logSymbols.error, r('Detected WP-webpack instalation files.'));

    const response = await prompts({
      type: 'text',
      name: 'overwrite',
      message: 'Overwrite? (y/n)',
    });

    if (response.overwrite !== 'y') {
      throw new Error('Installation cancelled');
    }

  }

  private async install() : Promise<void> {

    this.spinner.start(`${y('DOWNLOADING')} WP-webpack files...`);

    await this.downloadRelease(this.releaseVer);

    this.spinner.succeed(`${g(`DOWNLOADED`)} WP-webpack files`);

    this.spinner.start(`${y('Installing')} packages...`);

    await this.installPackages();

    this.spinner.succeed(`${g(`Installed`)} packages`);

  }

  private async downloadRelease(version: string) {

    const releaseFile : Buffer = await download(`https://github.com/oblakstudio/wpwebpack/releases/download/v${version}/wp-webpack-${version}.zip`);
    const unzippedDir: unzipper.CentralDirectory = await unzipper.Open.buffer(releaseFile);

    //for each file
    // remove base folder from path (first folder in path string exploded by /)
    // plop files to disk recursively creating directories while including the install dir as base
    try {
      await Promise.all(this.extractFiles(unzippedDir));
    } catch (error) {
      console.error(error);
    }

  }

  private extractFiles(unzippedDir: unzipper.CentralDirectory) : Promise<void>[] {

    return unzippedDir.files.filter((file) => 'File' === file.type).map(async (file) => {

      const formattedPath = [this.installDir].concat(file.path);
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
    this.spinner.succeed(`${g(`DOWNLOADED`)} WP-webpack files`);
  }

  private exit(message = 'Installation cancelled') : void {
    console.log(logSymbols.info, y(message));
  }

}

export default Installer;
