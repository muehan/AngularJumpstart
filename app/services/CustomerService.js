
(function () {
    "use strict";

    app.factory("customerService", ['$http', function ($http) {

        var factory = {};
        
        var baseUrl = "http://chst3v207:6666/api/"

        factory.GetCustomer = function(){
            return $http.get(baseUrl + "customers");
        }

        return factory;
    }]);

})();