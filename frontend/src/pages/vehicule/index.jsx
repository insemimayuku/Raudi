import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";
export default function Vehicule() {
  const [vehicle, setVehicle] = useState({});
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      let data = new api();
      data = await data.getvehicle(id);
      console.log(data);
      setVehicle(data);
      /* {
        "id": 1,
        "description": "Vivez une vitesse et un luxe inégalés avec la Raudi Modèle R1.",
        "marque": "Raudi",
        "modele": "R1",
        "longeur": 4.5,
        "largeur": 2.2,
        "nombre_de_portes": 5,
        "nombre_de_places": 5,
        "type_de_carburant": "HYBRID",
        "annee": 2023,
        "prix": 100000,
        "image": "https://cdn.midjourney.com/71c5f3ad-966a-47a7-85f9-0f8e858990c8/0_3.png",
        "vehicule_options": [
            {
                "id": 1,
                "vehiculeId": 1,
                "optionName": "climatisation",
                "prix": 500
            }
        ]
    } */
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100">
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={vehicle.image}
              alt={vehicle.modele}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">
              {vehicle.marque} {vehicle.modele}
            </h2>
            <p className="text-lg text-gray-700 mb-4">{vehicle.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold">Caractéristiques</h3>
                <ul className="text-gray-700">
                  <li>Longeur: {vehicle.longeur} m</li>
                  <li>Largeur: {vehicle.largeur} m</li>
                  <li>Nombre de portes: {vehicle.nombre_de_portes}</li>
                  <li>Nombre de places: {vehicle.nombre_de_places}</li>
                  <li>Type de carburant: {vehicle.type_de_carburant}</li>
                  <li>Année: {vehicle.annee}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">Options</h3>
                <ul className="text-gray-700">
                  {vehicle.vehicule_options &&
                    vehicle.vehicule_options.map((option) => (
                      <li key={option.id}>
                        {option.optionName} - {option.prix} €
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold">Prix: {vehicle.prix} €</h3>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Acheter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
