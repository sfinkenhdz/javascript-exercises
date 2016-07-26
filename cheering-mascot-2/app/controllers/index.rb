get '/' do
  @sign_text = params[:sign_text]
  erb :index
end

post '/cheers' do
  if request.xhr?
    # redirect "/?sign_text=#{Mascot.sign_for(params[:cheer_name])}"
    Mascot.sign_for(params[:cheer_name])
  else
    redirect "/?sign_text=#{Mascot.sign_for(params[:cheer_name])}"
  end
end

