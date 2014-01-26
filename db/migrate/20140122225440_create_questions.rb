class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :name
      t.boolean :value
      t.integer :topic_id 
      t.boolean :niewiadomo

      t.timestamps
    end
  end
end
