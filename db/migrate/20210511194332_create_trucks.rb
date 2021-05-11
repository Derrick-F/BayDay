class CreateTrucks < ActiveRecord::Migration[5.2]
  def change
    create_table :trucks do |t|
      t.string :company, null: false
      t.string :unit_number
      t.string :make, null: false
      t.string :model, null: false
      t.string :vin, null: false

      t.timestamps null: false
    end
  end
end
