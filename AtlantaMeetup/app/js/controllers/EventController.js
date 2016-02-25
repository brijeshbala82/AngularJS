'use strict'

eventsApp.controller('EventController',
	function EventController($scope,eventData,$routeParams,$route){

	$scope.sortorder = 'name';
	//$scope.event = eventData.getEvent($routeParams.eventId);
	$scope.event = $route.current.locals.event;
	console.log($route.current.foo);

	//$scope.event = eventData.events;

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};


	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	};

	$scope.scrollToSession = function(){
		$anchorScroll();
	}
});