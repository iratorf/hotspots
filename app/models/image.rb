# == Schema Information
#
# Table name: images
#
#  id          :integer          not null, primary key
#  url         :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#  business_id :integer
#

class Image < ActiveRecord::Base
  validates :url, presence: true
  
  belongs_to :business
end
