/*jshint latedef:false, newcap:false */
/*global _, $, window, Namespace, fpjs */

Namespace('fpjs.examples');

fpjs.examples.E02 = function() {
	var that = {};
	
	// pure functions: no side effects, for same input, you get same output
	function pi() { return 3.14159; }
	function add(a,b) {	return a+b; }
	function capitalize(s) { return s.toUpperCase(); }
	
	// impure functions :)
	function setId(id) { that.id= id;}
	function getId() { return that.id; }
	function now() { return new Date().getMilliseconds(); }
	function updateTitle(title) { $('.divId').html(title); }

	return {
		pi: pi,
		add: add,
		capitalize: capitalize,
		setId: setId,
		getId: getId,
		now: now,
		updateTitle: updateTitle
	};
	
};