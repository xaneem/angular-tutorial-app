(function() {
    'use strict';

    angular
        .module('githubSocial', ['ui.router']) // app name and dependencies

        .config(function($stateProvider, $urlRouterProvider) {
            // Routes for the application

            // If no routes match:
            $urlRouterProvider.otherwise("/");

            // Available routes:
            $stateProvider
                .state('home', {
                    url: "/",
                    controller: "HomeController",
                    controllerAs: "home", 
                        // Inside the view, controller's variables/functions will be available as this variable.
                        // for example, this.name = 'boss' in controller will go as {{home.name}} in this case.
                    templateUrl: "templates/home.html"
                })
                .state('profile', {
                    url: "/:username/",
                    controller: "ProfileController",
                    controllerAs: "profile",
                    templateUrl: "templates/profile.html"
                });

        });



})();
