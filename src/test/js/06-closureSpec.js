/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect */

describe('closure', function() {
	
	it('odd numbers', function() {
		var e06= fpjs.examples.E06();

		var array= [1,2,3,4,5,6];
		var result= [];
		
		// notice how the function is using result array which is defined outside the function
		// this function is "closing around result"
		function closure(item) {
			if (item % 2 === 1) result.push(item);
		}
		
		e06.each(array, closure);
		
		expect(result).toEqual([1,3,5]);
	});

});