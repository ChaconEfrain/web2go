import { Building, Cutlery, Sports, Tax } from "@/icons";
import React from "react";

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-white">
      <div className="space-y-16 container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Nuestro trabajo
          </h2>
          <h3 className="text-lg md:text-2xl md:leading-relaxed font-medium text-gray-500 lg:w-2/3 mx-auto">
            No lo pienses más y colaboremos!
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://www.agrtaxesandinsurances.com/en"
            target="_blank"
            className="p-10 bg-gradient-to-t from-blue-50 to-white border-2 border-blue-50 hover:border-blue-100 transition-all duration-300 rounded-2xl text-center sm:col-span-2 lg:col-span-1"
          >
            <Tax className="w-12 h-12 text-blue-500 mb-5 mx-auto" />
            <h4 className="text-lg font-bold mb-2">AGR Taxes and insurances</h4>
            <p className="leading-relaxed text-gray-500 text-sm text-left">
              AGR es un vendedor de seguros y contador independiente en el área
              de St Louis MO e Illinois, EU. Gracias a su nueva página web podrá
              compartir sus servicios a prospectos en español ó inglés, al igual
              que recibirá correos automatizados por medio de un formulario.
            </p>
          </a>
          <a
            href="https://fiberpole.vercel.app/"
            target="_blank"
            className="p-10 bg-gradient-to-t from-blue-50 to-white border-2 border-blue-50 hover:border-blue-100 transition-all duration-300 rounded-2xl text-center"
          >
            <Building className="w-12 h-12 text-blue-500 mb-5 mx-auto" />
            <h4 className="text-lg font-bold mb-2">Fiberpole</h4>
            <p className="leading-relaxed text-gray-500 text-sm text-left">
              Fiberpole viste tu hogar ó espacios públicos con elementos a base
              de fibra de vidrio. La página tiene un diseño minimalista con alto
              contenido gráfico y descriptivo.
            </p>
          </a>
          <a
            href="https://www.lacanastayucateca.com/"
            target="_blank"
            className="p-10 bg-gradient-to-t from-blue-50 to-white border-2 border-blue-50 hover:border-blue-100 transition-all duration-300 rounded-2xl text-center"
          >
            <Cutlery className="w-12 h-12 text-blue-500 mb-5 mx-auto" />
            <h4 className="text-lg font-bold mb-2">La canasta yucateca</h4>
            <p className="leading-relaxed text-gray-500 text-sm text-left">
              La canasta yucateca es un negocio de tacos de canasta ubicado en
              Mérida, Yucatán. Para el diseño de la página se optó por algo
              sencillo con colores alegres y característicos de la marca.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
