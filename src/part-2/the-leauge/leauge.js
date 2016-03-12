"use strict";
/**
 *
 *
 * @author: alexanderanter
 * @version 1.0.0
 */


function Leauge() {
  this.teams = [];
}

function shallowCopy(orginal) {
    // First create an empty object with
    // same prototype of our original source
    var clone = Object.create(Object.getPrototypeOf(orginal)) ;

    var i, keys = Object.getOwnPropertyNames(orginal) ;
    for (i = 0 ; i < keys.length ; i += 1)
    {
        // copy each property into the clone
        Object.defineProperty(clone, keys[ i ],
            Object.getOwnPropertyDescriptor(orginal, keys[ i ])
        ) ;
    }
    return clone ;
}

Leauge.prototype.addTeam = function(original) {
  var clone = shallowCopy(original);
  this.teams.push(clone);
  return clone;
};
Leauge.prototype.playMatches = function() {
  console.log(this.teams);

};
Leauge.prototype.registerResult = function(result, homeTeam,awayTeam) {
  if(result && typeof result === "object"){
    if(result.homeGoal === result.awayGoal) {
      homeTeam.points += 1;
      awayTeam.points += 1;
    }else if (result.homeGoal > result.awayGoal) {
      homeTeam.points += 3;
    }else {
      awayTeam.points += 3;
    }
  }
};
Leauge.prototype.playMatch = function(homeMaxGoals, awayMaxGoals) {
  var result = {
    homeGoal: "undefined",
    awayGoal: "undefined"
  };
  this.homeMaxGoals = homeMaxGoals || 6;
  this.awayMaxGoals = awayMaxGoals || 4;

  result.homeGoal = Math.floor(Math.random() * (this.homeMaxGoals + 1));
  result.awayGoal = Math.floor(Math.random() * (this.awayMaxGoals + 1));
  return result;
};
Leauge.prototype.getTableString = function() {
  var result;

  return result;
};


// exports the object for others tho use
module.exports = Leauge;
