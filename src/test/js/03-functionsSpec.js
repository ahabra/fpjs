/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect, console */

describe('Functions', function() {
	
	it('treats function as an object', function() {
		var e03= fpjs.examples.E03();
		
		expect(typeof e03.add).toBe('function');
		expect(e03.add(1,2)).toBe(3);
		
		expect(e03.add.toString().indexOf('a+b')>0).toBe(true);
		//alert(e03.add.toString());
		
		expect(e03.add.call(null, 1,2)).toBe(3);
		expect(e03.add.apply(null, [1,2])).toBe(3);
	});
	
	it('treats functions like usual types', function() {
		var e03= fpjs.examples.E03();
		var alias= e03.add;
		
		expect(typeof alias).toBe('function');
		expect(alias(1,2)).toBe(3);
  });
	
	it('allows functions to be passed as arguments', function() {
		
		function loggerProxy(func, params) {
			console.log('calling ' + func.name + ' with params ' + params);
			return func(params);
		}
		
		var root= loggerProxy(Math.sqrt, 9);
		expect(root).toBe(3);
  });
	
	
});