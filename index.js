const server = require("./api/server");
//const express = require("express");

const port = 9000;

// START YOUR SERVER HERE
server.listen(port, () => {
  console.log(`Server running at ${port}`);
});

// server.get("/", (req, res) => {
//   res.send("Hello");
// });

// server.use(express.json());

// let id = 0;
// let getId = () => ++id; // id'leri otomatik artıran helper function(yardımcı fonskiyon)

// let users = [
//   {
//     id: getId(),
//     name: "Jane Doe",
//     bio: "Having fun",
//   },
//   {
//     id: getId(),
//     name: "Ali Veli",
//     bio: "feels curious",
//   },
// ];

// server.get("/api/users", (req, res) => {
//   res.status(200).json(users); // 200 "OK" demek
// });

// server.get("/api/users/:id", (req, res) => {
//   res.status(200).json(users.find((user) => user.id == req.params.id));
// });

// server.post("/api/users", (req, res) => {
//   users.push({ id: getId(), name: req.body.name, bio: req.body.bio });
//   res.status(201).json(users);
// });

// server.put("/api/users/:id", (req, res) => {
//   users = users.map((user) =>
//     user.id == req.params.id
//       ? { ...user, name: req.body.name, bio: req.body.bio }
//       : user
//   );
//   res.status(200).json(users);
// });

// server.delete("/api/users/:id", (req, res) => {
//   users = users.filter((user) => user.id != req.params.id);
//   res.status(200).json(users);
// });
