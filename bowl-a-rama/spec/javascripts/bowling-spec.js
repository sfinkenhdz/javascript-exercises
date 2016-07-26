describe ("new bowlingGame()", function() {
  var game;

  beforeEach(function() {
    game=new bowlingGame();
  });

  it("should return a bowlingGame object", function() {
    expect(new bowlingGame()).toBeDefined();
  });

  describe("that has", function() {
    it("no spare", function() {
      expect(game.spare).toEqual(false);
    });
    it("no strike", function() {
      expect(game.strike).toEqual(false);
    });
    it("frame is an empty array", function() {
      expect(game.frame.length).toEqual(0);
    });
    it("score is an empty array", function() {
      expect(game.scorecard.length).toEqual(0);
    });
  });

  describe("and whose roll1 function", function() {
    it("should roll a number between 0 and 10", function() {
      game.roll1();
      expect(game.pins).toBeLessThan(11);
    });
  });

  describe("and whose checkStrike function", function() {
    it("should correctly identify a strike", function() {
      game.roll1();
      game.pins = 10;
      game.checkStrike();
      expect(game.strike).toBe(true);
    });
     it("should not identify a strike when less than 10 pins are hit on roll 1", function() {
      game.roll1();
      game.pins = 7;
      game.checkStrike();
      expect(game.strike).toBe(false);
    });
  });

describe("and whose score1 function", function() {
     it("should put the number of pins rolled into frame when a strike is rolled", function() {
      game.roll1();
      game.pins = 10;
      game.score1();
      expect(game.frame[0]).toBe(10);
    });
     it("should put the number of pins rolled into frame when a strike is not rolled", function() {
      game.roll1();
      game.pins = 7;
      game.score1();
      expect(game.frame[0]).toBe(7);
    });
  });

  describe("and whose roll2 function", function() {
    it("should roll a number between 0 and pins", function() {
      game.roll1();
      game.pins = 7;
      game.roll2();
      expect(game.pins2).toBeLessThan(7);
    });
  });

  describe("and whose score2 function", function() {
   it("should push 0 into the second roll of the frame if a strike was rolled", function() {
      game.roll1();
      game.score1();
      game.pins = 10;
      game.checkStrike();
      game.roll2();
      game.score2();
      expect(game.frame[1]).toBe(0);
    });
  })

  describe("and whose checkSpare function", function() {
    it("should correctly identify a spare", function() {
      game.roll1();
      game.pins = 7;
      game.pins2 = 3;
      game.checkSpare();
      expect(game.spare).toBe(true);
    });
  })

 describe("and whose turnEnds", function() {
    it("sets strike to false", function() {
      game.strike = true;
      game.turnEnds();
      expect(game.strike).toBe(false);
    });
    it("sets spare to false", function() {
      game.spare = true;
      game.turnEnds();
      expect(game.spare).toBe(false);
    });
    it("resets frame as an empty array", function() {
      game.frame = [4, 3];
      game.turnEnds();
      expect(game.frame.length).toBe(0);
    });
  })

 describe("and whose saveScore", function() {
    it("saves frame to scorecard", function() {
      game.frame = [3,1];
      game.saveScore();
      expect(game.scorecard[0]).toEqual([3,1]);
    });
  });

 describe("and whose turn", function() {
    xit("", function() {
      // game.frame = [3,1];
      // game.saveScore();
      // expect(game.scorecard[0]).toEqual([3,1]);
    });
  });


});




      // expect(game.strike).toBeFalse;



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


