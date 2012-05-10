/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E04 = function() {
	
	function pipe(func1, func2) {
		return function(value) {
			var r1= func1(value);
			return func2(r1);
		};
	}
	
	return {
		pipe: pipe
	};
	
};