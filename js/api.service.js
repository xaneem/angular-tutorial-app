(function() {
    'use strict';

    angular
        .module('githubSocial')
        .service('apiService', function($q, $timeout, $http, $window, $log) {

            this.getRepos = function(username) {
                // Gets repos of a Github user using their api

                var d = $q.defer(); //This is a deferred object. Read about promises and $q in angular for more.

                // Creates an HTTP request
                $http({
                    method: 'GET',
                    url: 'https://api.github.com/users/' + username + '/repos'
                }).then(function(response) {

                    // We need only the name and stars of each repo but reponse is a big json array
                    // Convert that array to exactly what we need.
                    var repos = response.data.map(function(repo) {
                        return {
                            'name': repo.full_name,
                            'stars': repo.stargazers_count
                        }
                    });

                    d.resolve(repos)
                }, function() {

                    // API call failed. Probably because the username is invalid.                    
                    $log.error('Invalid username');
                });


                return d.promise;
            };
        });
})();
