"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('MainController',[function() {
	
	this.user = {
	};
	
	this.submitForm = function(form){
		
		if (form.$valid){
			window.alert('Passed');
		} else {
			window.alert('Failed');
		}
		
	};
	
}]);

var count = 0;

function mostrarOcultar(){
	
	if(count%2==0) 
		document.getElementById('mostrarOcultar').style.display='block';
	else 
		document.getElementById('mostrarOcultar').style.display='none';
		
		count++;
		
}
