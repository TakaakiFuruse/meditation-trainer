"use strict";
var $timer;

function exercise (totalExcerciseNum, actionNameArray, breakTime){
  this.totalExcerciseNum = actionNameArray.length;
  this.actionNameArray = actionNameArray;

  this.miliseconds = 100;
  this.decimals = 1000/this.miliseconds;
  this.nowNthExcercise = 0;
  this.startTime = 0;
  this.endTime = 0;
  this.lastExerciseTime = 0;
  this.breakTime = 0;
  
  this.averageTime = 0;
  this.longestTime = 0;
  this.shortestTime = 0;
  this.keyBind = "space";
  this.startTimer();
}

exercise.prototype.incrementTimes = function() {
  this.startTime += 1;
  return this.startTime/this.decimals;
};

exercise.prototype.startTimeCount = function() {
  var self = this;
  $timer = setInterval(function(){
    $("li.time h3").html(self.incrementTimes());
     }, self.miliseconds);
};

exercise.prototype.stopTimeCount = function() {
  clearInterval($timer);
  this.endTime = this.startTime;
  // return this.endTime;
};

exercise.prototype.clearCountPushNum = function() {
  this.startTime = 0;
  $(".previous_action h3").html(this.endTime);
  $(".time h3").html("0");
};


exercise.prototype.startTimer = function() {
// 1) bind this.keyBind as start key 
// 2) unbind after it was pushed and bind the key as stop
  var self = this;

  Mousetrap.bind(self.keyBind, function() {
    self.nowNthExcercise += 1
    self.startTimeCount();
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
  self.nowNthExcercise += 1
  self.stopTimeCount();
  Mousetrap.unbind(self.keyBind);
  self.clearCountPushNum();
  self.startTimer();
};

exercise.prototype.TimeDataToJSON = function() {
  // exercise = {
  //             nthExersice: 1, data: [name: yogafire, duration: 2.30min],
  //             nthExersice: 2, data: [name: yogateleport, duration: 1.30min],
  //             nthExersice: 3, data: [name: yogateleport, duration: 3.10min],
  //             ......
  //             }
};


exercise.prototype.communicateWithBackend = function() {
};

exercise.prototype.showActoinResult = function() {
};

