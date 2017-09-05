class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_email(params[:session][:email])
     if @user && @user.authenticate(params[:session][:password])
        session[:user_id] = @user.id
        render json: @user, status: :created, location: @user
        # redirect_to '/'
     else
      render json: @user.errors, status: :unprocessable_entity

        # redirect_to 'login'
     end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end
end
