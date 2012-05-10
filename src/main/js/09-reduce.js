/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E09 = function() {

	// aka reduce, or just fold
	function foldLeft(array, seed, callback) {
		for (var i=0, n=array.length; i<n; i++) {
			seed= callback(seed, array[i]);
		}
		return seed;
	}
	
	function foldLeftFP(array, seed, callback) {
		if (array.length===0) return seed;
		
		var head= _.head(array);
		var tail= _.tail(array);
		
		return foldLeftFP(tail, callback(seed, head), callback);
	}
	
	return {
		foldLeft: foldLeft,
		foldLeftFP: foldLeftFP
	};
	
};