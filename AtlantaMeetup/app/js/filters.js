'use strict';

eventsApp.filter('durations',function(){

	return function(duration){

		switch(duration){
			case 1:
				return "Half Haur";
			case 2:
				return "1 Haur";
			case 3:
				return "Half Day";
			case 4:
				return "Full Day";
		}
	}	

});
