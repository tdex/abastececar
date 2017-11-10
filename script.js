var app = angular.module('myApp', []);
app.controller('app', function ($scope) {
  var vm = $scope;

  vm.precoGasolina = '';
  vm.consumoCarro = '';
  vm.distanciaViagem = '';

  vm.calcularValorViagem = function () {
    var litrosNecessarios = vm.distanciaViagem / vm.consumoCarro;

    vm.valorViagem = vm.precoGasolina * litrosNecessarios;
  };
});
