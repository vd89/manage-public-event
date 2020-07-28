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
