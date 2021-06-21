export const calculateChange = (amt, i = 0, changeArray = []) => {
  const coinValues = [25, 10, 5, 1]
  if (amt > 0) {
    if (amt >= coinValues[i]) {
      const newAmt = (amt -= coinValues[i])
      const addChange = [coinValues[i]]
      const newChangeArray = changeArray.concat(addChange)
      return calculateChange(newAmt, i, newChangeArray)
    } else {
      return calculateChange(amt, i += 1, changeArray)
    }
  } else {
    const quarterArray = changeArray.filter(e => e === 25)
    const dimesArray = changeArray.filter(e => e === 10)
    const nickelsArray = changeArray.filter(e => e === 5)
    const penniesArray = changeArray.filter(e => e === 1)
    return `Your change is ${quarterArray.length} quarters, ${dimesArray.length} dimes, ${nickelsArray.length} nickels, ${penniesArray.length} pennies`;
  }
}


