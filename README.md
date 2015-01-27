# How to run

- Clone and navigate
 - git clone https://github.com/OpenJUB/jRooms.git
 - cd jRooms

- Create a folder for MongoDB data
 - mkdir db

- Start MongoDB (in a separate tab or as a daemon)
 - mongod --dbpath db

- If you haven't already, install Bower and Grunt
 - npm install -g bower grunt grunt-cli

- Install node dependencies
 - npm install

- Install bower dependencies and place them in static/lib folder.
 - grunt

- Create (and change, if needed) config file
 - cp config.example.json config.json

- Run the server!
 - node app.js

By default, server can be accessed at http://localhost:3000.
Admin panel can be found at http://localhost:3000/admin.
