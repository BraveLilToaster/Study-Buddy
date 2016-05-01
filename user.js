var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var UserSchema = new Schema({
	name : String,
	username: {type: String, required: true, index: {unique : true}},
	password: {type: String, required : true, select : false},
	classes: [{type: Schema.Types.ObjectId, ref: 'Classes'}],
	events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
	school: String
	});
UserSchema.pre('save', function(next){
	var user = this;
	//hash new passwords
	if(!user.isModified('password')) return next();
	//gen hash
	bcrypt.hash(user.password, null, null, function(err, hash){
		if (err) return next(err);
		//uae the hashed password
		user.password = hash;
		next();
	});
});
UserSchema.methodscomparePassword = function(password){
	var user = this;
	return bcrypt.compareSync(password, user.password);
}
module.exports = mongoose.model('User', UserSchema);