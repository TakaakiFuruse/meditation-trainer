"use strict";
var $timer;

function exercise (actionNameArray){
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
  this.startTime = this.endTime;
};

exercise.prototype.clearTimeCount = function() {
  $(".previous_action h3").html(this.endTime.toFixed(2));
  this.startTime = 0;
  $(".time h3").html("0.00");
};

exercise.prototype.showActionName = function() {
   if (this.nowNthExercise == this.totalExcerciseNum) {
     $(".action_name h3").html("DONE!!");
     Mousetrap.unbind(this.keyBind);
     clearInterval($timer);
   }else{
     $(".action_name h3").html(this.actionNameArray[this.nowNthExercise]);
   };
};

exercise.prototype.sendDataToServer = function() {
  console.log(this.actionNameArray[this.nowNthExercise])
  console.log(this.startTime.toFixed(2))
  console.log(this.endTime.toFixed(2))
  console.log(this.nowNthExercise)
  $.ajax({
    url: '/exercise/results',
    type: 'GET',
    data: {
     "actionName": "" + this.actionNameArray[this.nowNthExercise] + "",
     "actionTime": "" + this.endTime.toFixed(2) + "",
     "nthAction": this.nowNthExercise
          }
  })
  .done(function() {
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  
};

exercise.prototype.startTimer = function() {
// 1) bind this.keyBind as start key 
// 2) unbind after it was pushed and bind the key as stop
  var self = this;
  Mousetrap.bind(self.keyBind, function() {
    self.showActionName();
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
  this.stopTimeCount();
  this.sendDataToServer();
  Mousetrap.unbind(this.keyBind);
  this.clearTimeCount();
  this.nowNthExercise += 1;
  this.startTimer();
};