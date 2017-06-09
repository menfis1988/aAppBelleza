class Candidatas {

  constructor($resource) {
    'ngInject';

    return $resource('api/candidatas/:id', {id: '@_id'}, {
        update: { method: 'PUT'},
        get: { method: 'GET', isArray: true},
        show: { method: 'GET'},
    })
  

  }

}

export default Candidatas;