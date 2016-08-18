/* globals before, describe, it */
var expect = require('chai').expect;

var List = require('./list');


describe(':: List Tests ::', () => {
    var list;

    before(function () {
        list = new List();
    });


    it('should list structure exists', (done) => {
        expect(list).to.exists;
        expect(list.currPos()).to.equal(0);
        expect(list.length()).to.equal(0);

        done();
    });


    it('should print list', (done) => {
        expect(list.toString()).to.deep.equal([]);

        done();
    });


    it('should insert a new element at list end', (done) => {
        list.append('a');
        list.append('d');

        expect(list.length()).to.equal(2);
        expect(list.toString()).to.contains('a');
        expect(list.toString()).to.contains('d');
        expect(list.toString()).to.deep.equal(['a', 'd']);

        done();
    });


    it('should return element position when find an element', (done) => {
        expect(list.find('d')).to.equal(1);

        done();
    });


    it('should return -1 if could not find an element', (done) => {
        expect(list.find('w')).to.equal(-1);
        expect(list.length()).to.equal(2); // keep list size

        done();
    });


    it('should insert an element between elements', (done) => {
        list.insert('b', 'a');

        expect(list.length()).to.equal(3);
        expect(list.toString()).to.contains('b');
        expect(list.toString()).to.deep.equal(['a', 'b', 'd']);

        done();
    });


    it('should not insert an element between elements', (done) => {
        list.insert('c', 'w');

        expect(list.length()).to.equal(3);
        expect(list.toString()).to.not.contains('c');
        expect(list.toString()).to.deep.equal(['a', 'b', 'd']);

        done();
    });


    it('should return true if contains an element in the list', (done) => {
        expect(list.contains('b')).to.be.true;

        done();
    });


    it('should return false if contains an element in the list', (done) => {
        expect(list.contains('w')).to.be.false;

        done();
    });


    it('should get element current position', (done) => {
        expect(list.currPos()).to.equal(0);

        done();
    });


    it('should get element at current cursor position', (done) => {
        expect(list.getElement()).to.equal('a');

        done();
    });


    it('should get the list size', (done) => {
        expect(list.length()).to.equal(3);

        done();
    });


    it('shold move cursor to the list end', (done) => {
        list.end();

        expect(list.length()).to.equal(3);
        expect(list.currPos()).to.equal(2);
        expect(list.getElement()).to.equal('d');

        done();
    });


    it('shold move cursor to the list start', (done) => {
        list.front();

        expect(list.currPos()).to.equal(0);
        expect(list.getElement()).to.equal('a');

        done();
    });


    it('shold move cursor to the next list item', (done) => {
        list.next();

        expect(list.currPos()).to.equal(1);
        expect(list.getElement()).to.equal('b');

        done();
    });


    it('should not move cursor to a position above list length', (done) => {
        list.pos = 2;
        list.next();

        expect(list.currPos()).to.equal(2);

        done();
    });


    it('shold move cursor to the previous list item', (done) => {
        list.prev();

        expect(list.currPos()).to.equal(1);
        expect(list.getElement()).to.equal('b');

        done();
    });


    it('should not move to position bellow zero', (done) => {
        list.pos = 0;
        list.prev();

        expect(list.currPos()).to.equal(0);

        done();
    });


    it('shold move cursor to the specific list position', (done) => {
        list.moveTo(2);

        expect(list.currPos()).to.equal(2);
        expect(list.getElement()).to.equal('d');

        done();
    });


    it('should remove an element', (done) => {
        expect(list.remove('d')).to.be.true;
        expect(list.length()).to.equal(2);

        done();
    });


    it('should remove an not on list element', (done) => {
        expect(list.remove('w')).to.be.false;
        expect(list.length()).to.equal(2);

        done();
    });


    it('should remove all elements from list', (done) => {
        list.clear();

        expect(list.length()).to.equal(0);
        expect(list.currPos()).to.equal(0);
        expect(list.toString()).to.deep.equal([]);

        done();
    });
});

