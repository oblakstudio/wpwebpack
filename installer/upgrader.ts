/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import { mergeJson } from 'merge-packages';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';
import {yellow as y, green as g} from 'chalk';
import UpgradeOpts from './upgrade-opts';

export default class Upgrader {

  private installDir: string;

  private upgradeDir: string;

  private spinner : ora.Ora;

  public constructor(installDir: string, upgradeDir: string) {
    this.installDir = installDir;
    this.upgradeDir = upgradeDir;
    this.spinner = ora({
      text: '',
    });
  }

  public async run() : Promise<void> {

    const opts = await this.upgradeCheck();

    await this.upgradePackageJson();
    await this.upgradeConfig();

    if (opts.webpack) {
      this.spinner.start(`${y('Updating')} build files...`);
      const buildFiles = await this.getBuildFiles();
      await this.updateFiles(buildFiles);
      this.spinner.succeed(`${g(`Updated`)} build files`);
    }

    if (opts.browserlist) {
      this.spinner.start(`${y('Updating')} browserlist...`);
      await this.updateFiles(['.browserslistrc']);
      this.spinner.succeed(`${g(`Updated`)} browserlist`);
    }

    if (opts.editorconfig) {
      this.spinner.start(`${y('zcUpdating')} editorconfig...`);
      await this.updateFiles(['.editorconfig']);
      this.spinner.succeed(`${g(`Updated`)} editorconfig`);

    }

    if (opts.linters) {
      this.spinner.start(`${y('zcUpdating')} linters...`);
      await this.updateFiles(['.eslintrc.json', '.stylelintrc']);
      this.spinner.succeed(`${g(`Updated`)} linters`);

    }

    await this.cleanup();

  }

  private async upgradePackageJson() : Promise<void> {

    // eslint-disable-next-line import/no-dynamic-require
    const installedConfig = require(path.resolve(this.installDir, 'package.json'));

    //Clear unneded files
    delete installedConfig.private;
    delete installedConfig.repository;

    // eslint-disable-next-line import/no-dynamic-require
    const upgradedConfig = require(path.resolve(this.upgradeDir, 'package.json'));
    delete upgradedConfig.private;

    console.log(`${logSymbols.info} We will upgrade from v${installedConfig.version} to v${upgradedConfig.version}`);
    console.log(`${logSymbols.info} Updating package.json`);

    const newPackageJson = mergeJson(installedConfig, upgradedConfig);

    return await fs.writeFile(
      path.resolve(this.installDir, 'package.json'),
      JSON.stringify(newPackageJson, null, 4)
    );

  }

  private async upgradeConfig() : Promise<void> {

    console.log(`${logSymbols.info} Updating main config file`);

    return await fs.rename(
      path.resolve(this.upgradeDir, 'wpwp.config.js'),
      path.resolve(this.installDir, 'wpwp.config.new.js')
    );

  }

  private async getBuildFiles() : Promise<string[]> {

    return (await fs.readdir(path.resolve(this.upgradeDir, 'assets/build'))).map((file) => {
      return `assets/build/${file}`;
    }).concat(['tsconfig.json', '.babelrc']);

  }

  private async updateFiles(files: string[]) : Promise<void> {

    for (const file of files) {

      try {
        await fs.remove(path.resolve(this.installDir, file));
        await fs.rename(
          path.resolve(this.upgradeDir, file),
          path.resolve(this.installDir, file)
        );
      }
      catch(error) {
        console.log();
        console.log(`${logSymbols.error} Cannot update ${file}`);
      }

    }

  }

  private async cleanup()
  {
    await fs.remove(this.upgradeDir);
  }

  private async upgradeCheck() : Promise<UpgradeOpts> {

    console.log(`${logSymbols.info} Welcome to WPwebpack upgrader. This will upgrade files needed for proper operation and packages defined in package.json`);

    const webpack = await prompts({
      type: 'text',
      name: 'response',
      message: 'Upgrade build files (files in assets/build folder)? (y/n)',
    });

    const browserlist = await prompts({
      type: 'text',
      name: 'response',
      message: 'Upgrade browserlist (.browserlistrc)? (y/n)',
    });

    const editorconfig = await prompts({
      type: 'text',
      name: 'response',
      message: 'Upgrade editorconfig (.editorconfig)? (y/n)',
    });

    const linters = await prompts({
      type: 'text',
      name: 'response',
      message: 'Upgrade linters (.eslintrc.json, .stylelintrc)? (y/n)',
    });

    const opts = {
      webpack: (webpack.response == 'y') ? true : false,
      browserlist: (browserlist.response == 'y') ? true : false,
      editorconfig: (editorconfig.response == 'y') ? true : false,
      linters: (linters.response == 'y') ? true : false,
    };

    return opts;

  }

}
