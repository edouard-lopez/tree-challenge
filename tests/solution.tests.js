var assert = chai.assert;

describe('solution', function () {
    beforeEach(function () {
        console.log(tree);
    });

    it('should test a ok method', function () {
        var value = 'hello';
        assert.equal(value, 'hello');
    });
    it('should test a ok method', function () {
        assert.ok('meth1od is ok');
    });
    it('should test a fail method', function () {
        assert.fail();
    });
});