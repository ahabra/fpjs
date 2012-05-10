/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect */

describe('lambda', function() {
	
	it('doubler', function() {
		var e05= fpjs.examples.E05();

		var array= [1,2,3];
		e05.visitEach(array, function(element) {return element*2;});
		expect(array).toEqual([2,4,6]);
	});
	
	it('length calculator', function() {
		var e05= fpjs.examples.E05();
		var array= ['a', 'bb', 'ccc'];
		e05.visitEach(array, function(element) {return element.length;});
		expect(array).toEqual([1,2,3]);
	});
	
});