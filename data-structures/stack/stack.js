/**
 * Stacks Data Structure
 */


function Stack () {
    // Properties
    this.dataStore = [];
    this.top = 0;

    // Print stack
    this.toString = toString;

    // Accesory methods
    this.length = length;
    this.peek = peek;

    // Insert method
    this.push = push;

    // Remove methods
    this.pop = pop;
    this.clear = clear;
}


/**
 * Retrieve the stack elements
 */
function toString () {
    return this.dataStore;
}


/**
 * Returns the stack length
 */
function length () {
    return this.top;
}


/**
 * Returns the last inserted item in stack
 */
function peek () {
    return this.dataStore[this.top - 1];
}


/**
 * Adds a new element to the stack
 *
 * First insert element at current top position after increase it
 *
 * @param {Object} element Element to be inserted in stack
 */
function push (element) {
    this.dataStore[this.top++] = element;
}


/**
 * Remove an element from the stack
 *
 * First returns the top element of the stack and them decrements it
 *
 * @returns {Object} Element removed from stack
 */
function pop () {
    return this.dataStore[--this.top];
}


/**
 * Remove all elements from stask
 */
function clear () {
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
}


module.exports = Stack;

