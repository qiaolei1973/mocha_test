const { add } = require('../demo1/demo1');
const assert = require('assert');

describe('add测试函数', () => {
    it("1 + 1 = 2", () => {
        assert.equal(add(1, 1), 2);
    });
    // it("1 + 2 = 3", () => {
    //     assert.equal(add(1, 2), 4);
    // });
    // it("1 + 2 = 4", () => {
    //     assert.equal(add(1, 2), 3);
    // });
});