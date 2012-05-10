/*jshint latedef:false, newcap:false */
/*global _, window, Namespace, fpjs, describe, it, expect, beforeEach */

describe('curry', function() {
	var e12= null;
	
	beforeEach(function() {
		e12= fpjs.examples.E12();
	});
	
	function add(a,b) { return a+b; }

	it('uses native bind to curry first arg of add', function() {
		var add5 = add.bind(undefined, 5);
		expect(add5(1)).toBe(6);
		expect(add5(10)).toBe(15);
  });
	
	it('LOCAL IMPLEMENTATION: curry first arg of add', function() {
		var add5= e12.curry(add, 5);
		
		expect(add5(1)).toBe(6);
		expect(add5(10)).toBe(15);
  });

	
	function createEmployeeRecord(company, dept, employeeName) {
		return { comp:company, dept:dept, name:employeeName };
	}
	
	it('uses native bind to curry company and department', function() {
		var gmDesignEmployee= createEmployeeRecord.bind(undefined, 'GM', 'Design');
		var fordTestEmployee= createEmployeeRecord.bind(undefined, 'Ford', 'Test');
		
		expect(gmDesignEmployee('john')).toEqual({comp:'GM', dept:'Design', name:'john'});
		expect(gmDesignEmployee('jane')).toEqual({comp:'GM', dept:'Design', name:'jane'});

		expect(fordTestEmployee('tom')).toEqual({comp:'Ford', dept:'Test', name:'tom'});
		expect(fordTestEmployee('tammy')).toEqual({comp:'Ford', dept:'Test', name:'tammy'});
  });
	
	it('LOCAL IMPLEMENTATION: curry company and department', function() {
		var gmDesignEmployee= e12.curry(createEmployeeRecord, 'GM', 'Design');
		var fordTestEmployee= e12.curry(createEmployeeRecord, 'Ford', 'Test');
		
		expect(gmDesignEmployee('john')).toEqual({comp:'GM', dept:'Design', name:'john'});
		expect(gmDesignEmployee('jane')).toEqual({comp:'GM', dept:'Design', name:'jane'});

		expect(fordTestEmployee('tom')).toEqual({comp:'Ford', dept:'Test', name:'tom'});
		expect(fordTestEmployee('tammy')).toEqual({comp:'Ford', dept:'Test', name:'tammy'});
  });
	
});