class UsersController < ApplicationController
  def index
    @articles = Article.all
    render json: @articles
  end
end
