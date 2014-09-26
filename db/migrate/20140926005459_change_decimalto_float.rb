class ChangeDecimaltoFloat < ActiveRecord::Migration
  def change
    remove_column :businesses, :latitude
    remove_column :businesses, :longitude
    
    add_column :businesses, :latitude, :float
    add_column :businesses, :longitude, :float
  end
end
