angular.module('app').component('testcaseList', {
    templateUrl: 'app/components/list/list.component.html',
    controller: function($http) {
    var vm = this;
    $http.get('/api/testcases').then(function(response) {
    vm.testcases = response.data;
    });
    }
    });