import angular from 'angular';

// Create the module where our functionality can attach to
let candidatasModule = angular.module('app.candidatas', []);

// // Include our UI-Router config settings
// import CandidatasConfig from './candidatas.config';
// candidatasModule.config(CandidatasConfig);

// // Controllers
// import CandidatasCtrl from './candidatas.controller';
// candidatasModule.controller('CandidatasCtrl', CandidatasCtrl);

// //Services
// import CandidatasService from './candidatas.service';
// candidatasModule.service('Candidatas', CandidatasService);

// Components
import CandidatasHeader from './candidatas.component';
candidatasModule.component('candidatasHeader', CandidatasHeader);


export default candidatasModule;