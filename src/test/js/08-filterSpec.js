/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect */

describe('filter', function() {
	
	it('uses native filter to find +ve numbers- verbose', function() {
		function checkPositive(num) {
			return num >= 0;
		}
		
		var array= [1, 3, -5, 19, -36];
		
		var positives= array.filter(checkPositive);
		expect(positives).toEqual([1, 3, 19]);
  });
	
	it('uses native filter to find +ve numbers- concise', function() {
		var positives= [1, 3, -5, 19, -36].filter(function(num) {	return num >= 0; });
		expect(positives).toEqual([1, 3, 19]);
  });
	
	
	it('filter even numbers', function() {
		var e08= fpjs.examples.E08();
		var array= [1,2,3,4];
		
		var evens= e08.filter(array, function(item) {
			return item % 2 === 0;
		});
		expect(evens).toEqual([2,4]);
	});
	
	it('filterFP even numbers', function() {
		var e08= fpjs.examples.E08();
		var array= [1,2,3,4];
		
		var evens= e08.filterFP(array, function(item) {
			return item % 2 === 0;
		});
		expect(evens).toEqual([2,4]);
	});
	
	
});