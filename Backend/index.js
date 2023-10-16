require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("insertDB");
    const databaseCollection = database.collection("coffee_shop");
    const UserDatabase = database.collection("UserCollection");

    app.get("/allCoffees", async (req, res) => {
      const data = databaseCollection.find();
      const result = await data.toArray();
      res.send(result);
    });

    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const coffee = await databaseCollection.findOne(query);
      res.send(coffee);
    });

    app.put("/coffee/:id", async (req, res) => {
      const data = req.body;
      const paramsId = req.params.id;
      const filter = { _id: new ObjectId(paramsId) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: data.name,
          chef: data.chef,
          supplier: data.supplier,
          taste: data.taste,
          category: data.category,
          details: data.details,
          photo: data.photo,
        },
      };
      const result = await databaseCollection.updateOne(
        filter,
        updateDoc,
        options
      );

      res.send(result);
    });

    app.post("/addCoffee", async (req, res) => {
      const newCoffee = req.body;
      const data = {
        name: newCoffee.name,
        chef: newCoffee.chef,
        supplier: newCoffee.supplier,
        taste: newCoffee.taste,
        category: newCoffee.category,
        details: newCoffee.details,
        photo: newCoffee.photo,
      };

      const result = await databaseCollection.insertOne(data);
      res.send(result);
    });

    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await databaseCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const data = UserDatabase.find();
      const result = await data.toArray();
      res.send(result);
    });

    app.post("/user", async (req, res) => {
      const newUser = req.body;
      const result = await UserDatabase.insertOne(newUser);
      res.send(result);
    });

    app.patch("/user", async (req, res) => {
      const updatedUser = req.body;
      const filter = { email: updatedUser.email };
      const updateDoc = {
        $set: {
          lastLoggedIn: updatedUser.lastLoggedIn,
        },
      };
      const result = await UserDatabase.updateOne(filter, updateDoc);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
