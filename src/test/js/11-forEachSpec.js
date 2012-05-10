/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect */

describe('forEach', function() {
	
	it('uses native forEach to flip each element in an array', function() {
		var array= [true, true, false];
		
		array.forEach(function(item, index, ar) {ar[index]= !item; });
		expect(array).toEqual([false, false, true]);
  });
	
	
	it('visits each item', function() {
		var e11= fpjs.examples.E11();
		var array= [1,2,3,4];
		var sum=0;
		
		e11.forEach(array, function(item, index) {
			sum += item;
		});
		
		expect(sum).toBe(10);
	});
	
});