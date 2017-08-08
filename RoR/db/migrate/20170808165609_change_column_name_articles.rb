class ChangeColumnNameArticles < ActiveRecord::Migration[5.0]
  def change
    change_table :articles do |t|
      t.rename :article_name, :name
      t.rename :author, :user_id
    end
  end
end
