#user welcome
get '/welcome' do
  @login_user = User.find(session[:user_id])
  erb :'/index_login_welcome'
end

# do Action
get '/exercise' do
  erb :'/exercise'
end

get '/exercise/start' do
 # * get actions in params
 # * create action object from params, create game object
 # * store actions in variables 
 # * make associatoin, user << game , game << actions 
 # * send actions to JS in view

#   new_game = Game.create()
#   login_user = User.find(session[:user_id])
#   exercises = params[:actions].split(" ")

#   exercises_object_array = exercises.each do |exercise|
#     Action.create(name: "#{action}")
#   end


#   login_user.games << new_game


# (1..5).to_a.each do |n|
#   Game.find(1).actions <<  Action.find(n) 
# end

#   new_game.actions << exercises

#   binding.pry
end

get '/exercise/results' do
  @action_result = Action.create(params)
end

get '/exercise/scores' do
  @all_result = Action.all
  erb :'/score', :layout => false
end
