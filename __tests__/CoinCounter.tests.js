import { calculateChange } from './../src/CoinCounter.js';

describe('calculateChange', () => {
  test('it should return the amount of quarters, dimes, nickels, and pennies into a string', () => {
    const testChange = calculateChange(107)
    expect(testChange).toEqual("Your change is 4 quarters, 0 dimes, 1 nickels, 2 pennies");
  })

})