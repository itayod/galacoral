/**
 * Created by itay on 20/06/17.
 */
import * as actions from './../actions/mainActions';

export function imageClicked(searchString) {

    return (dispatch,getState) => {

        dispatch({type:actions.MAIN_TRACK_IMAGE_CLICKED});

    };
}