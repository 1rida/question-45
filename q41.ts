// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints
//  the name of each magician in the array.

let magicians =["herry","ronaldo","peter"]

function show_magicians(magic:string[]){
    for(let a=0 ; a<show_magicians.length ; a++){

console.log(magicians[a]);

magicians.forEach((trick)=>{
    console.log(`${trick}`);
    
})
    }
    
}
show_magicians(magicians);