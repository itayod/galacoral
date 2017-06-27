require('./index.html')

import SC from 'soundcloud';
import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';

import localStorageMiddleware from './middlewares/localStorage';
import rootReducer from './reducers';

import leftSide from './components/left-side/leftSide';
import main from './components/main/main';
import rightSide from './components/right-side/rightSide';

import {API_KEY,LOCAL_STORAGE_PREFIX} from './constants';

angular.module('galacoral',[ngRedux,leftSide,main,rightSide])
  .constant('clientId',API_KEY)
  .config(($ngReduxProvider) => {
      let storageState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PREFIX));

      var state = {
          searchString: 'pixis',
          recentSearch: storageState.recentSearch
      };

      //Creates the Redux store, and allow connect() to access it.
      $ngReduxProvider.createStoreWith(rootReducer, [thunk,localStorageMiddleware], [],state);
  })
  .run(()=> {
    SC.initialize({
      client_id: 'ggX0UomnLs0VmW7qZnCzw'
    })
  })


//kick start angular on doc ready.
angular.element(document).ready(function() {
    angular.bootstrap(document,['galacoral']);
});

console.log(angular);