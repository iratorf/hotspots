class AddMissingindexes < ActiveRecord::Migration
  def change
    add_index :reviews, :user_id
    add_index :images, :business_id
  end
end
