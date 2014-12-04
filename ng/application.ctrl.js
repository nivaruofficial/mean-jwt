angular.module('app')
    .controller('ApplicationCtrl', function ($scope,UserSvc,$location) {

        if(!$scope.isAuth){
            $location.path('/login');
        }else{
            $location.path('/');
        }

        $scope.$on('login', function (_, user) {
            $scope.currentUser = user
            $scope.isAuth = true;
        })

        $scope.logout = function(){

            $scope.currentUser = null;
            $location.path('/login');
            UserSvc.removeToken();
            $scope.isAuth = false;

        }
    })
