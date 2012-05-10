/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E12 = function() {

	function curry(func) {
		var curryedArgs= _.rest(arguments);
		return function() {
			var args= curryedArgs.concat(_.rest(arguments,0));
			return func.apply(null, args);
		};
	}
	
	return {
		curry: curry
	};
	
};