import { Device, Logo, World } from "@/icons";
import React from "react";

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white relative">
      <div className="absolute inset-0 transform skew-y-3 bg-gradient-to-t from-blue-50 to-white" />
      <div className="relative container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-32 space-y-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Beneficios</h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Con Web2Go tendrás un excelente trato, la mejor atención postventa y
            un producto que le encantará a tus usuarios.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
          <div className="py-5 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 ml-3 mb-12 relative">
              <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-45 bg-blue-300"></div>
              <div className="absolute inset-0 rounded-3xl -m-2 transform bg-blue-600 bg-opacity-75"></div>
              <Logo className="text-white relative w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold mb-2">Tecnologías</h4>
            <p className="leading-relaxed text-gray-600 text-left">
              Utilizamos tecnologías de primer nivel, lo cual se refleja en una
              página web súper veloz, imágenes optimizadas y una experiencia de
              usuario como ninguna otra.
            </p>
          </div>
          <div className="py-5 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 ml-3 mb-12 relative">
              <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-45 bg-blue-300"></div>
              <div className="absolute inset-0 rounded-3xl -m-2 transform bg-blue-600 bg-opacity-75"></div>
              <Device className="text-white relative w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold mb-2">Cualquier dispositivo</h4>
            <p className="leading-relaxed text-gray-600 text-left">
              Se entregará un diseño responsivo para que tu público visualice tu
              página ya sea en celular, tableta ó computadora de escritorio.
            </p>
          </div>
          <div className="py-5 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 ml-3 mb-12 relative">
              <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-45 bg-blue-300"></div>
              <div className="absolute inset-0 rounded-3xl -m-2 transform bg-blue-600 bg-opacity-75"></div>
              <World className="text-white relative w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold mb-2">Optimización de búsqueda</h4>
            <p className="leading-relaxed text-gray-600 text-left">
              El producto final está optimizado de tal manera que el motor de
              búsqueda de la web localizará y entregará tu página con mayor
              facilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
