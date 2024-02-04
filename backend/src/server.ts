import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { foods, sample_users, tags } from "./data";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

app.post("/api/users/login", (req, res) => {
  const { email, password } = req.body;
  const user = sample_users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.send(generateTokenResponse(user));
  } else {
    res.status(400).send('User email or password not valid')
  }
});

const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.emil,
      isAdmin: user.isAdmin,
    },
    "UserToken",
    { expiresIn: "30d" }
  );
  user.token = token;
  return user;
};

app.get("/api/foods", (req, res) => {
  res.send(foods);
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const foods_result = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(foods_result);
});

app.get("/api/foods/tags", (req, res) => {
  res.send(tags);
});

app.get("/api/foods/tags/:tag", (req, res) => {
  const searchTag = req.params.tag;
  const foods_result = foods.filter((food) => food.tags?.includes(searchTag));
  res.send(foods_result);
});

app.get("/api/foods/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const food = foods.find((food) => food.id == foodId);
  res.send(food);
});

const port = 3000;

app.listen(port, () => {
  console.log("Website served on localhost:" + port);
});
