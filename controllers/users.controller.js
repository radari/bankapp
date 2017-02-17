app.controller('customerViewCtrl',function($rootScope,$scope, $http, $cookies){
$scope.showAccount=function(){
  $http.put('/customer', {$scope.fName + " " + $scope.lName})
  .then(function(res){
alert('login successful');

   
    $cookies.put('currentUser',$scope.fName + " " + $scope.lName);
      console.log("$scope.fName + " " + $scope.lName");
    
    $rootScope.currentUser=$scope.fName + " " + $scope.lName;
  },
  function(err){
    alert('bad login credentials');
  });
}
$scope.byebye=function(){
   
  $rootScope.currentUser=null;
   console.log($rootScope.currentUser);
};