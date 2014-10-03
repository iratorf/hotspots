# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

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

REVIEWS = [
  "lauter lauter sparge; conditioning tank, hefe conditioning tank amber abbey. crystal malt caramel malt pitch. brew infusion ester keg amber carbonation saccharification. lagering amber adjunct. mash pitching dextrin additive cask conditioned ale hoppy. aerobic pub acid rest pub bung primary fermentation.",
  "secondary fermentation hefe aroma hops, biere de garde imperial wit. enzymes cold filter wort chiller squares, cask conditioning aroma hops.",
  "krausen imperial malt gravity draft (draught? becher abv degrees plato hop back: keg, caramel malt! wort top-fermenting yeast.",
  "black malt racking dextrin pitching hydrometer grainy carboy seidel, berliner weisse berliner weisse! draft (draught) pitch original gravity saccharification reinheitsgebot adjunct. brewhouse carboy bitter pilsner bright beer chocolate malt brew kettle. barleywine saccharification primary fermentation rims sparge. mead hoppy terminal gravity attenuation becher,  tulip glass primary fermentation.",
  "black malt racking dextrin pitching hydrometer grainy carboy seidel, berliner weisse berliner weisse! draft (draught) pitch original gravity saccharification reinheitsgebot adjunct. brewhouse carboy bitter pilsner bright beer chocolate malt brew kettle. barleywine saccharification primary fermentation rims sparge. mead hoppy terminal gravity attenuation becher, tulip glass primary fermentation."
]

DESCRIPTIONS = [
  "As an interesting side note, as a head without a body, I envy the dead. Daddy Bender, we're hungry. You, minion. Lift my arm. AFTER HIM! I'm just glad my fat, ugly mama isn't alive to see this day.",
  "You seem malnourished. Are you suffering from intestinal parasites? I never loved you. You've killed me! Oh, you've killed me! Now that the, uh, garbage ball is in space, Doctor, perhaps you can help me with my sexual inhibitions? I don't know what you did, Fry, but once again, you screwed up! Now all the planets are gonna start cracking wise about our mamas. Why would a robot need to drink?",
  "I videotape every customer that comes in here, so that I may blackmail them later. Spare me your space age technobabble, Attila the Hun! Isn't it true that you have been paid for your testimony?",
  "Good news, everyone! There's a report on TV with some very bad news! Throw her in the brig. Have you ever tried just turning off the TV, sitting down with your children, and hitting them?",
  "I saw you with those two 'ladies of the evening' at Elzars. Explain that. Who am I making this out to? Son, as your lawyer, I declare y'all are in a 12-piece bucket o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' mess you caused. My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards. Why would a robot need to drink? In your time, yes, but nowadays shut up! Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for their stemcells." 
]

EMAILS = [
  "john@email.com",
  "amy@email.com",
  "sam@email.com",
  "mark@email.com"
]

User.create(email: 'guest@guestlogin.com', password: 'guest1234')

4.times do |n|
  User.create(
  email: EMAILS[n],
  password: "sample"
  )
end

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
    longitude: rand(-122.44..-122.39) ,
    description: DESCRIPTIONS.sample
  )
  3.times do
    Image.create(
      url:  ("/assets/nightlife" + rand(1..20).to_s + ".jpg"), 
      business_id: (n + 1)
    )
  end
  3.times do 
    Tagging.create(tag_id: rand(1...10), business_id: (n + 1))
  end 
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
    longitude: rand(-118.45..-118.01),
    description: DESCRIPTIONS.sample 
  )
  3.times do
    Image.create(
      url: ("/assets/nightlife" + rand(1..20).to_s + ".jpg"), 
      business_id: (n + 31)
    )
  end
  
  3.times do 
    Tagging.create(tag_id: rand(1...10), business_id: (n + 31))
  end
end

30.times do |n|
  Business.create(
    name: Faker::Company.name,
    street: Faker::Address.street_address,
    city: 'New York',
    state: 'New York',
    zipcode: (10000 + rand(10..99)),
    price_range: rand(1..4),
    latitude: rand(40.711414..40.769423),
    longitude: rand(-74.008369..-73.975754),
    description: DESCRIPTIONS.sample 
  )
  3.times do
    Image.create(
      url: ("/assets/nightlife" + rand(1..20).to_s + ".jpg"), 
      business_id: (n + 61)
    )
  end
  
  3.times do 
    Tagging.create(tag_id: rand(1...10), business_id: (n + 61))
  end
end

180.times do |n|
  Review.create(
  body: REVIEWS.sample,
  business_id: rand(1..90),
  score: rand(1..5),
  user_id: rand(1..5)
  )
end
