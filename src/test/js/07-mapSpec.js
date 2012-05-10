/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect */

describe('map', function() {
	
	it('uses native map to double array items- verbose', function() {
		var array= [1,2,3,4];
		
		function doubler(item) { return item * 2; }
		
		var doubles= array.map(doubler);
		expect(doubles).toEqual([2,4,6,8]);
	});
	
	it('uses native map to double array items- concise', function() {
		var doubles= [1,2,3,4].map(function(item) { return item * 2; });
		expect(doubles).toEqual([2,4,6,8]);
	});
	
	it('find length of each word in an array', function() {
		var lengths= ['aa', 'bbbb', 'c'].map(function(word) {return word.length;});
		expect(lengths).toEqual([2, 4, 1]);
	});
	
	it('capitalizes vowels in a string by re-using from Array', function() {
		var map= Array.prototype.map;
		var capVowels= map.call('hello world', function(ch) {
			if ('aeiou'.indexOf(ch)>=0) return ch.toUpperCase();
			return ch;
		});
		expect(capVowels.join('')).toBe('hEllO wOrld');
  });
	
	it('extract a field from an array of objects', function() {
		var array= [{id:10, name:'js'}, {id:11, name:'coffee'}, {id:12, name:'css'}];
		var ids= array.map(function(item) { return item.id; });
		expect(ids).toEqual([10, 11, 12]);
  });
	
	it('LOCAL IMPLEMENTATION: map doubles each item of array', function() {
		var e07= fpjs.examples.E07();
		var array= [1,2,3,4];
		
		var doubles= e07.map(array, function(item) {
			return item * 2;
		});
		expect(doubles).toEqual([2,4,6,8]);
	});
	
	it('LOCAL IMPLEMENTATION: mapFP double each item of array', function() {
		var e07= fpjs.examples.E07();
		var array= [1,2,3,4];
		
		var doubles= e07.mapFP(array, function(item) {
			return item * 2;
		});
		expect(doubles).toEqual([2,4,6,8]);
	});
	
	
});