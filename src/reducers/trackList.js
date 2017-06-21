/**
 * Created by itay on 20/06/17.
 */
import {LEFT_SIDE_TRACK_LIST_RECEIVED} from './../actions/leftSideActions';

const initialState = {
    tracks: [],
    currentTracks: [],
    currentPage: 0
}

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case LEFT_SIDE_TRACK_LIST_RECEIVED:
            state = {
                tracks: action.tracks,
                currentTracks: action.tracks.slice(0,6),
                currentPage: 0
            }

            return state;
        default:
            return state;
    }
}
