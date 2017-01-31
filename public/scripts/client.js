var app = angular.module('angApp', []);

app.controller('AngController', function (){
  console.log ('AngController loaded'); //


    var intro = this;

    intro.fullName = 'Scott Fox'

    intro.upsilon = ['P1', 'P2', 'P3'];

    intro.cohorts = []
    //
    // intro.addCo = function () {
    //   intro.cohorts.push(intro.co.name);
    // }

}); // end of app.controller
