#user welcome
get '/welcome' do
  @login_user = User.find(session[:user_id])
  erb :'/index_login_welcome'
end

# play a game
get '/racer' do
  erb :'/racer'
end

get '/racer/results' do
  @game_result = Game.create(params)
end

get '/racer/scores' do
  @all_result = Game.all
  erb :'/score', :layout => false
end
