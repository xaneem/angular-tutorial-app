(function() {
    'use strict';

    angular
        .module('githubSocial', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('home', {
                    url: "/",
                    controller: "HomeController",
                    controllerAs: "home",
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
