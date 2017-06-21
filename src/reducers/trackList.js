/**
 * Created by itay on 20/06/17.
 */
import {LEFT_SIDE_TRACK_LIST_RECEIVED} from './../actions/leftSideActions';
import {LEFT_SIDE_NEXT_BUTTON_CLICKED} from './../actions/leftSideActions';

const PAGE_SIZE = 6;
const initialState = {
    tracks: [],
    currentTracks: [],
    currentPage: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LEFT_SIDE_TRACK_LIST_RECEIVED:
            state = {
                tracks: action.tracks,
                currentTracks: action.tracks.slice(0,PAGE_SIZE),
                currentPage: 0
            }

            return state;
        case LEFT_SIDE_NEXT_BUTTON_CLICKED:
            let sliceStart = (state.currentPage + 1)* PAGE_SIZE;
            let sliceEnd = sliceStart + PAGE_SIZE;
            if(state.tracks.length > sliceStart) {
                state.currentTracks = state.tracks.slice(sliceStart,sliceEnd);
                state.currentPage++;
            }
            return state;
        default:
            return state;
    }
}
