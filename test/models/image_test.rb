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

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
