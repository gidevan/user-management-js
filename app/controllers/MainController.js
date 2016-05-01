require('angular')
var MainController = function($scope, UserManagementService) {
    var self = this;
    $scope.message = 'Angular Works!!!';
    $scope.getText= function() {
        return self.getText();
    }
    $scope.getUsers = function() {
        return self.getUsers();
    }
    this.UserManagementService = UserManagementService;
}

MainController.prototype.getText = function() {
    return 'Text';
}

MainController.prototype.getUsers = function() {
    return this.UserManagementService.getUsers();
}

MainController.$inject['$scope', 'UserManagementService'];

angular.module('userManagement').controller('MainController', MainController)