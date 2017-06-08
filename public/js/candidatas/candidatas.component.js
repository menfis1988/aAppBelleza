class CandidatasCtrl {
  constructor($scope, Candidatas) {
    'ngInject';

    this._$scope=$scope

    this._$scope.candidatas=Candidatas.query();
  

  }
}

let CandidatasHeader = {
  controller: CandidatasCtrl,
  templateUrl: 'js/candidatas/candidatas.html'
};


export default CandidatasHeader;