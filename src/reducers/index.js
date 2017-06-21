/**
 * Created by itay on 08/11/16.
 */
import { combineReducers } from 'redux';
import searchString  from './searchString';
import trackList  from './trackList';

const rootReducers = combineReducers({
    searchString,
    trackList
});


export default rootReducers;