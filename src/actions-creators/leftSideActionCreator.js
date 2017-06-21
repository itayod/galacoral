/**
 * Created by itay on 20/06/17.
 */
import * as actions from './../actions/leftSideActions';

export function goClicked(searchString) {
    console.log('ahoy',searchString)
    return (dispatch,getState) => {

        dispatch({type:actions.LEFT_SIDE_GO_CLICKED});

        SC.get('/tracks', {
            q: searchString
        }).then((tracks) => {
            dispatch({type:actions.LEFT_SIDE_TRACK_LIST_RECEIVED, tracks: tracks});
        });

    };
}
