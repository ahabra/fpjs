/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E07 = function() {

	function map(array, callback) {
		var result= [];
		for (var i=0, n=array.length; i<n; i++) {
			result.push( callback(array[i]) );
		}
		return result;
	}

	function mapFP(array, callback) {
		if (array.length===0) return [];
		
		var head= callback(_.head(array));
		var tail = mapFP(_.tail(array), callback);
		return [head].concat(tail);
//		return [callback(_.head(array))].concat(mapFP(_.tail(array), callback));
	}
	
	return {
		map: map,
		mapFP: mapFP
	};
	
};