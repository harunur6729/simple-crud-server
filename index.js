const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const  cors = require('cors')
const port =process.env.PORT  || 5000;
const app = express();

//harunurrashid6729
//bnHGmdwWMNH4XbCH



const uri = "mongodb+srv://harunurrashid6729:bnHGmdwWMNH4XbCH@cluster0.6hlcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const userCollection = database.collection("users")

    app.post('/users', async(req, res) =>{
        const user =req.body;
        console.log('new user', user)
        const result = await userCollection.insertOne(user);
        res.send(result);

    });



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();  
  }
}
run().catch(console.dir);


app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('SIMPLE CRUD IS RUNNING')
})

app.listen(port, ()=>{
    console.log(`SIMPLE CRUD IS RUNNING ON PORT: ${port}`)
})