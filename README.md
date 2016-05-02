# Intial setup

### Nodejs and npm

    $ sudo apt-get install nodejs nodejs-dev npm

If you get EACCESS permision problems check out https://docs.npmjs.com/getting-started/fixing-npm-permissions

### Install mongo dependencies

    $ npm install -g morgan mongoose body-parsers bcrypt-nodejs mongo
    
### Install packages from package.json
    
    $ npm install

# Run Server
    
    $ node final_1.js

#JSON Objects
    
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
    
#Mockups
![alt tag](/screenshots/studybuddy_login.png)
![alt tag](/screenshots/studybuddy_signup.png)
![alt tag](/screenshots/studybuddy_class_list.png)
![alt tag](/screenshots/studybuddy_create_event.png)
![alt tag](/screenshots/studybuddy_join_class.png)
![alt tag](/screenshots/studybuddy_add_class_modal.png)
![alt tag](/screenshots/studybuddy_settings.png)
