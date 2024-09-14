const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

//mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://mern-book-store:aKqVKknALrGpPcP1@cluster0.qf0o7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
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
    //create a collection of document
    const bookscollections = client.db("bookinventory").collection("books");

    //insert a book to the db: post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookscollections.insertOne(data);
      res.send(result);
    });

    // //get all books from database
    // app.get("/all-books", async (req, res) => {
    //   const books = bookscollections.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // });

    //update a book data: patch or update method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updatebookdata = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updatedoc = {
        $set: {
          ...updatebookdata,
        },
      };
      //update
      const result = await bookscollections.updateOne(
        filter,
        updatedoc,
        options
      );
      res.send(result);
    });

    //delete a book data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookscollections.deleteOne(filter);
      res.send(result);
    });

    //find by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookscollections.find(query).toArray();
      res.send(result);
    });
    //to get a single book data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookscollections.findOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
