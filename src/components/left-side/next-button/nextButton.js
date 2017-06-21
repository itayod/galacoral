/**
 * Created by itay on 20/06/17.
 */

export default angular.module('nextButton',[])
    .component('nextButton',{
        template: require('./nextButton.html'),
        controllerAs: 'nextButtonCtrl',
        bindings: {
            onNextClick: '&'
        }
    }).name