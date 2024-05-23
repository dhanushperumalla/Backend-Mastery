import Express from "express";

const app = Express();
const port = 3000;

app.use(Express.json());

let listData = [];
let nextId = 1;

// Adding items
app.post("/items", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res
      .status(400)
      .send("Bad Request: 'name' and 'price' are required.");
  }
  const newItem = { id: nextId++, name, price };
  listData.push(newItem);
  res.status(201).send(newItem);
});

// Retrieving all items
app.get("/items", (req, res) => {
  res.send(listData);
});

// Retrieving a particular item
app.get("/items/:id", (req, res) => {
  const item = listData.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).send("Not Found");
  }
  res.send(item);
});

// Updating an item
app.put("/items/:id", (req, res) => {
  const item = listData.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).send("Not Found");
  }
  const { name, price } = req.body;
  if (!name || !price) {
    return res
      .status(400)
      .send("Bad Request: 'name' and 'price' are required.");
  }
  item.name = name;
  item.price = price;
  res.send(item);
});

// Deleting an item
app.delete("/items/:id", (req, res) => {
  const index = listData.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (index === -1) {
    return res.status(404).send("Not Found");
  }
  listData.splice(index, 1);
  res.send("Item deleted");
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
