import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import { Whatsapp } from "@/icons";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 transform -skew-y-3 bg-gradient-to-t from-blue-50 to-white" />
      <Nav />
      <div className="container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-32 relative overflow-hidden">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Páginas web a tu <span className="text-blue-600">medida</span>
          </h1>
          <p className="text-lg md:text-2xl md:leading-relaxed font-medium text-gray-500 lg:w-2/3 mx-auto">
            Dale a tu negocio la presentación que se merece, con tiempos de
            carga extremadamente cortos y a un precio accesible
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-24">
          <a
            href="https://api.whatsapp.com/send?phone=529999943965&text=Hola! estoy interesad@ en una página web, me podrías dar más información?"
            target="_blank"
            className="transition inline-flex justify-center items-center space-x-2 border-4 font-semibold focus:outline-none px-6 py-3 leading-6 rounded border-blue-300 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
          >
            <span>Solicitar</span>
            <Whatsapp className="opacity-50" />
          </a>
          <a
            href="#portafolio"
            className="transition inline-flex justify-center items-center space-x-2 border-4 font-semibold focus:outline-none px-6 py-3 leading-6 rounded border-gray-400 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-50 active:bg-gray-700 active:border-gray-700"
          >
            <span>Ver portafolio</span>
          </a>
        </div>
        <div className="relative lg:mx-40 lg:flex lg:justify-center lg:items-center ring-1 ring-blue-100">
          <div className="absolute rounded-full top-0 left-0 w-48 h-48 bg-blue-200 bg-opacity-50 -mt-12 -ml-20"></div>
          <div className="absolute rounded-xl top-0 right-0 w-32 h-32 bg-green-200 bg-opacity-50 -mt-20 -mr-16 transform rotate-3"></div>
          <div className="absolute rounded-full bottom-0 right-0 w-40 h-40 bg-gray-200 bg-opacity-50 -mb-10 -mr-16"></div>
          <div className="absolute rounded-xl bottom-0 left-0 w-20 h-20 bg-red-200 bg-opacity-50 -mb-16 -ml-12 transform -rotate-12"></div>
          <Image
            src="/img/web2go.webp"
            alt="Un escritorio con una laptop y un monitor"
            priority
            width={500}
            height={500}
            className="relative rounded-lg mx-auto shadow-lg border-8 border-white border-opacity-20 w-full"
          />
        </div>
      </div>
    </section>
  );
}
