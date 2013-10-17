'use strict';

describe('Directive: disqus', function () {
  beforeEach(module('ingresseDevApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<disqus></disqus>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the disqus directive');
  }));
});
