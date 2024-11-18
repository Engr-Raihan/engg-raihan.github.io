// let date = new Date('2023-10-18');
// console.log(date);
// console.log(new Date(date.setDate(date.getDate() + 1)));
console.log(new Date().toISOString().split('.')[0]?.replace(/-/g, '')?.replace(/:/g, ''));
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// let name = '10-12-2013'
// let newname = name.replace(/-/g, '_');
// console.log(newname);


// function extractKey(str) {
//     // Use a regex to match '/verify/' followed by any sequence of characters at the end of the string
//     const match = str.match(/\/verify\/([^\/]+)$/);

//     // If a match is found, return the key; otherwise return null
//     return match ? match[1] : null;
// }

// // Example
// const url = "http://magnethub.seliselocal.com:4200/verify/XYZ@123 ABC";
// const key = extractKey(url);

// if (key) {
//     console.log(`The key is: ${key}`);  // Outputs: The key is: XYZ123
// } else {
//     console.log('No key found in the given string.');
// }
