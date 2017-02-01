var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', function (){
  console.log('EmployeeController loaded');

  var eArr = this;

  eArr.employees = [];
  eArr.salTot = 0;

  eArr.addEmployee = function(employee){

    eArr.employees.push(angular.copy(employee));
    console.log("Employee Object from Form:", angular.copy(employee));
    eArr.salTot += employee.as;
    console.log(eArr.salTot)
  };

  eArr.deleteEmployee = function(employee){
    eArr.employees
  }
});
