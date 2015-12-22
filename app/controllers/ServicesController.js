
(function () {
    "use strict";

    app.controller("ServicesController", function ($scope, customerService) {

        $scope.test = "Services";
        
        init();
        
        function init(){
            customerService.GetCustomer().success(function(data){
                    $scope.customers = data;    
            });
        }

    });
})();