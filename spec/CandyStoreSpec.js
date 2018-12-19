describe("CandyStore", function() {

	var store;

	beforeEach(function() {
		store = new CandyStore();
	});

	it("Remove 20 candies from a bin of 510", function() {
		store.assign('gummy', 510);
		store.substract('gummy', 20);
		expect(store.quantity('gummy')).toEqual(490);
	});

	it("Add 600 candies to a bin that already have 4, result must be 604", function() {
		store.assign('caramels', 4);
		store.add('caramels', 600);
		expect(store.quantity('caramels')).toEqual(604);
	});

	it("Removing candies from one type does not change the other type.", function() {
		store.assign('gummy', 100);
		store.assign('caramels', 100);
		store.substract('gummy', 20);
		expect(store.quantity('gummy')).toEqual(80);
		expect(store.quantity('caramels')).toEqual(100);
	});

});