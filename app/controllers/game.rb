#user welcome
get '/welcome' do
  @login_user = User.find(session[:user_id])
  erb :'/index_login_welcome'
end

# do Action
get '/exercise' do
  @new_game = Game.create(user_id: session[:user_id])
  actions = params["actions"].split(", ")

  actions.each do |each_action|
    action = Action.create(name: each_action, 
                  game_id: @new_game.id
                  )
  end

  erb :'/exercise'
end


get '/exercise/results' do
  action = Action.where({game_id: @new_game, 
    name: params["actionName"]})
  action.update(time: params["actionTime"])
end

get '/exercise/scores' do
  @all_result = Action.all
  erb :'/score', :layout => false
end
