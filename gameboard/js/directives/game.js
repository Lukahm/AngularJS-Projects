app.directive('gameInfo', function() {
   return {
    restrict: 'E',
    scope: {
    info:"=info"
    },
    templateUrl: 'js/directives/game.html',
   };

  });
