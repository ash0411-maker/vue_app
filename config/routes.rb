Rails.application.routes.draw do
  root to: 'home#index'
  # resources :books, only: [:index]

  namespace :api do
    resources :books, only: [:show, :index]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
