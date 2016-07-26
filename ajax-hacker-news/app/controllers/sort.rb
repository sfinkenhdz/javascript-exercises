get '/sort/by_new' do
  new_posts = Post.order("created_at DESC").to_json({:methods => [:points, :time_since_creation]})
end

get '/sort/by_comments' do
  new_posts = Post.order("comment_count DESC").to_json({:methods => [:points, :time_since_creation]})

end

get '/sort/by_popular' do
  new_posts = Post.top.to_json({:methods => [:points, :time_since_creation]})
end

