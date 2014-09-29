# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  score       :integer          not null
#  business_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Review < ActiveRecord::Base
  validates :body, :score, :business_id, :user_id, presence: true
  
  belongs_to :business
  belongs_to :user
end
