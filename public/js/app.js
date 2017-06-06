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

import './home';
import './candidatas';
import './components';

const requires = [
  'ui.router',
  'ngResource',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'ngMdIcons',
  'ngSanitize',

  'app.home',
  'app.candidatas',
  'app.components',
  
  ];


window.app = angular.module('App', requires);

angular.module('App').config(appConfig)