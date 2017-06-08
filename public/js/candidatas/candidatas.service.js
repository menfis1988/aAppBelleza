class Candidatas {
  constructor($resource) {
    'ngInject';

    return $resource('api/candidatas/:id', {id: '@_id'}, {
        show: { method: 'GET'},
        update: { method: 'PUT'},
        get: { method: 'GET', isArray: true},
    })

  }

}

export default Candidatas;