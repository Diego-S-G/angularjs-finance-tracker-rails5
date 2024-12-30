var app = angular.module('FinanceTrackerApp', [])
    .factory('stockService', ['$http', function ($http) {
        var stockApi = {};

        stockApi.searchStocks = function (symbol) { // retorna uma promise
            return $http.get('/search_stocks.json?stock=' + symbol);
        }

        return stockApi;
    }])
    .controller('stocksController', ['$scope', function ($scope) {

        $scope.stock = {};

        $scope.lookup = function () {
            if ($scope.ticker != undefined && $scope.ticker != '') {
                $scope.stock = { // mock por enquanto
                    symbol: 'STH',
                    name: 'Example Corp',
                    last_price: 100.00
                }
            } else {
                $scope.stock = {}
            }
        }

    }])