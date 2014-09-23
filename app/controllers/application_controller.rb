class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  helper_method :current_user, :signed_in?
  
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
  
  def signed_in?
    !!current_user
  end
  
  def login!(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end
  
  def logout!(user)
    user.reset_session_token!
    session[:session_token] = nil
  end
  
  def redirect_to_login
    redirect_to new_session_url unless signed_in?
  end
end
