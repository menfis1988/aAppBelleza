class CandidatasCtrl {
  constructor($scope, Candidatas) {
    'ngInject';

    $scope.candidatas=Candidatas.query();

  }
}

let CandidatasHeader = {
  controller: CandidatasCtrl,
  templateUrl: 'js/candidatas/candidatas.html'
};


export default CandidatasHeader;