/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E03 = function() {
	
	function add(a,b) {
		return a+b;
	}
	
	return {
		add: add
	};
	
};