class RandomizedSet {
  constructor() {
    this.map = new Map(); // Map to store value -> index mapping
    this.arr = []; // Array to store the values for random access
  }

  // Inserts a value into the set if not present
  insert(val) {
    if (this.map.has(val)) {
      return false; // If value exists, return false
    }
    // Add value to the array and map
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1); // Store index in map
    return true; // Successfully inserted
  }

  // Removes a value from the set if present
  remove(val) {
    if (!this.map.has(val)) {
      return false; // If value does not exist, return false
    }
    const index = this.map.get(val); // Get index of the value to remove
    const lastElement = this.arr[this.arr.length - 1]; // Get the last element

    // Swap the value to be removed with the last element
    this.arr[index] = lastElement;
    this.map.set(lastElement, index); // Update map with new index for the swapped element

    // Remove the last element
    this.arr.pop(); // Remove last element from array
    this.map.delete(val); // Remove value from the map
    return true; // Successfully removed
  }

  // Returns a random element from the set
  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex]; // Return the element at the random index
  }
}
