const Fibonacci = artifacts.require("Fibonacci");

contract("Fibonacci", (accounts) => {
	let fibonacci = null;
	before(async () => {
		fibonacci = await Fibonacci.deployed();
	});
	it("Should calculate fibonacci sequence correctly", async () => {
		const num = await fibonacci.fib(10);
		assert.equal(num.toNumber(), 55);
	});
});
