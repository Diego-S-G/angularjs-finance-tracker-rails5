var app = angular.module('FinanceTrackerApp', [])
    .factory('stockService', ['$http', function ($http) {
        var stockApi = {};

        stockApi.searchStocks = function (symbol) { // retorna uma promise
            return $http.get('/search_stocks.json?stock=' + symbol);
        }

        stockApi.addStockToPortfolio = function (symbol) {
            return $http.post('/user_stocks.json?stock=' + symbol);
        }

        return stockApi;
    }])
    .controller('stocksController', ['$scope', 'stockService', function ($scope, stockService) {

        $scope.stock = {};

        $scope.lookup = function () {
            if ($scope.ticker != undefined && $scope.ticker != '') {
                
                stockService.searchStocks($scope.ticker).then(function (response) {
                    
                    $scope.stock.error = null;
                    $scope.stock.message = null;
                    $scope.stock.symbol = response.data.ticker;
                    $scope.stock.name = response.data.name;
                    $scope.stock.last_price = response.data.last_price;
                    $scope.stock.can_be_added = response.data.can_be_added;

                }, function (error) {
                    $scope.stock = {};

                    $scope.stock.error = error.data.response;
                });
            } else {
                $scope.stock = {}
            }
        }

        $scope.add = function () {
            if($scope.stock != undefined && $scope.stock.symbol != '') {
                stockService.addStockToPortfolio($scope.stock.symbol).then(function (response) {
                    $scope.stock.error = null;
                    $scope.stock.message = response.data.response;

                    $scope.stock.name = null; // tá limpando o input e o output pra após add um stock, poder fazer search no próximo
                    $scope.ticker = null;

                    $('#stock-list').load('my_portfolio.js');

                }, function (error) {
                    $scope.stock = {};
                    $scope.stock.error = error.data.response;
                });
            } else {
                $scope.stock.error = 'Stock cannot be added';
            }
        }

    }])