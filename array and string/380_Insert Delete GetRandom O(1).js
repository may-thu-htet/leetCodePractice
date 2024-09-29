// Initialize the RandomizedSet object
var RandomizedSet = function () {
  // We use a map to store the value-to-index mapping for quick lookup
  this.map = new Map();
  // We use an array to store the values for constant-time random access
  this.arr = [];
};

/**
 * Inserts an item val into the set if not present.
 * Returns true if the item was not present, false otherwise.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  // If the value is already present in the set (map), return false
  if (this.map.has(val)) {
    return false;
  }
  // Otherwise, insert the value into the array and map
  this.arr.push(val); // Add the value to the end of the array
  this.map.set(val, this.arr.length - 1); // Map the value to its index in the array
  return true; // Return true to indicate the value was successfully inserted
};

/**
 * Removes an item val from the set if present.
 * Returns true if the item was present, false otherwise.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // If the value is not present in the set (map), return false
  if (!this.map.has(val)) {
    return false;
  }
  // Get the index of the value to be removed
  const index = this.map.get(val);
  // Get the last element in the array
  const lastElement = this.arr[this.arr.length - 1];

  // Swap the value to be removed with the last element in the array
  this.arr[index] = lastElement;
  // Update the map to reflect the new index of the last element
  this.map.set(lastElement, index);

  // Remove the last element from the array (which is now the value to be removed)
  this.arr.pop();
  // Remove the value from the map
  this.map.delete(val);

  return true; // Return true to indicate the value was successfully removed
};

/**
 * Returns a random element from the current set of elements.
 * Each element must have the same probability of being returned.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  // Generate a random index between 0 and the length of the array
  const randomIndex = Math.floor(Math.random() * this.arr.length);
  // Return the element at the random index
  return this.arr[randomIndex];
};

/**
 * Example usage:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
