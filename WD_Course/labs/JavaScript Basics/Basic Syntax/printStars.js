let count = 5 ; 

for(i = 1; i <= count; i++){
    console.log(`*`.repeat(i)) ; 
}

for(i = 1; i <= 10; i++){
    console.log(` $`.repeat(i)) ; 
}
for(z = 10; z >= 1; z--){
    console.log(` $`.repeat(z)) ; 
}

// rombo 

let n = 10 ; 
for(j = 1; j <= 10; j++){
    let space = n - j ; 
    console.log(` `.repeat(space) + `$`.repeat(j * 2 - 1)) ; 
}
for(j = 10; j >= 1; j--){
    let space = n - j ; 
    console.log(` `.repeat(space) + `$`.repeat(j * 2 - 1)) ; 
}