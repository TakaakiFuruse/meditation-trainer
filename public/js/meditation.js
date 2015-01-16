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
  this.keyBind = "space";
  this.startTimer();
}

exercise.prototype.incrementTimes = function() {
  this.startTime += 1;
  return this.startTime;
};

exercise.prototype.countTime = function() {
  var self = this;
  $timer = setInterval(function(){
    $("li.time h3").html(self.incrementTimes());
     }, 10);
};

exercise.prototype.stopTimeCount = function() {
  clearInterval($timer);
  this.endTime = this.startTime;
  return this.endTime;
};


exercise.prototype.startTimer = function() {
// 1) bind this.keyBind as start key 
// 2) unbind after it was pushed and bind the key as stop
  var self = this;

  Mousetrap.bind(self.keyBind, function() {
    self.countTime();
    Mousetrap.unbind(self.keyBind);
    Mousetrap.bind(self.keyBind, function () {
    self.stopTimer();
     });
  });
};

exercise.prototype.stopTimer = function() {
// 1) bind stop key 
// 2) re-bind the key as start key once timer was stopped 
  var self = this;

  self.stopTimeCount();
  Mousetrap.unbind(self.keyBind);
  self.startTimer();
};


exercise.prototype.communicateWithBackend = function() {
};

exercise.prototype.showActoinResult = function() {
  // put jquery statement here....
};

