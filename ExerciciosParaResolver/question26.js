//Make a program to find all pairs between 1 and 100.

let findPairs = function (numb) {
  for(i = 0; i <= numb; i++) {

   if(i === 0) {
    console.log(`${i} Neutral`)
   } else if(i % 2 == 0) {
      console.log(i)
    }

  }

}

findPairs(6)