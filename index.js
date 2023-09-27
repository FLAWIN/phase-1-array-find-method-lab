// code your solution here

// function isOdd(element, index, array) {
//     return (element % 2 === 1);
//   }

function superbowlWIn(record) {

    // let result = record.find( record => record.result === "W")
    // return !!result ? result.year : undefined
    const result = record.find( record => record.result === "W");
    return !!result ? result.year : undefined;
}
const result = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
]
console.log(result);