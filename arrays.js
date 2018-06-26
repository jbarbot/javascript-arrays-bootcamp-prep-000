var chocolateBars = ["snickers", "hundred grand", "kitkat", "snickers"]

function addElementToBeginningOfArray(array,element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}