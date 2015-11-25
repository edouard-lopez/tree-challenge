function _isNode(node) {
    return node.getLeft() == null || typeof node.getRight() == null
        && typeof node.getValue() === 'string'
        ;
}
function _isLeaf(node) {
    return node.getLeft() == null
        && typeof node.getValue() === 'string'
        && node.getRight() === null
        ;
}

function Node(argLeft, argValue, argRight) {

    this._left = argLeft || null;
    this._value = argValue || null;
    this._right = argRight || null;

    var that = this;

    this.getLeft = function () {
        return that._left;
    };

    this.getValue = function () {
        return that._value;
    };

    this.getRight = function () {
        return that._right;
    };
}

var tree = new Node(new Node(new Node(new Node(new Node(null, 'B', null), 'C', new Node(null, 'E', null)), 'F', new Node(new Node(null, 'F', null), 'I', new Node(null, 'K', null))), 'M', new Node(new Node(new Node(null, 'N', null), 'O', new Node(null, 'P', null)), 'Q', new Node(new Node(null, 'R', null), 'S', null))), 'W', new Node(new Node(new Node(new Node(null, 'a', null), 'b', new Node(null, 'c', null)), 'd', new Node(new Node(null, 'g', null), 'h', new Node(null, 'j', null))), 'k', new Node(new Node(new Node(null, 'm', null), 'n', new Node(null, 'q', null)), 'r', new Node(new Node(null, 't', null), 'u', new Node(null, 'y', null)))));
//console.log(tree);

function orderTree(t) {
}

orderTree(tree);

//console.log('Values : '+tree);

function find(v, t) {
    return 'find you ;)'
}


//find('a', tree);
//find('S', tree);
//find('X', tree);

//console.log('salut');

function _print(node){
    return [node.getValue()];
}

module.exports = {
    print: _print,
    get: function () { return tree; },
    Node: Node,
    tri: orderTree,
    trouve: find,
    isNode: _isNode,
    isLeaf: _isLeaf
};