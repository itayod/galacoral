/**
 * Created by itay on 19/06/17.
 */

import LeftSideCtrl from './leftSideCtrl'
import search from './search/search'
import trackList from './track-list/trackList'

export default angular.module('leftSide',[search,trackList])
    .directive('leftSide',() => {
        return {
            controller: LeftSideCtrl,
            controllerAs: 'leftSideCtrl',
            template: require('./leftSide.html')
        }
    }).name