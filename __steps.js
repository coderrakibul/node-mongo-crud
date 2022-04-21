/*
Create a node server with 5 steps
1. create folder
2. npm init
3. npm install express cors mongodb nodemon
4. script-dev: nodemon index.js
5. create index.js 
--------------------------

Create atlas accounht
1. sign up. (google access)
2. create cluster
3. create user dbuser and password
4. network access ---> ip address: allow all
5. database > connect > code copy and paste in index.js
---------------------------

crud operation
1. node mongodb crud > fundamentals
2. create async run funciton
----------------------------

integrate sending data from client to user
1. client side: create a form
2. on submit: get form data and crate user object
3. on server: create user post method to receive data on the backend
4. on client side: set fetch with post headers, body
5. make sure you return a json from the post api
------------------------------

load data to the client side
1. create get api on the server
2. create a query object
3. collection.find(query)
4. cursor.toArray()
5. return the result
6. fetch client useEffect and display data
------------------------------

delete data
1. 
*/