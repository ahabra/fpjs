/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E11 = function() {

	function forEach(array, callback) {
		for (var i=0, n=array.length; i<n; i++) {
			callback(array[i], i);
		}
	}
	
	return {
		forEach: forEach
	};
	
};