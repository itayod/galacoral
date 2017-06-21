/**
 * Created by itay on 20/06/17.
 */
import {LEFT_SIDE_GO_CLICKED} from './../actions/leftSideActions';

export default function (state = '', action) {
    console.log(action);
    switch (action.type) {
        case LEFT_SIDE_GO_CLICKED:
            state = '';
            return state;
        default:
            return state;
    }
}
