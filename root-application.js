/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import * as singleSpa from 'single-spa';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

function showWhenAnyOf(routes) {
  return function (location) {
    return routes.some((route) => location.pathname === route);
  };
}

function showWhenPrefix(routes) {
  return function (location) {
    return routes.some((route) => location.pathname.startsWith(route));
  };
}

function showExcept(routes) {
  return function (location) {
    return routes.every((route) => location.pathname !== route);
  };
}
singleSpa.registerApplication(
  'login',
  () => import('sspa-auth'),
  showWhenAnyOf(['/']),
);

singleSpa.registerApplication(
  'auth-app',
  () => import('single-spa-auth-app'),
  showWhenAnyOf(['/login'])
)

singleSpa.registerApplication(
  'vue-app',
  () => import('single-spa-vue-app'),
  showWhenAnyOf(['/vue'])
)

singleSpa.start();