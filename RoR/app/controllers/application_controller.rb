class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  # protect_from_forgery with: :exception

  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def require_user
    redirect_to '/login' unless current_user
  end
end
