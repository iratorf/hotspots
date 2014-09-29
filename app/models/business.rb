# == Schema Information
#
# Table name: businesses
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  street      :string(255)      not null
#  city        :string(255)      not null
#  state       :string(255)      not null
#  zipcode     :string(255)      not null
#  description :text
#  price_range :integer
#  created_at  :datetime
#  updated_at  :datetime
#  latitude    :float
#  longitude   :float
#

class Business < ActiveRecord::Base
  validates :name, :street, :city, :state, :zipcode, presence: true
  
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :images, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
