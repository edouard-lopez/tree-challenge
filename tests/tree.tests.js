var tree = require('../app/tree.js');
var assert = require('chai').assert;

describe('solution', function () {
    beforeEach(function () {
    });

    it('should have dummy test', function () {
        assert.equal('find you ;)', tree.trouve());
    });

    it('should return value in order', function () {
        var node = new tree.Node(null, 'A', null);
        var expectedValues = ['A'];
        assert.deepEqual(expectedValues, tree.print(node))
    })

});