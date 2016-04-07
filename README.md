# Intial setup

### Nodejs and npm

    $ sudo apt-get install nodejs nodejs-dev npm

If you get EACCESS permision problems check out https://docs.npmjs.com/getting-started/fixing-npm-permissions

### Bower

    $ npm install -g bower

### Gulp

    $ npm install -g gulp-cli

###Install Django

    $ pip install virtualenvwrapper
    $ mkvirtualenv stb -p `which python3`
    (stb) $ pip install django==1.9.0 # check requirements.txt for version changes

Download and Install PostgreSQL.

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
