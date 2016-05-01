var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventSchema = new Schema({
	name : {type: String, required : true},
	date: {type: String, required : true}, //not sure about this
	location: {type: String, required : true},
	classes: [{type: Schema.Types.ObjectId, ref: 'Classes'}],
	users: [{type: Schema.Types.ObjectId, ref: 'User'}],
	description: String
	});
module.exports = mongoose.model('Event', EventSchema);