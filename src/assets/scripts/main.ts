import { Router } from 'body-class-router';

import CommonRoute from './routes/common.resolver';

const routes = new Router({
  common: new CommonRoute(),
});

jQuery(() => {
  routes.loadEvents();
});
