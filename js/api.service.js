(function() {
    'use strict';

    angular
        .module('githubSocial')
        .service('apiService', function($q, $timeout, $http, $window, $log) {

            this.getRepos = function(username) {
                var d = $q.defer();

                $http({
                    method: 'GET',
                    url: 'https://api.github.com/users/' + username + '/repos'
                }).then(function(response) {

                    var repos = response.data.map(function(repo){
                        return {
                            'name': repo.full_name,
                            'stars': repo.stargazers_count
                        }   
                    });

                    d.resolve(repos);

                }, function() {
                    $window.alert('An error occured');
                });


                return d.promise;
            };
        });

})();
