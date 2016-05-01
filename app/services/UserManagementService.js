require('angular')
var UserManagementService = function($http) {
    this.$http = $http;
    this.getUsers = function() {
             console.log('http');
             console.log(this.$http);
             return {firstName: 'FirstName', lastName: 'LastName'}
         }
    return this;
}

UserManagementService.$inject['$http'];

angular.module('userManagement').factory('UserManagementService', UserManagementService)