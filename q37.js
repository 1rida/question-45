// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
//  I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
//  with a different message.
function make_shirt(size, text) {
    return "the size of shirt is ".concat(size, ". ").concat(text, " printed in it ");
}
console.log(make_shirt("large", "I love Typescript"));
function make_shirtMedium(size, text) {
    return "the size of shirt is ".concat(size, ". ").concat(text, " printed in it ");
}
console.log(make_shirt("medium", "I like javascript"));
function make_shirtAny(size, text) {
    return "the size of shirt is ".concat(size, ". ").concat(text, " printed in it ");
}
console.log(make_shirt("small", "I love progrmming"));
