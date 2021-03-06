import Installer from './Installer';

(new Installer).run()
  .then((returnValue) => {process.exit(returnValue); })
  .catch((exception) => console.error(exception))

