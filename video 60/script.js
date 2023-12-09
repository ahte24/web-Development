console.log("STRINGS ARE IMMUTABLE");
//-----------------------------------------------Strings are immutable--------------------------------------------------//
//-----------------------------------(Cannot be changed if allocated in the memory)-------------------------------------//
let a = "ahtesham";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);

console.log(a.length);

let rname = "Ahtesham";
let friend = "Basudev";

console.log("His name is " + rname + " and his friend name is " + friend);
console.log(`His name is "${rname}" ans his friend name is ${friend}.`);

let b = "ZAMAN";
let c = "Mohammed Ahtesham";
console.log(c.toUpperCase()); //Convert lower case to upper case.
console.log(b.toLowerCase()); //Convert upper case to lower case.
console.log(c.length); // Length of the string.
console.log(b.slice(0, 4));
console.log(b.slice(1));
console.log(c.replace("zaman", "ahtesham"));
console.log(c.concat(b, " SDE"));
console.log(c.indexOf("sham"));
console.log(c.startsWith("Mo"));
console.log(c.endsWith("am"));

// STRINGS ARE IMMUTABLE......
