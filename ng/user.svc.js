//Create User Service

angular.module('app')
    .service('UserSvc', ['$http', function($http){
       var svc = this;

        svc.getUser = function(){
            return $http.get('/api/users')
                .then(function(response){
                    return response.data
                    console.log(response.data)
                })
        }

        svc.register = function (username, password) {
            return $http.post('/api/users', {
                username: username, password: password
            }).then(function(){
                return svc.login(username, password)
            })
        }

        svc.login = function(username,password){
            return $http.post('/api/sessions', {
                username: username,
                password: password
            }).then(function(response){
                svc.token = response.data;
                $http.defaults.headers.common['x-auth'] = response.data;
                return svc.getUser();

            })
        }

        svc.removeToken = function(){
            $http.defaults.headers.common['x-auth'] = "";
        }

    }]);
