import express, { Request, Response } from "express";
import { pool } from "pg";
const app = express();
const port = 5000;

const pool: any = new pool({
  connectionString: `postgresql://neondb_owner:npg_4EVNzf1WMApb@ep-crimson-bar-a1e2850b-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`,
});



// parser
app.use(express.json());
// form data send korar jonno eita
// app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello shohan!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.status(201).json({
    success: true,
    message: "API is working",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
