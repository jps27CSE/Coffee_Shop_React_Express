require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
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
