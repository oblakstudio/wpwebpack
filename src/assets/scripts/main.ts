import { Router } from 'body-class-router';

import CommonRoute from './routes/common';
import HomeRoute from './routes/Home';


const routes = new Router({
  common: new CommonRoute(),
  home:   new HomeRoute(),
});

jQuery(() => {
  routes.loadEvents();
});
