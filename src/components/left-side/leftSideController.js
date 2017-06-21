/**
 * Created by itay on 19/06/17.
 */

import * as leftSideActions from './../../actions-creators/leftSideActionCreator';

export default class LeftSideCtrl {

    constructor($scope, $ngRedux) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis,leftSideActions)(this);
        $scope.$on('$destroy', unsubscribe);
    }


    // Which part of the Redux global state does our component want to receive?
    mapStateToThis(state) {
        return {
            searchString: state.searchString,
            trackList: state.trackList
        };
    }
}
