/**
 * Created by itay on 19/06/17.
 */
require('./imageDisplay.scss');

export default angular.module('imageDisplay',[])
    .component('imageDisplay',{
        template: require('./imageDisplay.html'),
        controllerAs: 'imageDisplayCtrl',
        bindings: {
            imgSrc: '<',
            onImgClick: '&'
        }

    }).name