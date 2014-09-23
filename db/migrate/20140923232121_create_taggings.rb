class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :business_id, null: false
      t.integer :tag_id, null: false

      t.timestamps
    end
    
    add_index :taggings, :business_id
    add_index :taggings, :tag_id
    add_index :taggings, [:tag_id, :business_id], unique: true
  end
end
