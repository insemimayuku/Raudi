import jwt from "jsonwebtoken";
import db from "../database/index.js";

async function GenerateToken(userId) {
  const conn = new db();

  try {
    const data = await conn.getUserById(userId);
    if (data) {
      const token = jwt.sign(
        {
          id: data.id,
          email: data.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return token;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
}
export { GenerateToken };
