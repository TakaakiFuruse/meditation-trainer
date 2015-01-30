User.create(name: "test", password: "test", password_confirmation: "test")
Game.create()

%w(action1 action2 action3 action4 action5).each do |action|
  Action.create(name: "#{action}", time: 1.11)
end

(1..5).to_a.each do |n|
  Game.find(1).actions <<  Action.find(n) 
end

User.find(1).games << Game.find(1)
