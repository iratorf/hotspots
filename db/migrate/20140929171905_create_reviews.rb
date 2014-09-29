class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :score, null: false
      t.integer :business_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    
    add_index :reviews, :business_id
  end
end
