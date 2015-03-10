class CreateAction < ActiveRecord::Migration
  def change
    create_table :actions do |t|
      t.string :name
      t.string :time
      t.integer :nth_action
      t.references :game
      t.timestamps
    end
  end
end
