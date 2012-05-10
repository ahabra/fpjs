/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E08 = function() {

	function filter(array, callback) {
		var result= [];
		for (var i=0, n=array.length; i<n; i++) {
			if (callback(array[i])) result.push(array[i]);
		}
		return result;
	}
	
	function filterFP(array, callback) {
		if (array.length===0) return [];
		
		var head= _.head(array);
		var filteredTail= filterFP(_.tail(array), callback);
		if (callback(head)) return [head].concat(filteredTail);
		return filteredTail;
		
//		return callback(_.head(array)) ?
//				[_.head(array)].concat(filterFP(_.tail(array), callback)) :
//				filterFP(_.tail(array), callback);
	}
	
	return {
		filter: filter,
		filterFP: filterFP
	};
	
};