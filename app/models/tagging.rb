# == Schema Information
#
# Table name: taggings
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  tag_id      :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Tagging < ActiveRecord::Base
  validates :business_id, :tag_id, presence: true
  validates :tag_id, uniqueness: { scope: :tag_id }
end
