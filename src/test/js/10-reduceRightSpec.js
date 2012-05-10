/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect */

describe('reduce/fold right', function() {
	
	it('uses native reduceRight to calc sum of array- verbose', function() {
		var array= [1, 2, 3, 4];
		
		function add(previousValue, currentValue) {
			return previousValue + currentValue;
		}
		
		var sum= array.reduceRight(add, 0);
		expect(sum).toBe(10);
  });

	it('uses native reduceRight to find last vowel in a string', function() {
		var reduceRight= Array.prototype.reduceRight;
		
		function getFirstVowel(previousChar, currentChar) {
			if (previousChar.length>0 && 'aeiou'.indexOf(previousChar)>=0) return previousChar;
			if ('aeiou'.indexOf(currentChar)>=0) return currentChar;
			return '';
		}
		
		expect(reduceRight.call('abced', getFirstVowel)).toBe('e');
		expect(reduceRight.call('aeiou', getFirstVowel)).toBe('u');
		expect(reduceRight.call('a', getFirstVowel)).toBe('a');
		expect(reduceRight.call('ast', getFirstVowel)).toBe('a');
		expect(reduceRight.call('nmk', getFirstVowel)).toBe('');
  });
	
	it('calc sum of array', function() {
		var e10= fpjs.examples.E10();
		var array= [1,2,3,4];

		var sum= e10.foldRight(array, 0, function(item, seed){
			return item + seed;
		});
		expect(sum).toBe(10);
	});
	
	it('concat arrays', function() {
		var e10= fpjs.examples.E10();
		var array= new Array([0, 1], [2, 3], [4, 5]);

		var con= e10.foldRight(array, [], function(item, seed){
			return seed.concat(item);
		});
		expect(con).toEqual([4, 5, 2, 3, 0, 1]);
	});
	
	it('concat arrays FP', function() {
		var e10= fpjs.examples.E10();
		var array= new Array([0, 1], [2, 3], [4, 5]);

		var con= e10.foldRightFP(array, [], function(item, seed){
			return seed.concat(item);
		});
		expect(con).toEqual([4, 5, 2, 3, 0, 1]);
	});
	
});