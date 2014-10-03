module Api
  class BusinessesController < ApplicationController
  
    def index
      businesses = Business.all #.includes(:tags, :images, :reviews)
      if params[:city]
        city = params[:city].split.map(&:capitalize).join(' ')
        businesses = businesses.where(city: city)
      end
      
      if params[:tags]
        businesses = businesses.joins(:tags).where(
        "tags.name IN (?)", params[:tags])
      end
      
      if params[:prices]
        businesses = businesses.where(price_range: params[:prices])
      end
      
      if params[:distance]
        distance = params[:distance].sort[-1]
        #geolocator
        businesses = businesses.near(request.location, distance)
        #LS
        # businesses = businesses.near([33.984631, -118.276062], distance)
        #SF
        # businesses = businesses.near([37.791209, -122.415762], distance)
      end
      @businesses = businesses

      # render :index
      render json: @businesses, include: [:tags, :images, :reviews]
    end
  
    def show
      @business = Business.find(params[:id])
      
      render :show
    
      # render json: @business, include: [:tags, :images, :reviews]
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