# Preference's task
## Description
The aim is to develop an application focused on the visualization of existing issues. 

## Specifications
Each issue will be structured by: 
- Title 
- Description
- Severity (High, medium, low) 
- Status (TODO, DOING, DONE)

The issue status must be editable from the issue list itself, not from any detailed view. We recommend all fields editable in the issue list itself.

Don't use save button, just autosave.

Use websocket to update issues automaticaly when something changes.

Asume users will use last chrome version (don't care about browser compatibilities)

Use the backend technology you want, for frontend you must use VueJS or React, and we recommend also to use typescript

You can use the DB technology you want.

## Technologies
- **Back-end**
  - [**Express**](https://www.npmjs.com/package/express) 
  - [**Socket.io**](https://www.npmjs.com/package/socket.io). Socket.io enables real-time bidirectional event-based communication.
  - [**Nodemon**](https://www.npmjs.com/package/nodemon). Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
  - [**Concurrently**](https://www.npmjs.com/package/concurrently). Run multiple commands concurrently.

## Installation
[React with TypeScript](https://create-react-app.dev/docs/adding-typescript/) 

`yarn create react-app my-app --template typescript`

