'use strict';

import somemodel from './somemodel';

var module = angular.mock.module;

var someModel;

describe('controllers', function(){
  var scope;

  beforeEach(function () {
	  someModel = new somemodel()
  });
  
  beforeEach(module('es6BrowserifyKarma'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('MainCtrl', {
      $scope: scope
    });

    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
    expect(scope.awesomeThings.length > 5).toBeTruthy();
  }));


  it('should verify best data', function() {
	expect(someModel).not.toBe(null);
	expect(someModel.getData()).toBe('best data');
  });
});
