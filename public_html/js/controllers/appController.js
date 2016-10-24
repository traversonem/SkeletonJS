app.controller('AppController', [function() {
    var vm = this;
    vm.nav = [
       {
        url:"#/",
        title:"Home"
       },{
        url:"#/register",
        title:"Registro"
       }
    ];
    vm.ver = '1.0.0';
    vm.today = new Date();
    vm.saluto = 'ciao';
}]);
