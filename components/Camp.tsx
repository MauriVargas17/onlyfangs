import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

interface MissionVisionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  scope: string;
  objectives: string;
}

const MissionVisionSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
  scope,
  objectives,
}: MissionVisionProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl text-black`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-black">{title}</h4>
            <p className="regular-14 text-black">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>

        {/* Additional sections for Alcances and Objetivos */}
        <div className="mt-4">
          <h4 className="bold-16 text-black">Alcances:</h4>
          <p className="regular-14 text-black">{scope}</p>
        </div>

        <div className="mt-4">
          <h4 className="bold-16 text-black">Objetivos:</h4>
          <p className="regular-14 text-black">{objectives}</p>
        </div>
      </div>
    </div>
  );
};

const MissionVision = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 text-black">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
        {/* Quienes Somos (Who We Are) Section */}
        <MissionVisionSite
          backgroundImage="bg-bg-img-1"
          title="Misión"
          subtitle="Facilitar la vida de los amantes de los animales al proporcionar una plataforma centralizada y confiable que simplifica el acceso a servicios veterinarios, peluquerías y guarderías, promoviendo la salud y el bienestar de las mascotas.
           Nos comprometemos a conectar de manera eficiente a los dueños de mascotas con proveedores de servicios de calidad, ofreciendo comodidad y tranquilidad en cada reserva."
          peopleJoined="Nuestros socios"
          scope="Cobertura Nacional e Internacional, Diversificación de Servicios, Alianzas Estratégicas"
          objectives="Mejora Continua de Servicios, Expansión Geográfica, Sostenibilidad y Responsabilidad Social"
        />

        {/* Misión (Mission) Section */}
        <MissionVisionSite
          backgroundImage="bg-bg-img-2"
          title="Visión"
          subtitle="Ser la plataforma líder a nivel mundial que transforma la forma en que las personas cuidan de sus mascotas. Aspiramos a construir una comunidad donde los amantes de los animales encuentren servicios personalizados, tecnología innovadora y una experiencia integral, 
          contribuyendo así a una vida más saludable y feliz para todas las mascotas. Nos esforzamos por ser pioneros en la evolución del cuidado animal, marcando el estándar de excelencia en el sector."
          peopleJoined="Nuestros socios"
          scope="Detalles sobre la misión y propósito de la organización."
          objectives="Metas y actividades específicas para cumplir con nuestra misión."
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>¿Quienes Somos?</strong> Una solución para tus mascotas
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Somos centralizadores de todos los servicios relacionados con tus
            mascotas, procurando facilitar tu acceso a la información, reservas
            y obtención de servicios y productos de una manera ágil y segura.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
