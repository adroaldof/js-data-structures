/**
 * Abstract Data Type (ADT) Lists
 */

function List () {
    // Properties
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];

    // Print method
    this.toString = toString;

    // Insert Methods
    this.append = append;
    this.insert = insert;

    // Find methods
    this.find = find;
    this.contains = contains;

    // Traversing methods
    this.currPos = currPos;
    this.getElement = getElement;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.moveTo = moveTo;
    this.length = length;
    this.length = length;

    // Remove methods
    this.remove = remove;
    this.clear = clear;
}


/**
 * Retrieve the list elements
 */
function toString () {
    return this.dataStore;
}


/**
 * Append Element to List End
 *
 * @param {Object} element Element to be inserted at end of the list
 */
function append (element) {
    this.dataStore[this.listSize++] = element;
}


/**
 * Insert element at certain position or at list first position
 *
 * @param {Object} element Element to be inserted in the list
 * @param {Integer} after Position to be inserted
 */
function insert (element, after) {
    var insertPos = this.find(after);

    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;

        return true;
    }

    return false;
}


/**
 * Find an element in the list
 *
 * @param {Object} element Element to be find in the list
 */
function find (element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }

    return -1;
}


/**
 * Check if a particular element is part of the list
 *
 * @param {Object} element Element to be checked
 */
function contains (element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }

    return false;
}



/**
 * Get current list position
 */
function currPos () {
    return this.pos;
}


/**
 * Get element at current position
 */
function getElement () {
    return this.dataStore[this.pos];
}


/**
 * Get the actual list size
 */
function length () {
    return this.listSize;
}


/**
 * Go to the first position
 */
function front () {
    this.pos = 0;
}


/**
 * Go to the list end position
 */
function end () {
    this.pos = this.listSize - 1;
}


/**
 * Go back current position by one
 */
function prev () {
    if (this.pos > 0) {
        this.pos--;
    }
}


/**
 * Advance current position by one
 */
function next () {
    if (this.pos < this.listSize - 1) {
        this.pos++;
    }
}


/**
 * Move cursor so the current element position
 *
 * @param {Integer} position Determined cursor position
 */
function moveTo (position) {
    this.pos = position;
}


/**
 * Remove an element from the list
 *
 * @param {Object} element Element to be removed from the list
 */
function remove (element) {
    var foundAt = this.find(element);

    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        this.listSize--;

        return true;
    }

    return false;
}


/**
 * Remove all elements from the list
 */
function clear () {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
}


module.exports = List;
