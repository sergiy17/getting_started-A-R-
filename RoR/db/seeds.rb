# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Book.create!([
  { name: 'Harry Potter and your mom' },
  { name: '50 shadows of white' }
])


User.create!([
  { name: 'Sergiy', age: 24, admin: true },
  { name: 'Ivanka', age: 21, admin: false },
  { name: 'Yevgenuj', age: 28, admin: false }
])
