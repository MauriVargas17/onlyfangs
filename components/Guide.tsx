import Image from "next/image";
import React from "react";
import { DEPARTAMENTOS } from "@/constants";
import Link from "next/link";

const Manuals = () => {
  const handleButtonClick = (option: string) => {
    // Implement the logic for button click action here
    console.log(`Button clicked for ${option}`);
  };

  return (
    <section className="flexCenter flex-col relative">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Empresa Comprometida
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Diagrama Jerárquico
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            La empresa se divide en 6 departamentos principales: Ejecutivo,
            Finanzas, Operaciones, Tecnología, Marketing y Legal. Nuestras
            cabezas son: Alejandra, Sebastian, Ignacio, Rene, Ian, Samuel y
            Mauricio.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>

      {/* Manuales Section */}
      <div className="flexCenter max-container relative w-full">
        <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] mb-6">Manuales</h2>

        {/* Buttons for Funciones */}
        <div className="absolute top-[120%] left-1/4 bg-white py-6 pl-5 pr-7 gap-3 rounded-3xl border shadow-md">
          <h3 className="bold-18 text-gray-20 mb-2">Funciones</h3>
          {DEPARTAMENTOS.map((departamento, index) => (
            <h5 key={index} className="regular-16 text-gray-30 mb-2">
              <a
                href={departamento.funcionLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {departamento.departamento}
              </a>
            </h5>
          ))}
        </div>

        {/* Buttons for Actividades */}
        <div className="absolute top-[120%] left-2/4 bg-white py-6 pl-5 pr-7 gap-3 rounded-3xl border shadow-md">
          <h3 className="bold-18 text-gray-20 mb-2">Actividades</h3>
          {DEPARTAMENTOS.map((departamento, index) => (
            <h5 key={index} className="regular-16 text-gray-30 mb-2">
              <a
                href={departamento.actividadLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {departamento.departamento}
              </a>
            </h5>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manuals;
