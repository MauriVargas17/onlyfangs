import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Control de Calidad y Cierre
          </h2>
          <p className="regular-16 text-gray-10">Costos y Calidad</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <a
              href="https://docs.google.com/document/d/1Pl1haX76_SGOE4CF9cwBPTm4eHaBaXIi7zM4QC7kI1c/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="button"
                title="Evaluación de Costos"
                icon="/money.png"
                variant="btn_white"
                full
              />
            </a>
            <a
              href="https://docs.google.com/document/d/1l79IEvYxk_pVxb73R8X5oNQWFvRYpU_r6-FWltxIQTM/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="button"
                title="Control de Calidad"
                icon="/good.png"
                variant="btn_dark_green_outline"
                full
              />
            </a>
          </div>
          <p className="regular-16 text-gray-10">Cierre</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <Button
                type="button"
                title="Conclusiones y Recomendaciones"
                icon="/book.png"
                variant="btn_white"
                full
              />
            </a>
            <a
              href="https://docs.google.com/document/d/1W4R1XB4uFf-jbXyTJS3i_2k2o9HXFE9rmk5TRJaNR_o/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="button"
                title="Plan básico de Sostenibilidad"
                icon="/idea.png"
                variant="btn_dark_green_outline"
                full
              />
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
