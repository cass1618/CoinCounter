Create an app that takes an amount in USD an returns how much change to give back
$4.99 => 4 pennies, 2 dimes, 19 quarters

BASE CASE: change given back == initial amount
TERMINATION CASE: if it is a string/negative
Recursion: 


Remove pennies until amount % 5 == 0
Remove nickels until amount % 10 == 0
Remove dimes until amount % 25 == 0

499 / 25 

if (amount > .25) {
    const quarterNumber = amount % .25 //without the remainder
    coinCount(amount - (quarterNumber * .25))

80 => 3 quarters 
80 % 25 = 5
(80-5)/25 = 3
(amount - (amount%25))/25 = 3



if ()



q = 0
d = 0
n = 0
p = 0
while (amt % 1 === 0 && amt % 5 !== 0) 
{
  amt -= 1;
  return p += 1;
}  while (amt % 5 === 0 && amt % 10 !== 0)
{
  amt -= 5;
  return n += 1;
} while (amt % 10 === 0 %% amt % 25 !== 0)
{
  amt -= 10;
  return d += 1
} while (amt % 25 === 0)
{
  amt -= 25
  return q += 1;
}
