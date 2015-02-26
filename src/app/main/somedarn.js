require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\gtyagi1\\Documents\\javascript-workspaces\\Temp\\es6-browserify-karma\\src\\app\\main\\main.controller.spec.js":[function(require,module,exports){
"use strict";
var $__somemodel__;
'use strict';
var somemodel = ($__somemodel__ = require("./somemodel"), $__somemodel__ && $__somemodel__.__esModule && $__somemodel__ || {default: $__somemodel__}).default;
var module = angular.mock.module;
describe('controllers', function() {
  var scope;
  beforeEach(module('es6BrowserifyKarma'));
  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));
  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();
    $controller('MainCtrl', {$scope: scope});
    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
    expect(scope.awesomeThings.length > 5).toBeTruthy();
  }));
  it('should verify best data', function() {
    expect(somemodel).not.toBe(null);
    expect(somemodel.getData()).toBe('best data');
  });
});


//# sourceURL=C:/Users/gtyagi1/Documents/javascript-workspaces/Temp/es6-browserify-karma/src/app/main/main.controller.spec.js
},{"./somemodel":"C:\\Users\\gtyagi1\\Documents\\javascript-workspaces\\Temp\\es6-browserify-karma\\src\\app\\main\\somemodel.js"}],"C:\\Users\\gtyagi1\\Documents\\javascript-workspaces\\Temp\\es6-browserify-karma\\src\\app\\main\\somemodel.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var somemodel = function somemodel() {};
($traceurRuntime.createClass)(somemodel, {getData: function() {
    return 'best data';
  }}, {});
var $__default = somemodel;


//# sourceURL=C:/Users/gtyagi1/Documents/javascript-workspaces/Temp/es6-browserify-karma/src/app/main/somemodel.js
},{}]},{},[]);
