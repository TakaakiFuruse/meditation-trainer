class CreateGame < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :player1_name
      t.string :player2_name
      t.string :winner_name
      t.string :raptime
    end
  end
end
