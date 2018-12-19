var CandyStore = function() {
	// this.rolls = [];
	// this.currentRoll = 0;

	this.inventory = new Map()

};


CandyStore.prototype.assign = function(candy, qty) {
	this.inventory.set(candy, qty);
};

CandyStore.prototype.substract = function(candy, qty) {
	x = this.inventory.get(candy)
	this.inventory.set(candy, x - qty);
};

CandyStore.prototype.add = function(candy, qty) {
	x = this.inventory.get(candy)
	this.inventory.set(candy, x + qty);
};

CandyStore.prototype.quantity = function(candy) {
	return this.inventory.get(candy);
};

// CandyStore.prototype.score = function() {
//     var score = 0;
//     var frameIndex = 0;
//     var self = this;

//     function sumOfBallsInFrame() {
//         return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
//     }

//     for (var frame = 0; frame < 10; frame++) {
//         score += sumOfBallsInFrame();
//         frameIndex += 2;
//     }
//     return score;
// };