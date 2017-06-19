/**
 * Created by itay on 19/06/17.
 */

import LeftSideCtrl from './leftSideCtrl'

export default angular.module('leftSide',[])
    .directive('leftSide',() => {
        return {
            controller: LeftSideCtrl,
            controllerAs: 'leftSideCtrl',
            template: require('./leftSide.html')
        }
    }).name