class ChangeIntToFloat < ActiveRecord::Migration
  def change
    remove_column :businesses, :latitude
    remove_column :businesses, :longitude
    
    add_column :businesses, :latitude, :decimal
    add_column :businesses, :longitude, :decimal
  end
end
