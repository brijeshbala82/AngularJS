'use strict'

eventsApp.controller('EditProfileController',
	function EditProfileController($scope,buildGravatar){

		//$scope.user = {emailAddress:'brijeshbala82@gmail.com'};
		$scope.user = {};
		$scope.getGravatarUrl = function(email) {
			
			return buildGravatar.getGravatar(email);
		}
	});	