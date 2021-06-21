import { calculateChange } from './../src/CoinCounter.js';

describe('calculateChange', () => {
  test('it should return the amount of quarters, dimes, nickels, and pennies into a string', () => {
    const testChange = calculateChange(107)
    expect(testChange).toEqual("Your change is 4 quarters, 0 dimes, 1 nickels, 2 pennies");
  })

})


//triangle.js
// export default function Triangle(side1, side2, side3) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// }

// Triangle.prototype.checkType = function() {
//   if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//     return "not a triangle";
//   } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//     return "scalene triangle";
//   } else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
//     return "isosceles triangle";
//   }
// };


//triangle.tests.js
// import Triangle from './../src/triangle.js';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

//   test('should determine whether three lenghts are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });

//   test('should correctly determine whether three lenghts make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4,5,7);
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });

//   test('should correctly determine whether three lengths make an isoceles triangle', () => {
//     const isocTriangle = new Triangle(5,5,7);
//     expect(isocTriangle.checkType()).toEqual("isosceles triangle");
//   });
// });