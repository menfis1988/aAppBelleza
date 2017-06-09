class CandidatasCtrl {
  constructor($scope, Candidatas, $stateParams, $http, $routeParams) {
    'ngInject';

    $scope.candidatas=Candidatas.query();
    
    $scope.addVoto = function(item){
    item.votos +=1;
    $http.put("api/candidatas/"+item._id,{votos:item.votos});
  };


  }
}

let CandidatasHeader = {
  controller: CandidatasCtrl,
  templateUrl: 'js/candidatas/candidatas.html'
};


export default CandidatasHeader;