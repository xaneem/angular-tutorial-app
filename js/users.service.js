(function() {
    'use strict';

    angular
        .module('githubSocial')
        .service('usersService', function() {
            // We're putting users in a service so that when we navigate to profile page,
            // users do not get reset.
            // In actual applications, this will link to a storage mechanism
            // like localStore or a database via an API.

            var users = [];

            this.addUser = function(user) {
                users.push(user);
            };

            this.getUsers = function() {
                return users;
            };

            this.removeUser = function(user) {
                // Find the position of the user in users array
                var position = users.indexOf(user);

                // Splice removes the element at the position. 1 means just one element from position to right.
                users.splice(position, 1);
            };

        });

})();
