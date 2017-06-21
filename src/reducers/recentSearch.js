/**
 * Created by itay on 20/06/17.
 */
import {LEFT_SIDE_GO_CLICKED} from './../actions/leftSideActions';

const HISTORY_SIZE = 5;
const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case LEFT_SIDE_GO_CLICKED:
            if(state.length > (HISTORY_SIZE - 1)) {
                state.shift();
            }
            state.push(action.searchString);

            return state;
        default:
            return state;
    }
}
