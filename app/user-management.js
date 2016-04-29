require('angular')

var userManagement = angular.module('userManagement', []);

userManagement.controller('MainController', function($scope) {
    $scope.message = 'Angular Works!'
})
