module Api
  class BusinessesController < ApplicationController
  
    def index
      @businesses = Business.all.where(city: params[:city])
      render json: @businesses, include: [:tags, :images]
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