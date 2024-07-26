# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
list = List.create(name: "TODO")
list.tasks.create(name: 'record a video')
list.tasks.create(name: '산책하기')
list.tasks.create(name: '저녁 식사하기')
list.tasks.create(name: '맥주 한잔하기')

list = List.create(name: "In progress")
list = List.create(name: "Done")