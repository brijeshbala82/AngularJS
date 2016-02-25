'use strict';

describe('EventListController', function ( ) {

	var $controllerConstructor,scope, mockeEventData;

	beforeEach(module('eventsApp'));

	beforeEach(inject(function ($controller,$rootScope) {
		$controllerConstructor = $controller;
		scope = $rootScope.$new();
		mockeEventData = sinon.stub({getAllEvents: function(){}});
	}));
	
	
	it("Should set the event data",function ( ) {

		var mockEvents = {};
		mockeEventData.getAllEvents.returns(mockEvents);
		$controllerConstructor('EventListController',{'$scope' : scope, eventData: mockeEventData});

		expect(scope.events).toBe(mockEvents);
	})
});