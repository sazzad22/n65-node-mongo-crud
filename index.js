const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//user:sazzadUrRahman
//password: ufUWDpTlFZmyjfR3



const uri = "mongodb+srv://sazzadUrRahman:ufUWDpTlFZmyjfR3@cluster-j.ca2ci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
    res.send('Hello World 2')
})

app.listen(port, () => console.log('server is running'));