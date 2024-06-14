// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints
//  the name of each magician in the array.
var magicians = ["herry", "ronaldo", "peter"];
function show_magicians(magic) {
    for (var a = 0; a < show_magicians.length; a++) {
        console.log(magicians[a]);
        magicians.forEach(function (trick) {
            console.log("".concat(trick));
        });
    }
}
show_magicians(magicians);
