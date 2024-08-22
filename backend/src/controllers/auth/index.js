import jwt from "jsonwebtoken";

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({
    message: "Unauthorized",
  });
}

function GenerateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
}
export { checkAuth, GenerateToken };
