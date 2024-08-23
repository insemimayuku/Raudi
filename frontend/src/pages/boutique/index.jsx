import api from "../../utils/api";
import { useEffect, useState } from "react";
import Vehicule from "../../components/Vehicule";
export default function Boutique() {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = new api();
      data = await data.getallvehicles();
      console.log(data);
      setVehicles(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nos Véhicules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {vehicles.length > 0
              ? vehicles.map((vehicle) => (
                  <Vehicule
                    key={vehicle.id}
                    id={vehicle.id}
                    description={vehicle.description}
                    marque={vehicle.marque}
                    modele={vehicle.modele}
                    longeur={vehicle.longeur}
                    largeur={vehicle.largeur}
                    nombre_de_portes={vehicle.nombre_de_portes}
                    nombre_de_places={vehicle.nombre_de_places}
                    type_decarburant={vehicle.type_decarburant}
                    annee={vehicle.annee}
                    prix={vehicle.prix}
                    image={vehicle.image}
                  />
                ))
              : "Oops nous disposons pas de vehicule actuellement ..."}
          </div>
        </div>
      </section>
    </>
  );
}
