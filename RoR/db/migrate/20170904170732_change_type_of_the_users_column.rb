class ChangeTypeOfTheUsersColumn < ActiveRecord::Migration[5.0]
  def up
    change_column :users, :gender, :string
  end
end
