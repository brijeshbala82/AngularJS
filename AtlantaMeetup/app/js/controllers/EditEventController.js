"use strict"

eventsApp.controller('EditEventController',
	function EditEventController ($scope){

		$scope.saveEvent = function(event,newEventForm){
			if(newEventForm.$valid)
			console.log("Event name : " + event.name + ' --- saved');
		};

		$scope.cancelEvent = function(event){
			console.log("cancelEvent ");
			window.location = "eventDetails.html";
			
		};

});