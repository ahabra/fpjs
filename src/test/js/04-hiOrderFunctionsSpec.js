/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect, console */

describe('hi order functions', function() {
	
	it('pipe passes results from first function to second', function() {
		var e04= fpjs.examples.E04();
		
		function sqr(v) {	return v*v;	}
		function negate(v) { return -v;	}
		
		var sqrNeg= e04.pipe(sqr, negate); // note: sqr and negate are not executed yet
		
		expect(sqrNeg(1)).toBe(-1);
		expect(sqrNeg(2)).toBe(-4);
		expect(sqrNeg(-2)).toBe(-4);
	});
	
});