class CreateBays < ActiveRecord::Migration[5.2]
  def change
    create_table :bays do |t|
      t.string :number, null: false

      t.timestamps null: false
    end
  end
end
