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
async function checkAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
}

export { GenerateToken, checkAuth };
