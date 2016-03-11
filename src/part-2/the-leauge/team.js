"use strict";
/**
 *
 *
 * @author: alexanderanter
 * @version 1.0.0
 */

function Team(teamName) {
   if(teamName) {
     this.name = teamName;
     this.points = 0;
   } else {
     throw new Error("NOthing sent!");
   }

}

Team.prototype.toTableRow = function(padding) {
  var result;
  this.padding = padding || 25;
  result = this.name;
  for(var i = 4; i < this.padding; i++) {
      result += " ";
  }
  result += this.points;

  return result;
};

// exports the object
module.exports = Team;
