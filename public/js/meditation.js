"use strict";
var $timer;

function exercise (actionNum, actionArray){
  this.actionNum = actionNum;
  this.actionArray = actionArray;
  this.startTime = 0;
  this.endTime = 0;
  this.averageTime = 0;
  this.longestTime = 0;
  this.shortestTime = 0;
}

exercise.prototype.incrementTimes = function() {
  this.startTime += 1;
  return this.startTime;
};

exercise.prototype.startCount = function() {
  var self = this;
  $timer = setInterval(function(){
    $("li.time h3").html(self.incrementTimes());
     }, 10);
};

exercise.prototype.stopCount = function() {
  clearInterval($timer);
  this.endTime = this.startTime;
  return this.endTime;
};

exercise.prototype.showTime = function() {
  // put jquery statement here....
};

exercise.prototype.sendActionData = function() {
  // put Ajax statment here
};

exercise.prototype.recieveActionData = function() {
  // here comes Ajax too...
};

exercise.prototype.showActoinResult = function() {
  // put jquery statement here....
};
