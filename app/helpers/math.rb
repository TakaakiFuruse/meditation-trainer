class DoTheMath
  attr_accessor :time_array

  def initialize(time_array)
    @time_array = time_array
  end

  def average
    sum = self.time_array.inject {|avg, n| avg.round + n}
    average = (sum / (self.time_array.length)).round(2)
  end
  
  def longest
    self.time_array.sort[-1]
  end

  def shortest
     self.time_array.sort[0]
  end

end