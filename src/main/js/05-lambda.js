/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E05 = function() {
	
	// lambda === anonymous function
	
	// visit and mutate each element in the array
	function visitEach(array, lambda) {
		for (var i=0, n=array.length; i<n; i++) {
			array[i] = lambda(array[i]);
		}
	}
	
	return {
		visitEach: visitEach
	};
	
};