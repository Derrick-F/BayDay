class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :category, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
  end
end
