class Home {
  constructor($resource) {
    'ngInject';
    
    this.useradmin = window.useradmin;

    return {
      user: this.useradmin
    }
    

  }

}

export default Home;