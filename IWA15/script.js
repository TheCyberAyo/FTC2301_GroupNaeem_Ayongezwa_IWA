const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below



const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];

const result = [];

//used if statements and added .length
const extractBiggest = () => { 
	// returns the biggest element among the last elements of three arrays by comparing their values.
  if (first.length && (first[first.length - 1] > second.length ? first[first.length - 1] : 0) > (third.length ? third[third.length - 1] : 0)) {
    return first.pop();
	/*checks whether the first array has at least one element and if the last element of first is greater 
	than the last element of second and third. If this condition is true, then the last element of first 
	is removed using the pop() method and returned. */

  } else if (second.length && (second[second.length - 1] > third.length ? second[second.length - 1] : 0)) {
    return second.pop();
	/*checks if the second array has at least one 
	 * element and if the last element of second is greater than the last element of third. 
	 * If this condition is true, then the last element of second is removed using the pop() method and returned. */
  } else if (third.length) {
    return third.pop();
};
}

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

// const { first } = (data && data.first) || {};
// const { second } = (data && data.second) || {};
// const { third } = (data && data.third) || {};