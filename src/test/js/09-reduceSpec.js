/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect */

describe('reduce/fold left', function() {
	
	it('uses native reduce to calc sum of array- verbose', function() {
		var array= [1, 2, 3, 4];
		
		function add(previousValue, currentValue) {
			return previousValue + currentValue;
		}
		
		var sum= array.reduce(add, 0);
		expect(sum).toBe(10);
  });
	
	it('uses native reduce to calc sum of array- concise', function() {
		var sum= [1, 2, 3, 4].reduce(function(pv, cv) { return pv+cv;}, 0);
		expect(sum).toBe(10);
  });
	
	it('find max in an array', function() {
		var max= [1, -99, 45, 3].reduce(function(pv, cv) {return Math.max(pv, cv);}, Number.MIN_VALUE);
		expect(max).toBe(45);
  });
	
	it('calc sum of array', function() {
		var e09= fpjs.examples.E09();
		var array= [1,2,3,4];
		
		var sum= e09.foldLeft(array, 0, function(seed, head) {
			return seed + head;
		});
		
		expect(sum).toBe(10);
		
		sum= e09.foldLeftFP(array, 0, function(seed, head) {
			return seed + head;
		});
		
		expect(sum).toBe(10);
	});
	
	it('find size of array!!', function() {
		var e09= fpjs.examples.E09();
		var array= [1,2,3,4];
		
		var size= e09.foldLeft(array, 0, function(seed, head) {
			return seed + 1;
		});
		
		expect(size).toBe(4);
	});
	
	it('experiments', function() {
		var e09= fpjs.examples.E09();
		var array= [1,-2,3,-4];
		
		var neg= e09.foldLeft(array, 0, function(seed, head) {
			return head<0 ? seed + head : seed;
		});
		var pos= e09.foldLeft(array, 0, function(seed, head) {
			return head > 0 ? seed + head : seed;
		});
		
		expect(neg).toBe(-6);
		expect(pos).toBe(4);
	});
	
});