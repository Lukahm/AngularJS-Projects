app.directive('tvShow',function(){

  return{
  	restrict:'E',
    scope:{
    	info:'=info'
    },
    templateUrl:'js/directives/tvShow.html'
  };

});
