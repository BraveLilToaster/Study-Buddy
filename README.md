# Intial setup

### Nodejs and npm

    $ sudo apt-get install nodejs nodejs-dev npm

If you get EACCESS permision problems check out https://docs.npmjs.com/getting-started/fixing-npm-permissions
### Express

    $ npm install -g express
    
### Bower

    $ npm install -g bower

### Grunt

    $ npm install -g grunt-cli

###Install morgan

    $ npm install -g morgan
    
###Install Mongoose

    $ npm install -g mongoose
    
###Install Body Parser

    $ npm install -g body-parsers

Download and Install MongoDB and Robomongo.

###JSON Objects
    
Event Object

    Name
    Location
    Date
    Time
    User Objects (FK)
    Class Object (FK)
    Description
    
User Object

    User Name
    Email
    Password
    School
    Class List (FK)
    
Class Object

    Class Name
    School
    Department
    Course #
    Section
    Array of users Objects in Class (FK)
    
###Mockups
![alt tag](/screenshots/studybuddy_login.png)
![alt tag](/screenshots/studybuddy_signup.png)
![alt tag](/screenshots/studybuddy_class_list.png)
![alt tag](/screenshots/studybuddy_create_event.png)
[alt tag](/screenshots/studybuddy_join_class.png)
![alt tag](/screenshots/studybuddy_add_class_modal.png)
![alt tag](/screenshots/studybuddy_settings.png)
