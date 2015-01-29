def display_error
  error = session[:error]
  session[:error] = nil

  if error
    return erb :'errors/error_display',  layout: true, locals: {errors: error}

  else
    return ""
  end
end

def set_error(msg)
  session[:error] = {"Error" => [msg]}
end