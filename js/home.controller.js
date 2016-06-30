(function() {
    'use strict';

    angular
        .module('githubSocial')
        .controller('HomeController', function(usersService) {
            // Note: we are not using var self = this here, but it is recommended.

            this.username = '';
            this.users = usersService.getUsers();

            this.addUser = function() {

                if(this.username.trim().length === 0){
                    // Do not add user to list if empty username
                    return;
                }
                
                usersService.addUser({
                    'username': this.username
                });
            
                // Clear the input
                this.username = '';
            };

        });

})();
