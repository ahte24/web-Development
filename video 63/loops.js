let a = [3, 45, 5, 67, 8, 25, 10, 99];

// for (let i = 0; i < a.length; i++) {
// 	const element = a[i];
//     console.log(element)
// }

// a.forEach((value, index, arr) => {
// 	console.log(value, index, arr);
// });

// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// };
// for (const key in obj) {
// 	if (Object.hasOwnProperty.call(obj, key)) {
// 		const element = obj[key];
// 		console.log(key, element);
// 	}
// }

for (const iterator of a) {
	console.log(iterator);
}
