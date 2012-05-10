/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect */

describe('tailRecursion', function() {
	
	it('sumImperative', function() {
		var e06= fpjs.examples.e06();

		expect(e06.sumImperative([1,2,3,4])).toBe(10);
	});
	
});