
  var app = angular.module('ngAhoy', []);

  app.controller('contactCtl', function($scope){
    $scope.twitter = false;
    $scope.github = "https://www.github.com/jonjamison3";
    $scope.google = false;
  });
  app.controller('skillsCtl', function($scope){
    $scope.jsSelected=false;
    $scope.htmlSelected=false;
    $scope.cssSelected=false;
    $scope.bootstrapSelected=false;
    $scope.jquerySelected=false;
    $scope.phpSelected=false;
    $scope.ngSelected=false;
    $scope.nodeSelected=false;
    $scope.npmSelected=false;
    $scope.expressSelected=false;
  })
  
