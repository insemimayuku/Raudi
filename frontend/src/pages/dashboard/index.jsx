/* import React, { useEffect } from "react";
import { useAuth } from "../../Provider/AuthProvider"; // Adjust import path as needed
import { Navigate } from "react-router-dom" */ export default function Dashboard() {
  /*   const { user } = useAuth(); // Extract the user from context

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  } */

  return (
    <div>
      <h1>Bienvenue sur votre espace Admin</h1>
    </div>
  );
}
