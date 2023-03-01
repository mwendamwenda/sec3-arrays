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

// const friends = ['brian','alex','peter'];
// //adds element
// friends.push('Jay');
// console.log(friends);

// friends.unshift('Allan');
// console.log(friends);

// //remove elements
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('alex'));

// console.log(friends.includes('alex'));
// console.log(friends.includes('mwaniki')); 

// if(friends.includes('alex')){
//     console.log('you have a freind called Alex');
// }
// // code challenge

// const calTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125,555,44];
// const tip = [calTip(bills[0]),calTip(bills[1]),calTip(bills[2])];
// console.log(tip);

//objects
// const mwendaArray = [
//     'Benson',
//     'mwenda',
//     2037 - 1992,                //array
//     'teacher',
//     ['ken','mbuguz','nic']
// ];

// const Benson = {
//     firstName : 'Gichuru',
//     lastName : 'mwenda',
//     occupation : 'teacher',
//     age : 2037 - 1992,
//     friends : ['ken','mbuguz','nic']
// };
// console.log(Benson);

// console.log(Benson.lastName);//dot notation
// console.log(Benson['lastName']);

// const nameKey = 'Name';
// console.log(Benson['first' + nameKey]);
// console.log(Benson['last' + nameKey]);

// const interestedIn =  prompt('what do you want to know about benson? choose between firstName,lastName,age,job,and friends');
// console.log(Benson[interestedIn]);

// if(Benson[interestedIn]){
//     console.log(Benson[interestedIn]);
// }else{
//     console.log('wrong request! choose amomg the four');
// };

// Benson.location = 'nairobi';
// Benson['twitter'] = '@geektarage';

// console.log(Benson);

// console.log(`${Benson.firstName} has ${Benson.friends.length} friends ,and his best friend is called ${Benson.friends[0]}`);

const Benson = {
    firstName : 'Gichuru',
    lastName : 'mwenda',
    occupation : 'teacher',
    birthYeah :1992,
    friends : ['ken','mbuguz','nic'],

    hasDriversLicense : true,

    // // calcAge : function(birthYeah){
    // //     return 2037 - birthYeah;
    // }

    calcAge : function(){
        console.log(this);
        return 2037 - this.birthYeah;
        
}

}
console.log(Benson.calcAge());
