require 'bcrypt'

class User < ActiveRecord::Base
  # has_secure_password
   include BCrypt


   def password
    @password ||= Password.new(password)
 end

 def password=(new_password)
    @password = Password.create(new_password)
    self.password = @password
 end

end
