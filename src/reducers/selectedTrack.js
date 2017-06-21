/**
 * Created by itay on 20/06/17.
 */
import {LEFT_SIDE_TRACK_SELECTED} from './../actions/leftSideActions';
import {LEFT_SIDE_GO_CLICKED} from './../actions/leftSideActions';
import {LEFT_SIDE_TRACK_EMBEDED} from './../actions/leftSideActions';

const initialState = {
    trackObj: false,
    embeddedTrack: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LEFT_SIDE_GO_CLICKED:
            state.trackObj = false;
            state.embeddedTrack = false;
            return state;
        case LEFT_SIDE_TRACK_SELECTED:
            state.trackObj = action.track;

            return state;
        case LEFT_SIDE_TRACK_EMBEDED:
            state.embeddedTrack = action.embed;

            return state;
        default:
            return state;
    }
}
