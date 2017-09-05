class ChangeColumnNameUsers < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.rename :name,    :first_name
      t.rename :surname, :last_name

      change_column :users, :first_name, :string, before: :created_at
    end
  end
end
