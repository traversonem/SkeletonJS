app.controller('RegisterController',['$scope', function($scope){
        var vm = $scope;
        
        vm.calendar = [];
        vm.day = {};
        
        vm.init = function(){
            vm.resetDay();
            vm.resetCalendar();
        };
        
        vm.resetCalendar = function(){
            vm.calendar.length = 0;
        };
        
        vm.resetDay = function(){
            vm.day.date = new date();
            vm.day.hlesson = '';
            vm.day.hin = '';
            vm.day.hout = '';
            
        };
        
        vm.getDay = function(d){
            var day = {};
            day.date = d.date;
            day.hlesson = d.hlesson;
            day.hin = d.hin;
            day.hout = d.hout;
            return day;
        };
        
        vm.saveDay = function(index){
            if(index>=0){
                vm.calendar.splice(index,1,vm.getDay(vm.day));
            }else{
                vm.calendar.push(vm.getDay(vm.day));
                vm.resetDay();
            }
        };
        
        vm.showDay = function(index){
            vm.day = vm.getDay(vm.calendar[index]);
            vm.day.index = index;
        };
        
        vm.deleteDay = function(index){
            vm.calendar.splice(index,1);
        };
        
        vm.init();
        
        
    }]);

