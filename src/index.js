require('./index.html')

import SC from 'soundcloud';
import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';


import leftSide from './components/left-side/leftSide';

angular.module('galacoral',[ngRedux,leftSide])
  .constant('clientId','ggX0UomnLs0VmW7qZnCzw')
  .config(($ngReduxProvider) => {
      var state = {
          counter: 1
      };

      //Creates the Redux store, and allow connect() to access it.
      $ngReduxProvider.createStoreWith(rootReducer, [thunk], [],state);
  })
  .run(()=> {
    SC.initialize({
      client_id: 'ggX0UomnLs0VmW7qZnCzw'
    })
    SC.get('/tracks', {
      q: 'streetlights'
    }).then((tracks) => {

      console.log('tracks',tracks);
    });
  })


//kick start angular on doc ready.
angular.element(document).ready(function() {
    angular.bootstrap(document,['galacoral']);
});

console.log(angular);