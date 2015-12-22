
(function () {
    "use strict";

    app.controller("AboutController", function ($scope) {

        $scope.clickExample = function(){
            alert('you did it!');
        }
        
        $scope.users = [
            {
                username: "mustha",
                name: "Hans"
            },
            {
                username: "muelpe",
                name: "Peter"
            },
            {
                username: "maiema",
                name: "Marie"
            }
        ];

    });
})();