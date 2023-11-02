import { Whatsapp, Logo } from "@/icons";
import React from "react";

export default function Nav() {
  return (
    <header className="flex flex-none items-center py-10 relative">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 container xl:max-w-6xl mx-auto px-4 lg:px-10">
        <div className="flex items-center space-x-2 text-lg font-bold text-gray-800">
          <Logo />
          <span className="flex items-center">
            Web
            <span className="inline-block text-blue-600 text-4xl">2</span>
            Go
          </span>
        </div>
        <nav className="space-x-4 sm:space-x-6">
          <a
            href="#portafolio"
            className="text-sm font-semibold text-gray-600 hover:text-gray-500"
          >
            <span>Portafolio</span>
          </a>
          <a
            href="#beneficios"
            className="text-sm font-semibold text-gray-600 hover:text-gray-500"
          >
            <span>Beneficios</span>
          </a>
          <a
            href="#precio"
            className="text-sm font-semibold text-gray-600 hover:text-gray-500"
          >
            <span>Precio</span>
          </a>
        </nav>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=529999943965&text=Hola! estoy interesad@ en una página web, me podrías dar más información?"
            target="_blank"
            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200 transition-all duration-300"
          >
            <Whatsapp className="w-5 h-5" />
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </header>
  );
}
