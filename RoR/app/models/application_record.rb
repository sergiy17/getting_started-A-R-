class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  # User.has_secure_password
end
