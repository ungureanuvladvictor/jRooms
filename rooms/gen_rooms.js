var fs = require('fs');
var c3 = require('./gen_c3_rooms.js')
var krupp = require('./gen_krupp_rooms.js')
var nm = require('./gen_nm_rooms.js')
var mercator = require('./gen_mercator_rooms.js')

var colleges = [krupp, nm, c3, mercator]

var outputFilename = 'rooms.js';

fs.writeFile(outputFilename, JSON.stringify(colleges, null, 2), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 