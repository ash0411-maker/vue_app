Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    resources :books, only: [:index, :show]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
