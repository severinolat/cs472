// test filter function on the String object
describe("String.filter", function () {
    it("filter function on the String object",
        function () {
            assert.equal("This house is nice!", "This house is not nice!".filter("not"));
        });
});


// Exercise 2
describe("Array.bubbleSort", () => {
    it("BubbleSort algorithm on the Array object", () => {
                 assert.deepEqual([-2,0,1,3,4,6], [6,4,0,3,-2,1].bubbleSort());
    });
});

// Exercise 3
describe("Teacher.teach", () => {
    it("Create an object called Teacher derived from the Person class, and implement a method called teach", () => {
        var Lerman = new Teacher();
        Lerman.initialize("Lerman", 60);
        assert.strictEqual(Lerman.teach("MPP"), "Lerman is now teaching MPP");
    });

});
