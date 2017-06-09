function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('home', {
      url: '/',
      templateUrl: 'js/home/inicio.html',
      controller: 'HomeCtrl'
    });
  
};

export default HomeConfig;