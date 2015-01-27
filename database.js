var config = require('./config.json');

exports.load = function()
{
	mongoose = require('mongoose');
	mongoose.connect('mongodb://' + config.dbhost + '/' + config.dbname);

	db = mongoose.connection;
	db.on('error', console.error.bind(console, '(!!!) MongoDB connection error:'));
	db.once('open', function() { console.log("Connected to MongoDB database at mongodb://" + config.dbhost + '/' + config.dbname + "..."); });
	
	var Schema = mongoose.Schema;
	userSchema = new Schema({
		name : String,
		surname : String,
		nationality : String,
		graduation_year : Number,
		roommates : Array,
		pending_roommate_requests : Array,
		username : String,
		current_college : String,
		college_preference : Array,
		next_college : String,
		token: String
	});

	User = mongoose.model('User', userSchema);

	userSchema.methods.get = function(cb) {
		return this.model('User').find({}, cb);
	}
}