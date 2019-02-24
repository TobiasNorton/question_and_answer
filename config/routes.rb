Rails.application.routes.draw do
  #resources :answers   <====== do we need this?
        #path           #controller name/method name in controller
  get '/api/questions', to: 'api/questions#index'
  post '/api/questions/new', to: 'api/questions#post_question'
  get '/api/questions/:id', to: 'api/questions#select_question'
  get '/api/search/:input', to: 'api/questions#search'
  delete '/api/questions/:id', to: 'api/questions#delete'
  put '/api/questions/upvote/:id', to: 'api/questions#upvote'
  put '/api/questions/downvote/:id', to: 'api/questions#downvote'


  post '/api/answers/new', to: 'api/answers#create'
  delete '/api/answers/:id', to: 'api/answers#delete'
  put '/api/answers/upvote/:id', to: 'api/answers#upvote'
  put '/api/answers/downvote/:id', to: 'api/answers#downvote'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  if Rails.env.production?
    CLIENT_HTML = File.read(Rails.root.join('public/index.html'))

    get "*path", to: proc { [200, {}, [CLIENT_HTML]] }
  end
end
