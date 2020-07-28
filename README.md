<!-- @format -->

## Introduction

In this application I have used <b>NodeJs</b> to run and compile the application. I have uses "Express' framework to integrate the backend point for the application. In this application the main feature is to generate the event by the user for any meet.

- The data is stored in <b>MongoDb</b> database which is integrated with the application.
- The code is in <b>ES6</b> formate so there are many dev dependencies are used like @babel/core, @babel/preset-env, @babel/node to convert the code to <b>ES5</b> syntax.
- <b>MVC</b> Structure is been followed in the code structure to make the work simpler and easy to understand.

## Instruction to start the Application

1. First clone the git repository if not cloned from `git@github.com:vd89/manage-public-event.git`
2. If cloned then pull the repo to get the latest change by `git pull`

- Installation instruction

   <pre>
   <b>To install</b>
      <b>npm install or yarn install </b>      To install all the npm packages used
   </pre>

- To run the application
  <pre>
    <b> To run the project </b>
  
    <b> npm run dev or yarn dev</b>
  
  The application will be running on the dev server that is <i>http://localhost:5000 </i>
  
  </pre>

## Application flow and Operation

- User signup route where the user will register the account with email and password
- User login route where he will be able to login with same email and password that he has registered with
- User will be able up update his/her profile with firstName, lastName, dateOfBirth, gender and photo for the profile,this images will be stored in profile folder which is in public folder, this will be authenticated route so login is important.
- User will be able to view his/her own profile.
- User will be able to create the events and that will be reflected in his account which event he has created and which event he will be attending
- In the event routes that are authenticated so will be able to create the event with the specific date, as the event will last for 24 hr the time will be default.
- At the time of creation of the event the user will be able to describe the numbers of participants that will be able to join the event, and if the participants are more then given number they will not be allowed to join the event.
- Other users will be able to see the events when they log in to their account and will be able to attend that event, which will be reflected in their account as well.
- Users will be able to leave the event and that will get remove from their account as well.

## Tech Stack

<b>Dependencies and npm packages</b>

1. NodeJs
2. ExpressJs
3. MongoDb
4. Express-validator
5. Morgan
6. Multer
7. JsonWebToken
8. Bcrypt
9. Swagger Ui Express
10. Yamljs

<b>DevDependencies</b>

1. @babel/core
2. @babel/node
3. @babel/preset-env
4. nodemon

---

<h2>Task</h2>

## Event Management System

Task for NodeJS practical.

Purpose of this system is to manage public events. At the time of submission, submit this file with the features marked that are implemented and the things included(mentioned at the end).

## API list

(Change `[ ]` to `[X]` for features that are implemented)

- [x] SignUp using Email and Password.
- [x] Login using Email and Password.
- [x] Get profile
- [x] Edit Profile. Can edit following details:
  - FirstName, LastName, Date of Birth, Gender
- [x] Update profile photo (store file in a folder on file system)
- [x] Create a new event with following details:
  - Title (string)
  - Description (text)
  - Date
  - Time (start time) (considering event will be for one day only)
  - Place (string)
  - Participants
  - Maximum participants allowed
- [x] Get events other users have created.
- [x] Join an event.
- [x] Leave an event.
- [x] Get participants of an event.
- [x] Get details of creator of an event.

## Technologies/Packages to use

- Backend: NodeJS
- Database: MongoDB
- ORM: Mongoose preferable

## Things that will be tested at time of evaluation

- [ ] Getting started guide
- [ ] API Documentation
- [ ] Schema definition for database models
- [ ] Request Validation
- [ ] Authorization
- [ ] Error handling
- [ ] API functionality
- [ ] Security
- [ ] Test cases
- [ ] Code quality
