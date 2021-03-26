// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

//wrapGifts(gifts); 

function writeCards(names, event) {
    let a = [];
    for(let i=0; i<names.length; i++) {
        a.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return a;
}

function countDown(n) {
    let i=n;
    while(i>=0) {
        console.log(i);
        i--;
    }
}
