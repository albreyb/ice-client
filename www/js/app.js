// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('icebreaker', ['ionic', 'openfb']);

app.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $rootScope.currentUser = {};
  $rootScope.currentUser.id = 0;
  $rootScope.currentEvent = {};
})

.run(function ($rootScope, $state, $ionicPlatform, $window, OpenFB) {

        OpenFB.init(594149957373416, 'http://localhost:4568/agin/carlton/dustytoken'); // initializes OpenFb module

        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

        $rootScope.$on('$stateChangeStart', function(event, toState) {
            if (toState.name !== "signin" && toState.name !== "signout" && !$window.sessionStorage['fbtoken']) {
                $state.go('signin');
                event.preventDefault();
            }
        });

        $rootScope.$on('OAuthException', function() {
            $state.go('signin');
        });

    })

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/sign-in");

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: '../templates/sign-in.html',
      controller: 'SignInCtrl'
    })

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: "../templates/tabs.html"
    })

    .state('tab.events', {
      url: '/events',
      views: {
        'tab-events': {
          templateUrl: '../templates/events.html',
          controller: 'EventsCtrl'
        }
      }
    })
    
    .state('tab.matches', {
      url: '/matches',
      views: {
        'tab-matches': {
          templateUrl: '../templates/matches.html',
          controller: 'MatchesCtrl'
        }
      }
    })

    .state('potentialEvents', {
      url: '/potentialEvents',
      templateUrl: "../templates/potentialEvents.html",
      controller: 'PotentialEventsCtrl'
    })

    .state('potentialMatches', {
      url: '/potentialMatches',
      templateUrl: '../templates/potentialMatches.html',
      controller: 'PotentialMatchesCtrl'
    })

    .state('specificMatch', {
      url: '/specificMatch',
      templateUrl: '../templates/specificMatch.html',
      controller: 'SpecificMatchCtrl'
    })

    .state('specificEvent', {
      url: '/specificEvent',
      templateUrl: '../templates/specificEvent.html',
      controller: 'SpecificEventCtrl'
    })


})