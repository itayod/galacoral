/**
 * Created by itay on 20/06/17.
 */
import * as actions from './../actions/leftSideActions';

export function goClicked(searchString) {

    return (dispatch,getState) => {

        dispatch({type:actions.LEFT_SIDE_GO_CLICKED});

        SC.get('/tracks', {
            q: searchString
        }).then((tracks) => {
            dispatch({type:actions.LEFT_SIDE_TRACK_LIST_RECEIVED, tracks: tracks});
        });

    };
}

export function nextClicked() {

    return (dispatch,getState) => {
        dispatch({type:actions.LEFT_SIDE_NEXT_BUTTON_CLICKED});
    };
}

export function trackSelected(track) {

    return (dispatch,getState) => {
        dispatch({type:actions.LEFT_SIDE_TRACK_SELECTED,track:track});
    };
}

