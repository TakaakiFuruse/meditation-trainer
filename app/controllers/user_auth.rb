get '/' do
  # Look in app/views/index.erb
  erb :index
end

# login form
get '/login' do
  erb :'/login'
end

#login
post '/login' do
  user = User.find_by(name: params[:user][:name]).try(:authenticate, params[:user][:password])
  if user
    session[:user_id] = user.id

    redirect("/welcome")
  else
    set_error("LOGIN FAILED, CHECK YOUR PASS/NAME")
    redirect("/login")
  end
end

#sign up
get '/signup' do
  erb :'auth/signup'
end

post '/signup' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    redirect("/welcome")
  else
    session[:error] = user.errors.messages
    redirect("/signup")
  end
end

#log out
get '/logout' do
  session[:user_id] = nil
  redirect("/")
end

#secret screen (only shown to log in user)
get '/secret' do
  if session[:user_id] == nil
    redirect("/login")
  else
    redirect("/secret")
    erb :'/secret'
  end

end
