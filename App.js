

function giveChange(change) {
  let amt = change;
  let q = 0
  let d = 0
  let n = 0
  let p = 0
  returnArray = [];
  while (amt % 1 === 0 && amt % 5 !== 0) {
    console.log(amt);
    amt -= 1;
    p += 1;
    while (amt % 5 === 0 && amt % 10 !== 0) {
      amt -= 5;
      n += 1;
      while (amt % 10 === 0 && amt % 25 !== 0) {
        amt -= 10;
        d += 1
        while (amt % 25 === 0) {
          amt -= 25
          q += 1;
        }
      }
    }
  }

  return `Your change is ${q} quarters, ${d} dimes, ${n} nickels, ${p} pennies`
}