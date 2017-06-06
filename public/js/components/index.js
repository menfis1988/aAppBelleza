import angular from 'angular';

// Create the module where our functionality can attach to
let componentsModule = angular.module('app.components', []);


// // Components
// import BellezaHeader from './header.component';
// componentsModule.component('bellezaHeader', BellezaHeader);

// Components toolbar
import BellezaToolbar from './toolbar.component';
componentsModule.component('bellezaToolbar', BellezaToolbar);


// import AppFooter from './footer.component';
// componentsModule.component('appFooter', AppFooter);


export default componentsModule;
