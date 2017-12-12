angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function(){
            this.greeting = 'Hello Everyone';

            this.dob = '1513061958000';
            
        }
    });

angular.module('myapp')
    .filter('myName', function(){

        return function(value, greeting){
            return greeting + " filtered value is " + value;
        }; 

    });
