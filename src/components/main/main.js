/**
 * Created by itay on 19/06/17.
 */
require('./main.scss');

import MainCtrl from './mainController'
import imageDisplay from './image-display/imageDisplay'

export default angular.module('main',[imageDisplay])
    .directive('main',() => {
        return {
            controller: MainCtrl,
            controllerAs: 'mainCtrl',
            template: require('./main.html')
        }
    }).name