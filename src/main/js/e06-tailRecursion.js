/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.e06 = function() {

	function sumImperative(array) {
		var sum=0;
		for (var i=0, n=array.length; i<n; i++) {
			sum += array[i];
		}
		return sum;
	}

	function sumRecursive(array) {
		if (array.length===0) return 0;
		var head= _.head(array);
		var tail= _.tail(array);
		return head + sumRecursive(tail);
	}
	
	function equalArrays(array1, array2) {
		if (array1.length !== array2.length) return false;
		if (array1.length===0) return true;
		
		if (_.head(array1) !== _.head(array2)) return false;
		return equalArrays(_.tail(array1), _.tail(array2));
	}
	
	
	return {
		sumImperative: sumImperative,
		sumRecursive: sumRecursive,
		equalArrays: equalArrays
	};
	
};