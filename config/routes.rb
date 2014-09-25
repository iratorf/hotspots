Rails.application.routes.draw do
  root :to => 'static_pages#home'
  
  resources :users
  resource :session, only: [:new, :create, :destroy]
  
  namespace :api, defaults: { format: :json } do
    resources :businesses, only: [:index, :show] do 
      resources :images, only: [:index]
      # resources :reviews, only: [:index]
    end
    
    resources :reviews, only: [:show, :new, :create]
    
  end
  
  resources :businesses, only: [:new, :create]
  resources :images, only: [:new, :create]
  #add ability to upload images
end
