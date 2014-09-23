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
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
