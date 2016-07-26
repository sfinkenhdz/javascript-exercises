// describe ("createTree", function() {
//   var tree;

//   beforeEach(function() {
//     tree=createTree();
//   });

//   it("should return a tree object", function() {
//     expect(createTree()).toBeDefined();
//   });

//   describe("that has", function() {
//     xit("age 0 when created", function() {
//       expect(tree.age).toEqual(0);
//     });
//     xit("height 0 when created", function() {
//       expect(tree.height).toEqual(0);
//     });
//     xit("orangeCount of 0 oranges when created", function() {
//       expect(tree.orangeCount).toEqual(0);
//     });
//   });

//   describe("and whose grow function", function() {
//     xit("should increase the age of the tree by 1 year", function() {
//       tree.grow();
//       expect(tree.age).toEqual(1);
//     });

//     xit("should increase the height of the tree by 10 inches", function() {
//       tree.grow();
//       expect(tree.height).toEqual(10);
//     });
//   });

//   describe("Before reaching fruit-bearing age", function() {
//     xit("should have 0 oranges if age < FRUIT_BEARING_AGE", function() {
//       while (tree.age < (FRUIT_BEARING_AGE-1)) {
//         tree.grow();
//       }
//       expect(tree.orangeCount).toEqual(0);
//     });
//   });

//     describe("After reaching fruit-bearing age", function() {
//       beforeEach(function() {
//         while (tree.age < FRUIT_BEARING_AGE) {
//           tree.grow();
//         }
//       });

//       xit("should add a random number of oranges if age = FRUIT_BEARING_AGE", function() {
//         expect(tree.orangeCount).toBeGreaterThan(0);
//       });
//       describe("dropOrange", function() {
//         xit("should return an orange that is removed from oranges", function() {
//           expect(tree.dropOrange()).toBeDefined();
//         });
//       });
//       describe ("die",function() {
//         xit("should be alive when age <= MAX_AGE",function() {
//           while (tree.age < (MAX_AGE-1)) {
//             tree.grow();
//           }
//           tree.grow();
//           expect(tree.isAlive).toEqual(true);
//         });
//         xit("should die when age > MAX_AGE",function() {
//           while (tree.age < MAX_AGE) {
//             tree.grow();
//           }
//           tree.grow();
//           expect(tree.isAlive).toEqual(false);
//         });
//       });
//     });
//     describe ("pickOrange, a function to manipulate a tree", function() {
//       it("should return a orange object", function() {
//         while (tree.age < FRUIT_BEARING_AGE) {
//           tree.grow();
//         }
//         expect(pickOrange(tree)).toBeDefined();
//       });

//       xit("should return an orange with a random diameter > 0", function() {
//         while (tree.age < FRUIT_BEARING_AGE) {
//           tree.grow();
//         }
//         var orange = pickOrange(tree);
//         expect(orange.diameter).toBeGreaterThan(0);
//       });
//     });
// });

