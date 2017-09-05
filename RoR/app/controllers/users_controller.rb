class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    @user.password = params[:password]
    # puts "****"
    # puts user_params
    puts "****"
    puts "****"
    puts "****"
    # puts params
    @user.password == params[:password] ? true : false


    # @user.password = user_params
    if @user.save
      session[:user_id] = @user.id
      render json: @user, status: :created, location: @user
      # redirect_to @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
