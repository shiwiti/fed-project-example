recipeApp.controller("RecipeGalleryCtrl", function ($scope, $http, $location, activeUser, recipes) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.greetName = activeUser.get().firstName;
});
