import { useState, useEffect } from "react";
import mainImage from "../../assets/img/main.jpg";
import api from "../../utils/api";

export default function Home() {
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
    <div className="bg-gray-100 text-gray-900">
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white relative z-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Bienvenue chez Raudi
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Conduisez vers l'avenir avec puissance et luxe
          </p>
          <a
            href="#models"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Explorez Nos Modèles
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">À propos de Raudi</h2>
          <p className="text-lg text-gray-700">
            Chez Raudi, nous nous engageons à concevoir des véhicules qui
            allient performance, innovation et luxe. Nos designs avant-gardistes
            et notre excellence en ingénierie garantissent que chaque trajet est
            une expérience inoubliable.
          </p>
        </div>
      </section>

      <section id="models" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Modèles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {vehicles.length > 0 ? (
              vehicles.map((vehicle) => (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.modele}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {vehicle.marque} {vehicle.modele}
                    </h3>
                    <p className="text-gray-700 mb-4">{vehicle.description}</p>
                    <a href="#" className="text-red-600 font-bold">
                      En savoir plus &rarr;
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <h1>Oops nous disposons pas de vehicule actuellement ...</h1>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
