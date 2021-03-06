module Api
  class ReviewsController < ApplicationController
  
    def index
      @reviews = Review.all 
      render json: @reviews, include: [:user]
    end
  
    def create
      @review = current_user.reviews.new(review_params)
    
      if @review.save
        render json: @review, include: [:user]
      else
        flash.now[:notices] = @reviews.errors.full_messages
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def show
    end

    def update
    end
  
    def destroy
      @review = current_user.reviews.find(params[:id])
      @review.try(:destroy)
      render json: {}
    end
  
    def review_params
      params.require(:review).permit(:body, :score, :business_id)
    end
  end
end