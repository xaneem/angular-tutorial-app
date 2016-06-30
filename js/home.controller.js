(function() {
    'use strict';

    angular
        .module('githubSocial')
        .controller('HomeController', function(usersService) {
            this.username = '';

            this.users = usersService.getUsers();

            this.addUser = function() {
                usersService.addUser({
                    'username': this.username
                });
                this.username = '';
            };

            this.remove = function(user) {
                usersService.removeUser(user);
            };
        });

})();
