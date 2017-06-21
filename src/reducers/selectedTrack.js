/**
 * Created by itay on 20/06/17.
 */
import {LEFT_SIDE_TRACK_SELECTED} from './../actions/leftSideActions';
import {LEFT_SIDE_GO_CLICKED} from './../actions/leftSideActions';

const initialState = false;

export default function (state = initialState, action) {
    switch (action.type) {
        case LEFT_SIDE_GO_CLICKED:
            return state;
        case LEFT_SIDE_TRACK_SELECTED:
            state = action.track;

            return state;
        default:
            return state;
    }
}
