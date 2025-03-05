/**
 * ------------------
 * MongoDB connection
 * ------------------
 * 1. create account 
 * 2. create an user with password
 * 3. whitelist ip address 
 * 4. database > connection > driver > node > view full code >
 * 5. change the password the uri
 * ---------------------------------------------------------------------------
 * 
 * 1. create  --- post
 * 2. app.post('/users', async(req, res)=>{})
 * 3. make the function async to use await inside it
 * 4.Make sure you use the express.json() middleware
 * 5.access data from the body:const :const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * 7.res.send(result)
 * 
 * 
 * CLIENT
 * -----------------------------------------------
 * 1.CREATE fetch
 * 2.add second parameter as an object 
 * 3.provide method: 'POST '
 * 4.add headers: {'content-type': 'application/json'}
 * 5. add body:JSON.Sringify(user)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ------------------------------------------------------------
 * READ Many
 * ---------------------------------------------------
 * 
 * 1.create a cursor = userCollection.find()
 * 2.const result = await cursor.toArray()
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * -------------------------------------------------------
 * DELETE
 * -----------------------------------------------
 * 1.create app.delete('users/:id', async(req, res)=>{})
 * 2.specify unique objectId to delete the right user
 * 3. const query = {_id:new ObjectId(id)} ;
 * 4.const result = await userCollection.deleteOne(query);
 * 
 * 
 * CIENT
 * 1. create dynamic url with id
 * 2.method the DELETE methods
 * 
 */