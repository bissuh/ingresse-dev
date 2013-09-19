'use strict';

describe('Service: myReferences', function () {

  // load the service's module
  beforeEach(module('ingresseDevApp'));

  // instantiate service
  var myReferences;
  beforeEach(inject(function (_myReferences_) {
    myReferences = _myReferences_;
  }));

  it('should do something', function () {
    expect(!!myReferences).toBe(true);
  });

});
