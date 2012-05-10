/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E10 = function() {
	
	function foldRight(array, seed, callback) {
    for (var i= array.length-1; i > -1; i--) {
        seed = callback(array[i], seed);
    }
    return seed;
	}
	
	function foldRightFP(array, seed, callback) {
		if (array.length===0) return seed;
		
		var head= _.head(array);
		var tail= _.tail(array);
		
		return callback(head, foldRightFP(tail, seed, callback));
	}
	
	return {
		foldRight: foldRight,
		foldRightFP: foldRightFP
	};
	
};