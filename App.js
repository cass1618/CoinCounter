function giveChange(startAmt) {
const result = recurse(startAmt)
  const recurse = (amt, q, d, n, p) => {

    // if number is 0
    if (amt === 0) {
      return `Your change is ${q} quarters, ${d} dimes, ${n} nickels, ${p} pennies`;
    }

    // if number is positive
    else {
      return recurse(amt - 1, q, d, n, p);
    }
  }
  return result;
}

// const num = 3;

// // calling giveChange() if num is non-negative
// if (num > 0) {
//   let result = giveChange(num);
//   console.log(`The giveChange of ${num} is ${result}`);
// }


// function giveChange(startingAmount) {
//   //   let q = 0
//   //   let d = 0
//   //   let n = 0
//   //   let p = 0
//   // const coinValue = [25, 10, 5, 1]
//   // const calcChange = (amt, index = 0 )

//   if (amt > 0) {
//     if (amt % 1 === 0 && amt % 5 !== 0) {
//       console.log("first loop " + amt);
//       //amt -= 1;
//       p += 1;
//       return giveChange(amt - 1);
//     } else if (amt % 5 === 0 && amt % 10 !== 0) {
//       console.log("second loop " + amt);
//       //amt -= 5;
//       n += 1;
//       return giveChange(amt - 5);
//     }
//     else if (amt % 10 === 0 && amt % 25 !== 0 && amt % 5 !== 0) {
//       console.log("third loop " + amt);
//       //amt -= 10;
//       d += 1
//       return giveChange(amt - 10);
//     }
//     else {
//       console.log("last loop " + amt);
//       //mt -= 25
//       q += 1;
//       console.log("REACHED LAST ELSE")
//     }
//   }

//   return `Your change is ${q} quarters, ${d} dimes, ${n} nickels, ${p} pennies`
// }