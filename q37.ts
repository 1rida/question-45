// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
//  I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
//  with a different message.

function make_shirt(size:string , text:string){
    return `the size of shirt is ${size}. ${text} printed in it `    
    
    }
    console.log(make_shirt("large","I love Typescript")
    );


function make_shirtMedium(size:string , text:string){
    return `the size of shirt is ${size}. ${text} printed in it `    
    
    }
    console.log(make_shirt("medium","I love typescript")
    );


function make_shirtAny(size:string , text:string){
    return `the size of shirt is ${size}. ${text} printed in it `    
    
    }
    console.log(make_shirt("small","I love progrmming")
    );