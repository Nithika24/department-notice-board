# Department Notice Board

## Project Description

The Department Notice Board is a web application developed using
Node.js, Express, MongoDB, and React with TypeScript.

It allows users to view department notices and add new notices.

## Technologies Used

- React TypeScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML
- CSS

## Project Structure

department-notice-board/
│
├── client/
│   └── React TypeScript application
│
├── server/
│   └── Express and MongoDB server
│
└── README.md

## Features

- Display department notices
- Add new notices
- Store notices in MongoDB
- Retrieve notices from MongoDB
- React NoticeCard component
- Express REST API

## API Endpoints

### GET /
Displays the welcome message.

### GET /faculty
Returns the faculty list.

### GET /api/notices
Returns all notices.

### POST /api/notices
Adds a new notice to MongoDB.

## How to Run

### Server

```bash
cd server
node server.js