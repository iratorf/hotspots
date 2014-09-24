class AddBusinessIdtoImages < ActiveRecord::Migration
  def change
    add_column :images, :business_id, :integer
  end
end
