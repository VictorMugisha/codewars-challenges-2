function doubleEveryOther(array) {
  const doubledArray = array.map((element, index) => {
    if (index % 2 !== 0) {
      return element * 2;
    }
    return element;
  });
  return doubledArray;
}

// const testOne = [1, 2, 3, 4, 5, 6];
// console.log(doubleEveryOther(testOne));

function secondDoubleEveryOther(numbers = []) {
  const newDoubledArray = numbers.map((number, index) => {
    if (index % 2 !== 0 && index !== 0) {
      return number * 2;
    } else {
      return number;
    }
  });

  return newDoubledArray
}

const otherTest = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("the doubled array is: ", secondDoubleEveryOther(otherTest));
