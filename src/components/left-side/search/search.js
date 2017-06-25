/**
 * Created by itay on 20/06/17.
 */
require('./search.scss');

export default angular.module('search',[])
    .component('search',{
        template: require('./search.html'),
        controllerAs: 'searchCtrl',
        bindings: {
            searchString: '=',
            onGoClick: '&'
        }

    }).name