const express = require("express");
const dotenv = require("dotenv");
const cores = require("cors");
const app = express();
const mongoose = require("mongoose");
const UserRout = require("./Routes/usersRoutes");
const catRoutes = require("./Routes/catrouts");
const productROutes = require("./Routes/productsRoutes");
const billroutes = require("./Routes/billrouter");
const detailsRoute = require("./Routes/dashboard");
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1/CafeMangemantSystem");

app.use("/users", UserRout);
app.use("/category", catRoutes);
app.use("/products", productROutes);
app.use("/bill", billroutes);
app.use("/dashboard", detailsRoute);

app.listen(3000, (err) => {
  if (!err) {
    console.log("coneected on port 3000");
  } else {
    console.log(err, `<----the connection errr`);
  }
});
