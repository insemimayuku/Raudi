import { Link } from "react-router-dom";
export default function Vehicule({
  id,
  description,
  marque,
  modele,
  longeur,
  largeur,
  nombre_de_portes,
  nombre_de_places,
  type_decarburant,
  annee,
  prix,
  image,
}) {
  return (
    <Link to={"/vehicule/" + id} className="text-red-600 font-bold">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={modele} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            {marque} {modele}
          </h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <Link to={"/vehicule/" + id} className="text-red-600 font-bold">
            En savoir plus &rarr;
          </Link>
        </div>
      </div>
    </Link>
  );
}
