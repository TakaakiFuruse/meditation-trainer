
#user welcome
get '/welcome' do  

  @login_user = User.find(session[:user_id])
  erb :'/index_login_welcome'
end

# do Action
get '/exercise' do
  new_game = Game.create(user_id: session[:user_id])
  session[:current_game] = new_game
  actions = params["actions"].split(", ")
  actions.each_with_index do |each_action, index|
    action = Action.create(
      name: each_action, 
      game_id: new_game.id, 
      nth_action: index
    )
  end

  erb :'/exercise'
end


get '/exercise/results' do
  current_game = session[:current_game]
  action = Action.where({
      game_id: current_game.id, 
      name: params["actionName"],
      nth_action: params["nthAction"].to_i
    })
  action.first.update(time: params["actionTime"])
end

get '/scores' do
  action_objects = Action.where(game_id: session[:current_game].id)

  time_array = to_time_array(action_objects)

  scores = DoTheMath.new(time_array)
  
  avg = scores.average
  longest = scores.longest
  shortest = scores.shortest

  content_type :json

  {avg: avg, longest: longest, shortest: shortest}.to_json
end
