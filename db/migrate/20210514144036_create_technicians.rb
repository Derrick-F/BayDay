class CreateTechnicians < ActiveRecord::Migration[5.2]
  def change
    create_table :technicians do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
