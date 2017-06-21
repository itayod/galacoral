/**
 * Created by itay on 20/06/17.
 */

export default angular.module('trackList',[])
    .component('trackList',{
        template: require('./trackList.html'),
        controllerAs: 'trackListCtrl',
        bindings: {
            trackList: '<',
            onTrackClick: '&'
        }
    }).name