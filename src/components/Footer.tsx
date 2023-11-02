import { Email, Whatsapp } from "@/icons";
import React from "react";

export default function Footer() {
  return (
    <footer id="page-footer" className="bg-gradient-to-t from-blue-50 to-white">
      <div className="flex flex-col items-center md:flex-row md:justify-between space-y-6 md:space-y-0 text-center md:text-left text-sm container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <nav className="flex gap-4 space-x-2 sm:space-x-4">
          <a
            href="mailto:efrachaga@gmail.com"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-500"
          >
            <Email />
            Correo electrónico
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=529999943965"
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-500"
          >
            <Whatsapp />
            WhatsApp
          </a>
        </nav>
        <div className="text-gray-500">
          <span className="font-medium">
            Web<span className="text-blue-600">2</span>Go
          </span>{" "}
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
