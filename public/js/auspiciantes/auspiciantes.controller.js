class AuspiciantesCtrl {
  constructor($scope, Auspiciantes, $stateParams, $http,) {
    'ngInject';

    

    $scope.candidatas=Auspiciantes.query();

   $scope.candidata = new Auspiciantes(); 

    $scope.count = 0;
    var max = $scope.count + 1;

    
    
    $scope.Status = function(a){
        a.estado = (a.estado=="Aprobado" ? "Pendiente" : "Aprobado");
        $http.put("api/candidatas/"+a._id,{estado:a.estado});
    };
      
    

  }
}




export default AuspiciantesCtrl;