'use strict'

eventsApp.directive('eventthumbnail',function () {
	return{

		restrict : 'E',
		
		templateUrl :  '/templates/directives/eventthumbnail.html',
		scope : {  // creating the isolated scope becase eventthumbnail should work independently all over the appp, it should not be identical funcationality.
			events : "=events",
		}
	}
});