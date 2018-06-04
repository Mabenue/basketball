var basketball = require('../basketball.js');

describe("Basketball App", function() {
  describe("Sort the players based on the PPG descending", function() {
    it("sorts the players based on the PPG descending", function() {
      var testData = [{PPG: 1}, {PPG: 5}, {PPG: 2}, {PPG: 10}];
      expect(basketball.sortByPPGDesc(testData).Players).toEqual([{PPG: 10}, {PPG: 5}, {PPG: 2}, {PPG: 1}]);
    });
  });

  describe("calculate the average point for the team (based on the PPG)", function() {
    it("calculates avergage team PPG", function() {
      var testData = [{PPG: 1}, {PPG: 5}, {PPG: 2}, {PPG: 10}];
      expect(basketball.calcAveragePPG(testData)).toEqual({AveragePPG: "4.50"});
    });
    it("is accurate 2 decimal places", function() {
      var testData = [{PPG: 3}, {PPG: 5}, {PPG: 2}];
      expect(basketball.calcAveragePPG(testData)).toEqual({AveragePPG: "3.33"});
    });
  });

  describe("find the gold, silver and bronze player based on PPG", function() {
    it("finds gold player", function() {
      var testData = [{Name: "Bill Gold", PPG: 30}, {Name: "Bill Silver", PPG: 27}, {Name: "Bill Bronze", PPG: 21}, {Name: "Bill Runnerup", PPG: 18}];
      expect(basketball.findPlayerRank(testData).Leaders[0]).toEqual({ Gold: 'Bill Gold', PPG: 30 });       
    });
    it("finds silver player", function() {
      var testData = [{Name: "Bill Gold", PPG: 30}, {Name: "Bill Silver", PPG: 27}, {Name: "Bill Bronze", PPG: 21}, {Name: "Bill Runnerup", PPG: 18}];
      expect(basketball.findPlayerRank(testData).Leaders[1]).toEqual({ Silver: 'Bill Silver', PPG: 27 });
    });
    it("finds bronze player", function() {
      var testData = [{Name: "Bill Gold", PPG: 30}, {Name: "Bill Silver", PPG: 27}, {Name: "Bill Bronze", PPG: 21}, {Name: "Bill Runnerup", PPG: 18}];
      expect(basketball.findPlayerRank(testData).Leaders[2]).toEqual({ Bronze: 'Bill Bronze', PPG: 21 });
    });

  });

  describe("count the number of players playing on each position and the average height in cm.", function() {
    it("counts number of players in each position", function() {
      var testData = [{Position: "SG"}, {Position: "SG"}, {Position: "SG"}, {Position: "SF"}, {Position: "SF"}];
      expect(basketball.findNumberInEachPostion(testData)).toEqual({"":{SG: 3, SF: 2}});
    });

    it("calculates average height of players in each position", function() {
      var testData = [{Height: "6 ft 1 in"}, {Height: "6 ft 11 in"}, {Height: "6 ft 7 in"}, {Height: "7 ft 0 in"}]
      expect(basketball.findAverageHeightInCM(testData)).toEqual({AverageHeight: "202.6 cm"});
    });
  });

});