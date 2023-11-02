import { Checks, Whatsapp } from "@/icons";
import React from "react";

export default function Price() {
  return (
    <section id="precio" className="bg-white">
      <div className="space-y-10 container xl:max-w-4xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Único costo</h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Excelentes resultados y servicio postventa, por un sólo pago.
          </h3>
        </div>
        <div className="rounded-lg shadow-sm bg-blue-50 flex flex-col border-2 border-blue-300 hover:border-blue-400 relative lg:w-96 lg:mx-auto">
          <div className="p-5 lg:p-6 text-center bg-white rounded-t-lg">
            <span className="inline-flex space-x-1 items-center text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-blue-200 bg-opacity-50 text-blue-600 rounded-full mb-4">
              <span>Top tier</span>
            </span>
            <div className="mb-1">
              <span className="text-3xl lg:text-4xl font-extrabold">
                $2500 MXN
              </span>
            </div>
            <p className="text-gray-600 text-sm font-medium">
              Solicítalo ahora!
            </p>
          </div>
          <div className="p-5 lg:p-6 space-y-5 lg:space-y-6 text-gray-600 font-medium flex-grow">
            <ul className="space-y-4 text-sm lg:text-base w-fit mx-auto">
              <li className="flex items-center justify-center gap-2">
                <Checks className="text-green-500" />
                <span className="grow">Servicio postventa</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Checks className="text-green-500" />
                <span className="grow">Atención personalizada</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Checks className="text-green-500" />
                <span className="grow">Configuración de dominio</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Checks className="text-green-500" />
                <span className="grow">Entrega en menos de 3 semanas</span>
              </li>
            </ul>
          </div>
          <div className="px-5 pb-5 lg:px-6 lg:pb-6">
            <a
              href="https://api.whatsapp.com/send?phone=529999943965&text=Hola! estoy interesad@ en una página web, me podrías dar más información?"
              target="_blank"
              className="w-full transition inline-flex justify-center items-center space-x-2 border-4 font-semibold focus:outline-none px-6 py-3 leading-6 rounded border-blue-300 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
            >
              <span>Solicitar</span>
              <Whatsapp className="opacity-50" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
