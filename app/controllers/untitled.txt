class BusinessesController < ApplicationController
  def new
    @business = Business.new
    render :new
  end

  def create
    @business = Business.create(business_params)
  
    if @business.save
      flash[:notice] = ["business created"]
      render json: @business
    else
      flash[:notice] = @business.errors.full_messages
      render :new
    end
  end
end