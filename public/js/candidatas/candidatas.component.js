class CandidatasCtrl {
  constructor($scope, Candidatas, $stateParams, $http, $location) {
    'ngInject';

    $scope.candidatas=Candidatas.query();
    
    // obtengo los votos
    $scope.clicked = false;

    $scope.addVoto = function(item){
      item.votos +=1;
      $http.put("api/candidatas/"+item._id,{votos:item.votos});
      $scope.clicked = true;
    }

    //obtengo ultima sesion del usuario
    $scope.sesion = function () {
      $scope.user.lastsesion = Date.now();
      $http.put("api/user/"+$scope.user._id,{lastsesion:$scope.user.lastsesion});
    
    }

    $scope.user = window.user

    // comparo fechas
    
    var hoy = new Date(Date.now()).getDay()
    var datesesion = new Date($scope.user.lastsesion).getDay()

    $scope.compare = function () {
      if(hoy == datesesion) {
        return true
      }
    }


  }
}

let CandidatasHeader = {
  controller: CandidatasCtrl,
  templateUrl: 'js/candidatas/candidatas.html'
};


export default CandidatasHeader;