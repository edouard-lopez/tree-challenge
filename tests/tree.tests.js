var tree = require('../app/tree.js');
var assert = require('chai').assert;

describe('solution', function () {
    beforeEach(function () {
    });

    it('should verify node is a parent node', function () {
        var node2 = new tree.Node('A', 'B', null);
        var node3 = new tree.Node('A', 'B', 'C');
        var node4 = new tree.Node(null, 'B', 'B');

        assert.isTrue(tree.isParent(node2));
        assert.isTrue(tree.isParent(node3));
        assert.isTrue(tree.isParent(node4));
    })

    it('should return leaf value', function () {
        var node = new tree.Node(null, 'A', null);
        var expectedValues = ['A'];
        assert.deepEqual(expectedValues, tree.print(node))
    })

});