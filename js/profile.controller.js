(function() {
    'use strict';

    angular
        .module('githubSocial')
        .controller('ProfileController', function($stateParams, apiService) {
			var self = this;

            this.username = $stateParams.username;

            apiService.getRepos(this.username).then(function(repos){
            	self.repos = repos;
            });


        });

})();
