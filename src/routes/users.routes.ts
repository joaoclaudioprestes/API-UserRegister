import { Router, Request, Response } from "express";
import { UserService } from "../services/users.services";

const userService = new UserService();

export const userRoute = Router();

userRoute.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

userRoute.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await userService.create({ name, email });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

userRoute.get("/all", async (req: Request, res: Response) => {
  try {
    const users = await userService.findAll();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

userRoute.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.delete(id);
    res.status(204);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});
