var assert = require('chai').assert,
    arbre = require('../app/tree')
    ;

describe('solution', function () {
    beforeEach(function () {
    });

    it('should test if node is a node', function () {
        nodeA = arbre.Node('X', 'A', 'Y');
        nodeB = arbre.Node(null, 'B', 'Y');
        nodeC = arbre.Node('X', 'C', null);

        assert.isTrue(arbre.isNode(nodeA));
        assert.isTrue(arbre.isNode(nodeB));
        assert.isTrue(arbre.isNode(nodeC));
    });
    it('should test if node is a leaf', function () {
        leaf = arbre.Node(null, 'C', null);

        assert.isTrue(arbre.isLeaf(node));
    });
});