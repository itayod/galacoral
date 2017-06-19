require('./index.html')
import angular from 'angular';
import leftSide from './components/left-side/leftSide';

angular.module('galacoral',[leftSide])


//kick start angular on doc ready.
angular.element(document).ready(function() {
    angular.bootstrap(document,['galacoral']);
});

console.log(angular);