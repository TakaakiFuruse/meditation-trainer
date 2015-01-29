#user welcome
get '/welcome' do
  @login_user = User.find(session[:user_id])
  erb :'/index_login_welcome'
end

# do Action
get '/exercise' do
  erb :'/exercise'
end

get '/exercise/results' do
  @action_result = Action.create(params)
end

get '/exercise/scores' do
  @all_result = Action.all
  erb :'/score', :layout => false
end
