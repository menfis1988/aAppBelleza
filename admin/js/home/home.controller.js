class HomeCtrl {
  constructor($scope, $http, $stateParams, Home) {
    'ngInject';

    $scope.authentication = Home;

    
  }

}

export default HomeCtrl;