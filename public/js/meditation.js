Meditater = function(){
  this.counterID = 0;
};

Meditater.prototype ={
  inexStart: function(){
    this.start = new Date().getTime();
    return this.start;
  },

  inexEnd: function(){
    this.end = new Date().getTime()
    return this.end;
  },

 inexTime: function(){
    var totalTime
    var minute
    var second

    totalTime = this.end - this.start
    minute = Math.floor(totalTime/(60*1000))
    second = Math.floor(totalTime/1000)
    // return ('' + minute + ':' + second + '');
   $('#meditater h2').html('' + minute + ' min' + second + ' sec');

  },

  startCounter: function(){
    var self = this
    this.intervalID = setInterval(function(){
      self.counterID+=1;
      $('#meditater h1').html(self.counterID);
    }, 500);
  },

  stopCounter: function(){
    var self = this
    clearInterval(this.intervalID);
  },

};


$(document).ready(function() {

  var meditaterUser = new Meditater();

  Mousetrap.bind('q', function(){
   $('#meditater h1').html('0');
   $('#meditater h2').html("0 min 0 sec");
    meditaterUser.inexStart();
    meditaterUser.startCounter();
  });

  Mousetrap.bind('p', function(){
    meditaterUser.inexEnd();
    meditaterUser.stopCounter();
    meditaterUser.inexTime();
  });

});





/*
a.getTime();
1417195203463
b = new Date();
Fri Nov 28 2014 12:22:18 GMT-0500 (EST)
b.getTimes();
VM402:2 Uncaught TypeError: undefined is not a function
b.getTime();
1417195338313
b.getTimes() - a.getTimes();
VM496:2 Uncaught TypeError: undefined is not a function
aTime = a.getTime();
1417195203463
bTime = b.getTime();
1417195338313
bTime - aTime
134850
inhale = bTime - aTime
134850
Math.floor(inhale/(60*60/1000))
37458
Math.floor(inhale/(60*60*1000))
0
Math.floor(inhale/(60*1000))
2
Math.floor(inhale/(60*1000))
2
Math.floor(inhale/1000)
134
Math.floor(inhale/(60*1000))
2
*/