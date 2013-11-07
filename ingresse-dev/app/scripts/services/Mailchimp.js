'use strict';

angular.module('ingresse-devApp')
	.factory('Mailchimp', function Mailchimp($resource) {

		var requestJson = {
			apikey: "apikey",
			id: "id",
			email: "email",
			update_existing: "update_existing"
		};

		return $resource('https://us2.api.mailchimp.com/2.0/lists/subscribe.json', {}, {
			add: {method:'POST', params:requestJson, isArray:false}
		});
	});