(function() {
    'use strict';

    angular
        .module('githubSocial')
        .controller('ProfileController', function($stateParams, apiService) {
            var self = this;

            self.user = {
                'username': $stateParams.username
            };

            // Define empty repo array
            self.repos = [];

            apiService.getRepos(self.user.username).then(function(repos) {
                // After the apiService resolves the promise, populate the repos array with returned data
                self.repos = repos;
            });
        });
})();
