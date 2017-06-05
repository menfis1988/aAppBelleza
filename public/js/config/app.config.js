function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, $mdThemingProvider) {
  'ngInject';
  

  $mdThemingProvider.theme('default')
       .primaryPalette('amber', {
        'default': '500',
        'hue-1': '700'
      }) 
       .accentPalette('brown');


  $urlRouterProvider.otherwise('/');

}

export default AppConfig;