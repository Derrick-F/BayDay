Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  
  namespace :api do
    namespace :v1 do
      resources :bays, only: [:index, :show, :new, :create]
    end
  end
end
