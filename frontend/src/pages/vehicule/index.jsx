import { Routes, Route, useParams } from "react-router-dom";

export default function Vehicule() {
  let { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <h1>Single Vehicule</h1>
    </div>
  );
}
