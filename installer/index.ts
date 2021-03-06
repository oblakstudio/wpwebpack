import Installer from './Installer';
import * as config from '../package.json'

( new Installer(config.version) ).run()
  .then((returnValue) => {process.exit(returnValue); })
  .catch((exception) => console.error(exception))

