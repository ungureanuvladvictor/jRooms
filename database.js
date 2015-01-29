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
		pending_outgoing_roommate_requests : Array,
		pending_incoming_roommate_requests : Array,
		username : String,
		eid: Number,
		current_college : String,
		college_preference : Array,
		next_college : String,
		token: String,
		is_tall: Boolean
	});

	roundSchema = new Schema({
		name : String,
		filters : {
			points: Number, // lower cutoff
			college: String,
			tall_people: Boolean,
			exchange_students: Boolean,
			room_type: Number // Single room phase, Tall room phase, Triple room phase
		},
		duration: {
			start: Date,
			end: Date
		}
	});

	roomSchema = new Schema({
		college: String,
		block: String,
		floor: Number,
		type: String,
		contains: Array,
	});

	User = mongoose.model('User', userSchema);
	Round = mongoose.model('Round', roundSchema);
	Room = mongoose.model('Room', roomSchema);

	userSchema.methods.get = function(cb) {
		return this.model('User').find({}, cb);
	}
}