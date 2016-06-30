(function() {
    'use strict';

    angular
        .module('githubSocial')
        .directive('githubUser', [function() { //This will be defined as github-user in templates
            return {
                scope: { // Isolating scope of the directive
                    'user': '=', //user attribute will be bound to scope (two way binding)
                    'removeButton': '@' //removeButton will be bound to scope as value
                },
                restrict: 'AE',
                templateUrl: 'templates/github-user.html',
                controllerAs: 'vm',
                link: function(scope, element, attrs){
                    // DOM manipulations, if necessary, goes here
                },
                controller: function($scope, usersService) {
                	var self = this; // A best practice, sometimes essential when you're refering to this inside an anonymous function.

                	this.user = $scope.user;
                    this.showButton = $scope.removeButton === 'on' ? true : false;

                	this.removeMe = function(){
                		usersService.removeUser(self.user);
                	}
                }
            };
        }])

})();
