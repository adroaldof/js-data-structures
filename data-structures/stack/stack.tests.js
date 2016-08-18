/* globals before, describe, it */
var expect = require('chai').expect;

var Stack = require('./stack');


describe(':: Stack Tests ::', () => {
    var stack;

    before(function () {
        stack = new Stack();
    });


    it('expect stack data structure to exists', (done) => {
        expect(stack).to.exists;
        expect(stack.top).to.equal(0);
        expect(stack.dataStore).to.deep.equal([]);

        done();
    });


    it('should print stack', (done) => {
        expect(stack.toString()).to.deep.equal([]);

        done();
    });


    it('should get stack length', (done) => {
        expect(stack.length()).to.equal(0);

        done();
    });


    it('should get last element on stack, how is empty return undefined', (done) => {
        expect(stack.peek()).to.equal(undefined);

        done();
    });


    it('should add a new element in the stack', (done) => {
        stack.push('a');
        stack.push('b');
        stack.push('c');

        expect(stack.length()).to.equal(3);
        expect(stack.peek()).to.equal('c');

        done();
    });

    it('should remove and element from the stack', (done) => {
        expect(stack.pop()).to.equal('c');
        expect(stack.length()).to.equal(2);

        done();
    });


    it('should remove all elements from stack', (done) => {
        stack.clear();

        expect(stack.length()).to.equal(0);
        expect(stack.toString()).to.deep.equal([]);

        done();
    });
});

