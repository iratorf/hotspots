module Api
  class BusinessesController < ApplicationController
  
    def index
      @businesses = Business.all
      render json: @businesses
    end
  
    def new
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
  
    def show
      @business = Business.find(params[:id])
    
      render json: @business
    end
  
    def edit
    end
  
    def update
    end
  
    def destroy
    end
  
    def business_params
      params.require(:business).permit(:name, :street, :city, :state, :zipcode)
    end
  end
end