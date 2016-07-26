class Post < ActiveRecord::Base
  has_many :votes
  scope :top, -> {joins('left join votes on votes.post_id = posts.id').select('posts.*, count(votes.id) as votes_count').group('posts.id').order('votes_count desc')
}
  validates :title, presence: true

  def points
    votes.sum(:value)
  end

  def time_since_creation
    ((Time.now - created_at) / 3600).round
  end
end
