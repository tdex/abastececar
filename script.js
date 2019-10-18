var app = angular.module('myApp', []);
app.controller('app', ($scope) => {
  var vm = $scope;

  vm.precoGasolina = '';
  vm.consumoCarro = '';
  vm.distanciaViagem = '';

  vm.calcularValorViagem = () => {
    var litrosNecessarios = vm.distanciaViagem / vm.consumoCarro;

    vm.valorViagem = vm.precoGasolina * litrosNecessarios;
  };

  vm.salvarVeiculo = () => {

  }
});
