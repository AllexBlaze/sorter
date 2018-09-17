class Sorter {
  constructor(arr = []) {
    // your implementation
    this.ourArray = arr;
    // our Sorting Function Expression by default;
    this.sortFunctionCode = function(a, b) {
      return a - b;
    };
  }

  add(element) {
    // your implementation
    this.ourArray.push(element);
  }

  at(index) {
    // your implementation
    return this.ourArray[index];
  }

  get length() {
    // your implementation
    return this.ourArray.length;
  }

  toArray() {
    // your implementation
    return  this.ourArray;
  }

  sort(indices = []) {
    // your implementation
    let sortedIndices = indices.sort(function(a, b) {
      return a - b;
    });

    let valuesSet = [];
    for(let i = 0; i < sortedIndices.length;i++) {
      valuesSet.push(this.ourArray[sortedIndices[i]]);
    }

    valuesSet = valuesSet.sort(this.sortFunctionCode);

    for(let j = 0; j < sortedIndices.length; j++) {
      this.ourArray[sortedIndices[j]] = valuesSet[j];
    }

  }

  setComparator(compareFunction) {
    // your implementation
    if(compareFunction) this.sortFunctionCode = compareFunction;
  }
}

module.exports = Sorter;