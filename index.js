// code your solution here

// function isOdd(element, index, array) {
//     return (element % 2 === 1);
//   }

function superbowlWin(record){
  for(let win of record){
    if(win.result === "W"){
      return win.year;
    } 
    else if(win.result === "L"){
      return win.year;
    }
  }
}
record.find(superbowlWin);


