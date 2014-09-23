class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string  :name, null: false
      t.string  :street, null: false
      t.string  :city, null: false
      t.string  :state, null: false
      t.string  :zipcode, null: false
      t.text    :description
      t.integer :price_range

      t.timestamps
    end
    
    add_index :businesses, :name
    add_index :businesses, :zipcode
    add_index :businesses, :city
  end
end
