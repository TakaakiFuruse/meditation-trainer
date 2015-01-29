class CreateAction < ActiveRecord::Migration
  def change
    create_table :actions do |t|
      t.string :name
      t.float :time
      t.references :game

      t.timestamps
    end
  end
end
