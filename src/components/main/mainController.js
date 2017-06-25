/**
 * Created by itay on 19/06/17.
 */

import * as mainActions from './../../actions-creators/mainActionCreator';

export default class MainCtrl {

    constructor($scope, $ngRedux) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis,mainActions)(this);
        $scope.$on('$destroy', unsubscribe);
    }


    // Which part of the Redux global state does our component want to receive?
    mapStateToThis(state) {
        return {
            selectedTrack: state.selectedTrack
        };
    }
}
