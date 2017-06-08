class Home {
  constructor($resource) {
    'ngInject';
    
    this.user = window.user;

    return {
      user: this.user
    }
    

  }

}

export default Home;