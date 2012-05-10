/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E06 = function() {
	
	function each(array, closure) {
		for (var i=0, n=array.length; i<n; i++) {
			closure(array[i]);
		}
	}

	return {
		each: each
	};
	
};