// const friends = ['brian','alex','peter'];
// console.log(friends);//literal syantax

// // const years = new arrays(1991,1995,2000,2005);
// // console.log(years); 

// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends.length - 1);
// console.log(friends[friends.length - 1]);

// friends[2] = 'george';
// console.log(friends);

// firstName = 'Benson';
// const mwenda = [firstName,'mwenda',2037- 1992,'teacher',friends];
// console.log(mwenda);
// console.log(mwenda[mwenda.length - 1]);

// //excersise 
// const calAge = function(birthYeah){
//     return 2037 - birthYeah;
// }
// const years = [1990,1967,2002,2010,2018];

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length - 1]);
// console.log(age1,age2,age3);//its good toend up with an an array since we started with and arrays.

// const ages = [calAge(years[0]),calAge(years[1]),calAge(years[years.length - 1])];
// console.log(ages);

const friends = ['brian','alex','peter'];
//adds element
friends.push('Jay');
console.log(friends);

friends.unshift('Allan');
console.log(friends);

//remove elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('alex'));

console.log(friends.includes('alex'));
console.log(friends.includes('mwaniki')); 

if(friends.includes('alex')){
    console.log('you have a freind called Alex');
}