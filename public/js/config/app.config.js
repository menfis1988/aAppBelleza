function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, $mdThemingProvider) {
  'ngInject';
  

  $mdThemingProvider.theme('default')
       .primaryPalette('deep-orange', {
        'default': '100',
        'hue-1': '200'
      }) 
       .accentPalette('brown');


  $urlRouterProvider.otherwise('/');

}

export default AppConfig;