let arr = [1, 2, 3, 4, 5, 6];

// const red = (a, b) => {
// 	return a * b;
// };

// console.log(arr.reduce(red));
let facto = 1;

for (let i = 0; i < arr.length; i++) {
	facto *= arr[i];
}
console.log(facto);
