class AddUsernameAndGenderToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :username,    :string
    add_column :users, :email,       :string
    add_column :users, :gender,      :boolean
  end
end
