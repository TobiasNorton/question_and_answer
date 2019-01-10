# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#rails db:schema:load db:seed

question = Question.create(header: "How do I change a tire?", body: "I have a Ford Focus with a flat and I'm stranded on I-95. If anyone could get back to me within the next 30 minutes that would be awesome.Thanks.")

question = Question.create(header: "How do I boil water?", body: "I took a jug of water and poured it into a pot on the stove. I have been rubbing two sticks vigorously on the sides of the pot for like 15 minutes but nothing is happening. Is there an easier way?")

question = Question.create(header: "How do I eat pasta upside down?", body: "I tried to duct tape my feet to the ceiling while I ate spaghetti but it kept getting up my nose and falling onto the floor. Also my feet keep coming detached and I've been breaking a lot of furniture from falling. Can someone make some recommendations?")

question = Question.create(header: "What are the 3 major components of a Rails app?", body: "There are 3 things that back end developers use, if I am remembering correctly. One of them is a 'view' but I can't remember the other two.")

question = Question.create(header: "What is a React component?", body: "That's all I got. What is a React component?")

question = Question.create(header: "What city holds the world record for the most sun?", body: "I heard one time that there was a city that had 765 consecutive days of sunshine and that this city holds the world record for that. Which one is it?")

question = Question.create(header: "How do I use Google?", body: "I have so many questions that I want to ask but I don't know how to use Google. Help?")