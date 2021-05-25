Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/bays', to: 'homes#index'
  get '/bays/:id', to: 'homes#index'
  get '/trucks', to: 'homes#index'
  
  namespace :api do
    namespace :v1 do
      resources :bays, only: [:index, :show, :new, :create] 
      resources :trucks, only: [:index, :create]
      resources :jobs, only: [:index, :create, :destroy]
      resources :technicians, only: [:index, :show, :new, :create]
    end
  end
end
