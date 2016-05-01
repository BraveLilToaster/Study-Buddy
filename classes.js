var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClassesSchema = new Schema({
	name : {type: String, required : true},
	school: {type: String, required : true},
	department: {type: String, required : true},
	users: [{type: Schema.Types.ObjectId, ref: 'User'}],
	events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
	section: Number
	});
module.exports = mongoose.model('Classes', ClassesSchema);