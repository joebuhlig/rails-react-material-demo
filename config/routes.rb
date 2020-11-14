Rails.application.routes.draw do
  root 'login#index'

  get 'tasks/index'
  get 'login/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
