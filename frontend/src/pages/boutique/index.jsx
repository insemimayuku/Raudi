import api from "../../utils/api";
import { useEffect, useState } from "react";
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
                  <div
                    key={vehicle.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                      <p className="text-gray-700">{vehicle.description}</p>
                      <p className="text-gray-700">{vehicle.price}</p>
                    </div>
                  </div>
                ))
              : "Oops nous disposons pas de vehicule actuellement ..."}
          </div>
        </div>
      </section>
    </>
  );
}
