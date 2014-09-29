class ReviewsController < ApplicationController
  
  def index
    @reviews = Review.all
  end
  
  def new
  end
  
  def create
  end
  
  def show
  end
  
  def edit
  end
  
  def update
  end
  
  def destroy
  end
  
  def review_params
    params.require(:review).permit(:body, :score)
  end
end
