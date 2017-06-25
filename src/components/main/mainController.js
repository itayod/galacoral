/**
 * Created by itay on 19/06/17.
 */

import * as mainActions from './../../actions-creators/mainActionCreator';

export default class MainCtrl {

    constructor($scope, $ngRedux) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis,mainActions)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    displayEmbeddedTrack() {
        SC.oEmbed(this.selectedTrack.trackObj.uri, {
            auto_play: true,
            element: document.getElementById('display-embedded-track')
        });
    }


    // Which part of the Redux global state does our component want to receive?
    mapStateToThis(state) {
        return {
            selectedTrack: state.selectedTrack
        };
    }
}
