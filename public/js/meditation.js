"use strict";
var $timer;

function exercise (actionNameArray, breakTime){
  this.totalExcerciseNum = actionNameArray.length;
  this.actionNameArray = actionNameArray;
  this.nowNthExercise = 0;
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
  return (this.startTime += 0.01).toFixed(2)
};

exercise.prototype.startTimeCount = function() {
  var self = this;
  $timer = setInterval(function(){
    $("li.time h3").html(self.incrementTimes());
     }, 10);
};

exercise.prototype.stopTimeCount = function() {
  clearInterval($timer);
  this.endTime = this.startTime;
};

exercise.prototype.clearCountPushNum = function() {
  $(".previous_action h3").html(this.endTime.toFixed(2));
  this.startTime = 0;
  $(".time h3").html("0.00");
};


exercise.prototype.showActionName = function() {
  // body...

   console.log(this.nowNthExcercise);
   $(".action_name h3").html(this.actionNameArray[this.nowNthExercise]);
   this.nowNthExercise += 1;
   console.log(this.nowNthExercise);
};


exercise.prototype.startTimer = function() {
// 1) bind this.keyBind as start key 
// 2) unbind after it was pushed and bind the key as stop
  var self = this;

  Mousetrap.bind(self.keyBind, function() {
    self.startTimeCount();
    self.showActionName();
    Mousetrap.unbind(self.keyBind);
    Mousetrap.bind(self.keyBind, function () {
    self.stopTimer();
     });
  });
};

exercise.prototype.stopTimer = function() {
// 1) bind stop key 
// 2) re-bind the key as start key once timer was stopped 
  this.nowNthExcercise += 1
  this.stopTimeCount();
  Mousetrap.unbind(this.keyBind);
  this.clearCountPushNum();
  this.startTimer();
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

