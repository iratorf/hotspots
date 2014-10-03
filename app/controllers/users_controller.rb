class UsersController < ApplicationController
  
  def new
    @user = User.new
    render :new
  end
  
  def create
    @user = User.create(user_params)
    
    if @user.save
      flash[:notice] = ["Thanks for signing up!"]
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  def show
    @user = User.find(params[:id])
    render json: @user
  end
  
  def user_params
    params.require(:user).permit(:email, :password)
  end
  
end
