(function() {
    'use strict';

    angular
        .module('githubSocial')
        .service('usersService', function() {

            var users = [];

            this.addUser = function(user) {
                users.push(user);
            };

            this.getUsers = function() {
                return users;
            };

            this.removeUser = function(user) {
                var position = users.indexOf(user);
                users.splice(position, 1);
            };

        });

})();
