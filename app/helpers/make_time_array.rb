def to_time_array(objects)
  time_array = []

  objects.each do |n| 
    (time_array << n.time.to_f.round(2)) if (n.time.to_f.round(2) != 0)
  end

  time_array
  
end