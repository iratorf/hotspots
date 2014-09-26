# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

IMAGES = [
  "http://lorempixel.com/output/nightlife-q-c-325-200-6.jpg",
  "http://lorempixel.com/output/nightlife-q-c-325-200-7.jpg",
  "http://lorempixel.com/output/nightlife-q-c-325-200-5.jpg",
  "http://lorempixel.com/output/nightlife-q-c-325-200-4.jpg",
  "http://lorempixel.com/output/nightlife-q-c-325-200-9.jpg",
  "http://lorempixel.com/output/nightlife-q-c-325-200-1.jpg",
  "http://lorempixel.com/output/nightlife-q-c-325-200-2.jpg",
  "http://lorempixel.com/output/city-q-c-325-200-9.jpg",
  "http://lorempixel.com/output/city-q-c-325-200-10.jpg",
  "http://lorempixel.com/output/city-q-c-325-200-4.jpg",
  "http://lorempixel.com/output/city-q-c-325-200-2.jpg",
  "http://lorempixel.com/output/food-q-c-325-200-3.jpg",
  "http://lorempixel.com/output/food-q-c-325-200-2.jpg",
  "http://lorempixel.com/output/technics-q-c-325-200-4.jpg",
  "http://lorempixel.com/output/technics-q-c-325-200-2.jpg",
]

TAGS = [
  "Bar",
  "Lounge",
  "Dive Bar",
  "Pool Hall",
  "Dance Club",
  "Karaoke",
  "Bar and Grill",
  "Club",
  "Comedy Club",
]

User.create(email: 'guest@guestlogin.com', password: 'guest1234')

10.times do |n|
  Tag.create(name: TAGS[n])
end

30.times do |n|
  Business.create(
    name: Faker::Company.name,
    street: Faker::Address.street_address,
    city: 'San Francisco',
    state: 'California',
    zipcode: (94100 + rand(10..99)),
    price_range: rand(1..4),
    latitude: rand(37.75..37.80),
    longitude: rand(-122.44..-122.39) 
  )
  
  Image.create(url: IMAGES.sample, business_id: (n + 1))
  Tagging.create(tag_id: rand(1..10), business_id: (n + 1))
end

30.times do |n|
  Business.create(
    name: Faker::Company.name,
    street: Faker::Address.street_address,
    city: 'Los Angeles',
    state: 'California',
    zipcode: (90000 + rand(10..99)),
    price_range: rand(1..4),
    latitude: rand(33.76..34.14),
    longitude: rand(-118.45..-118.01) 
  )
  
  Image.create(url: IMAGES.sample, business_id: (n + 31))
  Tagging.create(tag_id: rand(1..10), business_id: (n + 31))
end

