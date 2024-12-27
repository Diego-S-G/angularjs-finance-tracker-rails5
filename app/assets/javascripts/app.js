var app = angular.module('FinanceTrackerApp', [])
                 .controller('stocksController', [$scope, function($scope){
                    $scope.lookup = function(){
                        if($scope.ticker != undefined && $scope.ticker != ''){
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