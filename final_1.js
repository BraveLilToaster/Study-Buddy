//packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./user');
var Classes = require('./classes')
var port = process.env.PORT || 8080;
var Event = require('./event')
var path = require('path');
// app config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// log all requests to the console
app.use(morgan('dev'));

// connect to our database
mongoose.connect('mongodb://localhost:27017');

//api routes
// basic route to test connect
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname + '/public')));


app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/'));
});

//express router
var apiRouter = express.Router();

// middleware
apiRouter.use(function(req, res, next) {
	// log everything
	console.log('/ hit');
	next();
});

// test route to make sure everything is working
apiRouter.get('/', function(req, res) {
	res.json({ message: 'api hit' });
});

//users routes
apiRouter.route('/users')

	//post
	.post(function(req, res) {//test

		var user = new User();
		user.name = req.body.name;
		user.username = req.body.username;
		user.password = req.body.password;
		user.school = req.body.school;
		user.classes = req.body.classes;
		user.events = req.body.events;
		user.save(function(err) {
			if (err) {
				// duplicate entry
				if (err.code == 11000)
					return res.json({ success: false, message: 'A user with that username already exists. '});
				else
					return res.send(err);
			}
			res.json({ message: 'User created!' });
		});

	})

	//get all users
	.get(function(req, res) {
		User.find(function(err, users) {
			if (err) return res.send(err);
			res.json(users);
		});
	});

//query by ObjectId
apiRouter.route('/users/:user_id')
	.get(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if (err) return res.send(err);
			res.json(user);
		});
	})

	// update the user with this id
	.put(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {

			if (err) return res.send(err);
			if (req.body.name) user.name = req.body.name;
			if (req.body.username) user.username = req.body.username;
			if (req.body.classes) user.classes = req.body.classes;
			if (req.body.events) user.events = req.body.events;
			if (req.body.school) user.school = req.body.school;
			if (req.body.password) user.password = req.body.password;

			// save
			user.save(function(err) {
				if (err) return res.send(err);
				res.json({ message: 'User updated!' });
			});
		});
	})

	// delete by id
	.delete(function(req, res) {
		User.remove({
			_id: req.params.user_id
		}, function(err, user) {
			if (err) return res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});
	//end user routes

	//class routes
apiRouter.route('/classes')

	//post
	.post(function(req, res) {//test

		var classes = new Classes();
		classes.name = req.body.name;
		classes.school = req.body.school;
		classes.department = req.body.department;
		classes.users = req.body.users;
		classes.events = req.body.events;
		classes.section = req.body.section;
		classes.save(function(err) {
			if (err) {
				return res.send(err);
			}
			res.json({ message: 'class created!' });
		});

	})

	//get all users
	.get(function(req, res) {
		Classes.find(function(err, classes) {
			if (err) return res.send(err);
			res.json(classes);
		});
	});

//query by ObjectId
apiRouter.route('/classes/:class_id')
	.get(function(req, res) {
		Classes.findById(req.params.class_id, function(err, classes) {
			if (err) return res.send(err);
			res.json(classes);
		});
	})

	// update the classes with this id
	.put(function(req, res) {
		Classes.findById(req.params.class_id, function(err, classes) {

			if (err) return res.send(err);
			if (req.body.name) classes.name = req.body.name;
			if (req.body.school) classes.school = req.body.school;
			if (req.body.department) classes.department = req.body.department;
			if (req.body.users) classes.users = req.body.users;
			if (req.body.events) classes.events = req.body.events;
			if (req.body.section) classes.section = req.body.section;

			// save
			Classes.save(function(err) {
				if (err) return res.send(err);
				res.json({ message: 'Class updated!' });
			});
		});
	})

	// delete by id
	.delete(function(req, res) {
		Classes.remove({
			_id: req.params.class_id
		}, function(err, classes) {
			if (err) return res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});
//end class routes
	//event routes
apiRouter.route('/events')

	//post
	.post(function(req, res) {//test

		var event = new Event();
		event.name = req.body.name;
		event.date = req.body.date;
		event.location = req.body.location;
		event.users = req.body.users;
		event.classes = req.body.classes;
		event.description = req.body.description;
		event.save(function(err) {
			if (err) {
				return res.send(err);
			}
			res.json({ message: 'event created!' });
		});

	})

	//get all users
	.get(function(req, res) {
		Event.find(function(err, event) {
			if (err) return res.send(err);
			res.json(event);
		});
	});

//query by ObjectId
apiRouter.route('/events/:event_id')
	.get(function(req, res) {
		Event.findById(req.params.event_id, function(err, event) {
			if (err) return res.send(err);
			res.json(event);
		});
	})

	// update the classes with this id
	.put(function(req, res) {
		Event.findById(req.params.event_id, function(err, event) {

			if (err) return res.send(err);
			if (req.body.name) event.name = req.body.name;
			if (req.body.date) event.date = req.body.date;
			if (req.body.location) event.location = req.body.location;
			if (req.body.users) event.users = req.body.users;
			if (req.body.classes) event.classes = req.body.classes;
			if (req.body.description) event.description = req.body.description;

			// save
			Event.save(function(err) {
				if (err) return res.send(err);
				res.json({ message: 'event updated!' });
			});
		});
	})

	// delete by id
	.delete(function(req, res) {
		Event.remove({
			_id: req.params.class_id
		}, function(err, event) {
			if (err) return res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});
//end event routes
// register routes
app.use('/api', apiRouter);

//start server
app.listen(port);
console.log('Magic happens on port ' + port);
