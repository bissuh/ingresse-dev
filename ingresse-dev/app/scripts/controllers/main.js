'use strict';

angular.module('ingresse-devApp')

	.controller('MainCtrl', function($scope, $http, Mailchimp) {

		$scope.sendEmail = function() {

			var requestJson = {
				"apikey": "f736e6db0d0d6854e9769f9724884e90-us2",
				"id": "734053",
				"email": {
					"email" : this.newEmail
				},
				"update_existing": true
			};

			$http.defaults.useXDomain = true;

			//var mailchimpResponse = $http.post('https://us2.api.mailchimp.com/2.0/lists/subscribe.json', requestJson);
			var mailchimpResponse = Mailchimp.add(requestJson);

			console.log(mailchimpResponse);

		}
	});