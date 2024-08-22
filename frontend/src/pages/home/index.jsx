import mainImage from "../../assets/img/main.jpg";

export default function Home() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/path-to-car-image-1.jpg"
                alt="Modèle 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Raudi Modèle X</h3>
                <p className="text-gray-700 mb-4">
                  Vivez une vitesse et un luxe inégalés avec la Raudi Modèle X.
                </p>
                <a href="#" className="text-red-600 font-bold">
                  En savoir plus &rarr;
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/path-to-car-image-2.jpg"
                alt="Modèle 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Raudi Modèle Y</h3>
                <p className="text-gray-700 mb-4">
                  Le mélange parfait de puissance et d'efficacité dans la Raudi
                  Modèle Y.
                </p>
                <a href="#" className="text-red-600 font-bold">
                  En savoir plus &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
