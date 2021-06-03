import Installer from './installer.component';
import * as config from '../package.json'

( new Installer(config.version) ).run()
  .then((returnValue) => {process.exit(returnValue); })
  .catch((exception) => console.error(exception))

