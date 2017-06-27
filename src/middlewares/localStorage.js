/**
 * Created by itay on 27/06/17.
 */
import {LOCAL_STORAGE_PREFIX} from './../constants';

const localStorageMiddleware = (store) => {
  return next => action => {
    let state = store.getState();
    //TODO: in real app I would make it generic.
    let stateToSave = JSON.stringify({recentSearch: state.recentSearch});
    localStorage.setItem(LOCAL_STORAGE_PREFIX ,stateToSave);
    
    return next(action);
  }
}

export default localStorageMiddleware;