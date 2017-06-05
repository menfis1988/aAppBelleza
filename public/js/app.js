import angular from 'angular';

import appConfig  from './config/app.config';

import 'angular-ui-router';
import 'angular-aria';
import 'angular-resource';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-messages';
import 'angular-material';
import 'angular-material-icons';

const requires = [
  'ui.router',
  'ngResource',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'ngMdIcons',
  'ngSanitize',
  
  ];


window.app = angular.module('App', requires);

angular.module('App').config(appConfig)