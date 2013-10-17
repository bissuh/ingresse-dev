'use strict';

angular.module('ingresse-devApp')
	.directive('disqus', ['$timeout', function (timer) {
		return {
			link: function postLink(scope, element, attrs) {
				var hello = function () {
	        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
	        var disqus_shortname = 'ingresse'; // required: replace example with your forum shortname
	        var disqus_identifier = 'ingresse.' + attrs.disqus;
	        console.log(disqus_identifier);

	        /* * * DON'T EDIT BELOW THIS LINE * * */
	        (function() {
	            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
	            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	        })();

	        DISQUS.reset({
					  reload: true,
					  config: function () {
					    this.page.identifier = "newidentifier";
					    this.page.url = "http://example.com/#!newthread";
					  }
					});

				}
				timer(hello, 0);
			}
		};
	}]);