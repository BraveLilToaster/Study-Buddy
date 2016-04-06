# Intial setup

### Nodejs and npm

    $ sudo apt-get install nodejs nodejs-dev npm

If you get EACCESS permision problems check out https://docs.npmjs.com/getting-started/fixing-npm-permissions

### Bower

    $ npm install -g bower

### Grunt

    $ npm install -g grunt-cli

###Install Django

    $ pip install virtualenvwrapper
    $ mkvirtualenv stb -p `which python3`
    (stb) $ pip install django==1.9.0 # check requirements.txt for version changes

Download and Install PostgreSQL.

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
    
![alt tag](/screenshots/studybuddy_login.png)
![alt tag](/screenshots/studybuddy_signup.png)
![alt tag](/screenshots/studybuddy_class_list.png)
![alt tag](/screenshots/studybuddy_create_event.png)
[alt tag](/screenshots/studybuddy_join_class.png)
![alt tag](/screenshots/studybuddy_add_class_modal.png)
![alt tag](/screenshots/studybuddy_settings.png)
