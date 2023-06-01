const sum = require("./add")

test("Testing Addition", ()=>{

    expect(sum.add(2,3,4,5,6)).toBe(20);
})