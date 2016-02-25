'use strict'

eventsApp.directive('gravatar', function(buildGravatar) {
	
	return {
		restrict : 'E',
		template : '<img />',
		replace : true,
		link : function(scope,eliment,attrs,controller){
			attrs.$observe('email',function(newValue,oldValue){
				if(newValue!==oldValue){
					attrs.$set('src',buildGravatar.getGravatar(newValue));
				}
			});
		}
	}
});