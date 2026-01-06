import express, { Request, Response } from "express";
import { Pool } from "pg";
const app = express();
const port = 5000;
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const pool: any = new Pool({
  connectionString: `${process.env.CONNECTION_STR}`,
});

const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    age INT,
    phone VARCHAR(18),
    address TEXT,
    create_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `);

  await pool.query(`
      CREATE TABle IF NOT EXISTS todos(
      id SERIAL PRIMARY KEY ,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      title VARCHAR(200),
      description TEXT,
      completed BOOLEAN DEFAULT FALSE,
      due_date DATE,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at  TIMESTAMP DEFAULT NOW()
      )
      `);
};

initDB();

// parser
app.use(express.json());
// form data send korar jonno eita
// app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello shohan!");
});

app.post("/users", async (req: Request, res: Response) => {
  // console.log(req.body);
  const { name, email, password } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *`,
      [name, email, password]
    );
    res.status(201).json({
      success: true,
      message: "data inserted successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

  // res.status(201).json({
  //   success: true,
  //   message: "API is working",
  // });
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);

    res.status(200).json({
      success: true,
      message: "Get all users",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE ID = $1`, [
      req.params.id,
    ]);

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User fetched",
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.put("/users/:id", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const result = await pool.query(
      `UPDATE users SET name=$1, email=$2, password= $3 WHERE id=$4 RETURNING *`,
      [name, email, password, req.params.id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`DELETE FROM users WHERE id = $1`, [
      req.params.id,
    ]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: result.rows[0], 
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
