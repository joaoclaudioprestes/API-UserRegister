import express, { Application } from "express";
import { userRoute } from "./routes/users.routes";
import cors from "cors";

class App {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
    this.config();
    this.routes();
    this.listen();
  }

  config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  routes(): void {
    this.app.use("/users", userRoute);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const app = new App();
