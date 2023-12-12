console.log("This is Array tutorial of javascript.");

/*let arr = [1, 2, 3, 4, 5, 6];
arr[0] = 5444;
console.log(arr.length);
console.log(arr[0]);

console.log(arr.toString());
console.log(arr.join(" and "));

console.log(arr.pop()); //It removes the last element.  (Brother of shift())
console.log(arr.push("Ahtesham")); //It push the given data next to the last element  (Brother of unshift())
console.log(arr.shift()); // It removes the first element.  (Brother of pop())
console.log(arr.unshift("Mohammed")); // It push the given data previous to the first element. (Brother of push())
console.log(delete arr[5]);
console.log(arr.length);

console.log(arr, typeof arr);
*/

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 8, 7];
let b = a1.concat(a2, a3);
// console.log(b.sort());

let b1 = [4, 5, 6, 7, 8, 9];
b1.splice(4, 1, 555);
console.log(b1.reverse());
