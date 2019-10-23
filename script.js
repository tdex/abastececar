var app = angular.module('myApp', [
  'ngStorage'
]);

app.controller('app', ($scope, $localStorage) => {
  let vm = $scope;

  vm.historico = [];
  vm.viagem = {
    precoGasolina: '',
    consumoCarro: '',
    distanciaViagem: '',
    valorViagem: ''
  };

  vm.calcularValorViagem = () => {
    let litrosNecessarios = vm.viagem.distanciaViagem / vm.viagem.consumoCarro;

    vm.viagem.valorViagem = vm.viagem.precoGasolina * litrosNecessarios;
    salvarViagem();
  };

  let salvarViagem = () => {
    vm.historico.push(angular.copy(vm.viagem));
    $localStorage.historico = JSON.stringify(vm.historico);
  };

  let getHistorico = () => {
    vm.historico = $localStorage.historico ? JSON.parse($localStorage.historico) : [];
  };

  getHistorico();

});
