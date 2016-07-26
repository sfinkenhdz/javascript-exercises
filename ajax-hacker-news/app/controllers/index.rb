get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

get '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  if request.xhr?
    content_type :json
    {id: post.id.to_s, points: post.points.to_s}.to_json
  else
    redirect "/posts"
  end
end

delete '/posts/:id' do
  post = Post.find(params[:id])
  post.destroy
  if request.xhr?
    params[:id].to_s
  else
    @posts = Post.all
    erb :index
  end

end

post '/posts' do
  postNew = Post.new( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  if postNew.save
    if request.xhr?
      content_type :json
      {id: postNew.id, title: postNew.title, username: postNew.username, count: postNew.comment_count, points: postNew.points, time: postNew.time_since_creation}.to_json
    else
      redirect '/posts'
    end
  else
    status 422
  end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
