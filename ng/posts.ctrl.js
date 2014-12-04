// Create our PostCtrl Controller
angular.module('app')
   .controller('PostsCtrl', function ($scope, PostsSvc){

    // Add new Post
    $scope.addPost = function(){

        if($scope.postBody && $scope.isAuth){

            PostsSvc.create({

                body:$scope.postBody
            }).success(function(post){
                    // Unshift a new post object inside posts collection
                    $scope.posts.unshift(post);
                    // Clear out input field
                    $scope.postBody = null;
                }
            )


        }

        else {
            console.log('You are not authenticated!');
        }
    };

    // Fetch all Posts
    PostsSvc.fetch()
        .success(
        function(posts){
            $scope.posts = posts;
        }
    );


});