const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


// mongodb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nss4adm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    await client.connect();

    const jobCollections = client.db('geniuesWorkPlace').collection('jobs')
    // add job in database
    app.post('/add-job', async(req, res)=>{
        const job = req.body;
        console.log(job);
        const result = await jobCollections.insertOne(job);
        res.send(result);
    })

    // get Job from database
    app.get('/all-jobs', async(req, res)=>{
        const cursor = jobCollections.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    // get jobs for each user
    app.get('/all-jobs/:email', async(req, res)=>{
      const email = req.params.email;
      console.log(email);
      const query = {'emplyoer.email' : email}
      const result = await jobCollections.find(query).toArray();
      res.send(result)
    })

    // delete each data
    app.delete('/all-jobs/:id', async(req, res)=>{
      const id = req.params.id;
      const query = { _id : new ObjectId(id)}
      const result = await jobCollections.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





// server
app.get('/', (req, res)=>{
    res.send('Genies Work Place server is running.')
})

app.listen(port, ()=>{
    console.log(`Genius Work Place server is running on ${port}`);
})