import { Router } from "express";

const router = Router();

router.get("/teste", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
