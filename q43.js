// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
//  array of magicians’ names. Because the original array will be unchanged, return the new array and store it
//   in a separate array. Call show_magicians() with each array to show that you have one array of the original
//    names and one array with the Great added to each magician’s name.
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var magicians = ["herry", "ronaldo", "peter"];
function copy_array(magic) {
    return [Array];
}
for (var a = 0; a < copy_array.length; a++) {
    copy_array[a](__makeTemplateObject(["the great ", ""], ["the great ", ""]), magicians[a]);
}
console.log(copy_array(magicians));
function show_magicians(magic) {
    return Array;
}
console.log(show_magicians(magicians));
