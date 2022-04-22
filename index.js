const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//user:sazzadUrRahman
//password: ufUWDpTlFZmyjfR3

const uri =
  "mongodb+srv://sazzadUrRahman:ufUWDpTlFZmyjfR3@cluster-j.ca2ci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//here we added try catch . async howar karonei ta korte parchi
async function run() {
  try {
    //below code is waiting untill the client in connected
    await client.connect();

    //this part is creating a new db and collection of data.
    const userCollection = client.db("foodExpress").collection("user");

    //loading or finding the data on the db using get method
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query); //it creates a cursor
      //The Cursor is a MongoDB Collection of the document which is returned upon the find method execution.
      //By default, it is automatically executed as a loop. However, we can explicitly get specific index document from being returned cursor. It is just like a pointer which is pointing upon a specific index value.
      //In simple words when we call a find method, all the documents which are returned are saved in a virtual cursor. If a find method returns for a document then it is mean that the cursor has 0 – 3 index.
      const users = await cursor.toArray();
      res.send(users);
    });

    //post user:add new user
    //newUser(req.body) is the new data or doc to be inserted
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result); //this res goes to client side as data(.then(data=>))
    });

    //delete a user
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    //do i want to keep the connection with the server running or not depends on the line below
    //await client.close();
  }
}

run().catch(console.dir); //console.dir shows detailed console.log

//url e kono route lekhle sheta shudhu get method er end point gulo ke pabe. Post method er endpoint gulo ke show korbe na or pabe na. get and post same route dea thakleo get ke pabe
app.get("/", (req, res) => {
  res.send("Hello World 2");
});

app.listen(port, () => console.log("server is running"));
