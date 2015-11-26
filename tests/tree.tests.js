var tree = require('../app/tree.js');
var assert = require('chai').assert;

describe('solution', function () {
    var nodeC;

    beforeEach(function () {
        var leafB = new tree.Node(null, 'B', null);
        var leafE = new tree.Node(null, 'E', null);
        nodeC = new tree.Node(leafB, 'C', leafE);
    });

    it('should return tree', function () {
        var expectedValues = ['B', 'C', 'E'];
        assert.deepEqual(expectedValues, tree.print(nodeC))
    });

    it('should print a tree in a tree', function () {
        var leafF = new tree.Node(null, 'F', null);
        var leafK = new tree.Node(null, 'K', null);
        var nodeI = new tree.Node(leafF, 'I', leafK);

        var nodeF = new tree.Node(nodeC, 'F', nodeI);
        var expectedValues = ['B', 'C', 'E', 'F', 'F', 'I', 'K'];
        assert.deepEqual(expectedValues, tree.print(nodeF));
    });
});