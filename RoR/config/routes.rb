Rails.application.routes.draw do
  resources :articles
  resources :users

  get  'signup'  => 'users#new'
  post 'signup'  => 'users#create'
end
