function AuspiciantesConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('Auspiciantes',{
    url: '/auspiciantes',
    templateUrl: 'js/auspiciantes/auspiciantes.html',
    controller: 'AuspiciantesCtrl'
  })
  

};

export default AuspiciantesConfig;