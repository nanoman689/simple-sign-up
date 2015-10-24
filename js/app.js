var app = angular.module('myApp', []);

app.directive('optIn',function(){
  return {
    templateUrl: "signupform.html",
    replace: true,
    restrict: 'E',
    transclude: true
  }
})
