//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
// that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list
//. • Print a new set of invitation messages, one for each person in your list.

let guestList : string[] = ["afshan" , "kehkashan" , "darakhshan" ]
console.log(`\nwe have three more friends for dinner\n`);

guestList.unshift("gurya");
console.log(guestList);

guestList.splice(2,0,"nazia")
console.log(guestList);

guestList.push("hina");
console.log(guestList);

let messages : string = "you are invited to my bigger dinner table"

console.log(guestList[0] + " " + messages);
console.log(guestList[1] + " " + messages);
console.log(guestList[2] + " " + messages);
console.log(guestList[3] + " " + messages);
console.log(guestList[4] + " " + messages);



