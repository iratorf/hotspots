class AddCoordsToBusiness < ActiveRecord::Migration
  def change
    add_column :businesses, :latitude, :integer
    add_column :businesses, :longitude, :integer
  end
end
