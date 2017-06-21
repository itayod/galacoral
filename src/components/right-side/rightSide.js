/**
 * Created by itay on 19/06/17.
 */
import RightSideController from './rightSideController';

export default angular.module('rightSide',[])
    .directive('rightSide',() => {
        return {
            controller: RightSideController,
            controllerAs: 'rightSideCtrl',
            template: require('./rightSide.html')
        }
    }).name