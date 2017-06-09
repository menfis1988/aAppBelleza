import angular from 'angular';

// Create the module where our functionality can attach to
let auspiciantesModule = angular.module('app.auspiciantes', []);

// Include our UI-Router config settings
import AuspiciantesConfig from './auspiciantes.config';
auspiciantesModule.config(AuspiciantesConfig);

// Controllers
import AuspiciantesCtrl from './auspiciantes.controller';
auspiciantesModule.controller('AuspiciantesCtrl', AuspiciantesCtrl);

//Services
import AuspiciantesService from './auspiciantes.service';
auspiciantesModule.service('Auspiciantes', AuspiciantesService);

export default auspiciantesModule;