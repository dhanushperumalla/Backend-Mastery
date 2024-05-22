import Express from "express";

const app = Express();
const port = 3000;

app.use(Express.json());

let listData = [];

let nextId = 1;

// app.get("/hero", (req, res) => {
//   res.send("Hello Dhanush");
// });

app.post("/test", (req, res) => {
  const { name1, price } = req.body;
  const newItem = { id: nextId++, name1, price };
  listData.push(newItem);
  res.status(201).send(listData);
});

app.listen(port, () => {
  console.log("listening on port : " + port);
});
