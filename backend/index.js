import express from "express";
import cors from "cors";
import connect_DB from "./config/database.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import visitorRoute from "./routes/visitorRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.disable("x-powered-by");
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/visitor", visitorRoute);

const PORT = 5000

connect_DB()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`server is connected to http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("something went wrong", error);
    }
  })
  .catch((err) => {
    throw new Error(err);
  });
