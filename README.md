# How to run

- Clone and navigate
 - git clone https://github.com/OpenJUB/jRooms.git
 - cd jRooms

- Create a folder for MongoDB data
 - mkdir db

- Start MongoDB (in a separate tab or as a daemon)
 - mongod --dbpath db

- Install node dependencies
 - npm install

- Install bower dependencies and place them in static/lib folder.
 - grunt
