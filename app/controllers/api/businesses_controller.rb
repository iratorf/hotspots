module Api
  class BusinessesController < ApplicationController
  
    def index
      businesses = Business.all
      if params[:city]
        businesses = businesses.where(city: params[:city])
      end
      
      if params[:tags]
        businesses = businesses.joins(:tags).where(
        "tags.name IN (?)", params[:tags])
      end
      
      if params[:prices]
        businesses = businesses.where(price_range: params[:prices])
      end
      @businesses = businesses

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