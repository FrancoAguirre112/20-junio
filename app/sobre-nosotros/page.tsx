// /app/sobre-nosotros/page.tsx

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShieldCheck, Target, Eye, Gem, Leaf } from "lucide-react";

const valuesData = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Ética y transparencia",
    description:
      "Actuamos con integridad en cada decisión y proceso. Promovemos prácticas comerciales honestas, transparentes y responsables, garantizando el cumplimiento de las normas.",
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Calidad y seguridad sanitaria",
    description:
      "Seleccionamos y distribuimos productos con respaldo científico. Nuestra prioridad es asegurar la seguridad, eficacia y trazabilidad de cada dispositivo.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.456-2.456L12.75 18l1.197-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.197a3.375 3.375 0 002.456 2.456L20.25 18l-1.197.398a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),
    title: "Innovación y excelencia operativa",
    description:
      "Evolucionamos constantemente incorporando tecnologías y procesos que optimizan la gestión logística, la trazabilidad y el servicio al cliente.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    title: "Compromiso con el cliente y con la salud",
    description:
      "Trabajamos junto a instituciones, profesionales y pacientes, brindando soluciones integrales que fortalecen la calidad de la atención y el acceso equitativo.",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Responsabilidad ambiental y sustentabilidad",
    description:
      "Diseñamos políticas orientadas al desarrollo sustentable, minimizando el impacto ambiental de nuestras operaciones y promoviendo el uso responsable de recursos.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <div className="bg-white">
      <main className="mt-20">
        {/* --- Hero Section (Unchanged) --- */}
        <header className="relative bg-main-500 py-20 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url(/assets/images/office-background.webp)",
            }}
          ></div>
          <div className="relative mx-auto px-4 max-w-4xl text-center">
            <h1 className="font-bold text-4xl md:text-5xl">Sobre Nosotros</h1>
            <p className="mt-4 text-gray-100 text-lg">
              Más de dos décadas dedicadas al servicio de la salud, ofreciendo
              soluciones tecnológicas seguras y eficientes.
            </p>
          </div>
        </header>

        {/* --- Main Content Section (Unchanged) --- */}
        <div className="space-y-12 mx-auto px-4 py-16 max-w-4xl">
          {/* --- Introduction Text (Unchanged) --- */}
          <section>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <strong>20 de Junio</strong> es una empresa argentina con más de
                dos décadas de trayectoria dedicada al servicio de la salud. Nos
                especializamos en la comercialización y distribución de
                productos biomédicos, ofreciendo soluciones tecnológicas
                seguras, eficientes y trazables que contribuyen a mejorar la
                calidad de vida de las personas.
              </p>
              <p>
                Somos una organización moderna, flexible y comprometida con la
                innovación, la calidad y la excelencia en cada proceso,
                impulsando el acceso a tecnologías médicas confiables y
                sostenibles para todos los pacientes del país.
              </p>
              <p>
                Desde nuestros inicios en los años ’90, hemos evolucionado
                acompañando los avances del sector y las necesidades de nuestros
                clientes. Hoy contamos con instalaciones renovadas y depósitos
                de última generación en la Ciudad de Buenos Aires, con más de
                200 m² destinados a operaciones logísticas, lo que nos permite
                garantizar una gestión ágil, segura y sustentable en todo el
                territorio nacional.
              </p>
              <p>
                En 20 de Junio trabajamos junto a fabricantes internacionales de
                reconocida trayectoria, asegurando la calidad, eficacia y
                respaldo científico de cada producto que distribuimos.
              </p>
              <p>
                Durante la última década, además de nuestro compromiso con las
                soluciones quirúrgicas integrales, hemos consolidado una
                especialización en el sector de la oftalmología, brindando
                soluciones completas al mercado público y privado mediante
                equipamiento, insumos, soporte técnico y acompañamiento
                profesional.
              </p>
              <p>
                Nuestro sistema integral de trazabilidad permite un seguimiento
                preciso desde el importador hasta el cliente final, reforzando
                la transparencia, la seguridad sanitaria y la confianza que nos
                distinguen.
              </p>
            </div>
          </section>

          {/* --- Mission & Vision Section (Unchanged) --- */}
          <section className="gap-12 grid md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-4">
                <Target className="w-8 h-8 text-main-500" />
                <h2 className="font-bold text-gray-800 text-3xl">Misión</h2>
              </div>
              <p className="mt-4 text-gray-700">
                Servir a la comunidad mediante la distribución responsable de
                medicamentos y dispositivos médicos, garantizando el acceso
                equitativo a productos seguros, eficaces y de comprobada
                calidad. Promovemos la transparencia, la trazabilidad y la
                eficiencia logística como pilares de un servicio confiable, que
                conecta a los fabricantes líderes con el sistema sanitario
                argentino, tanto en el ámbito público como privado.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-4">
                <Eye className="w-8 h-8 text-main-500" />
                <h2 className="font-bold text-gray-800 text-3xl">Visión</h2>
              </div>
              <p className="mt-4 text-gray-700">
                Transformar la distribución biomédica en una red inteligente que
                una tecnología, salud y personas para generar un impacto real en
                la vida de los pacientes.
              </p>
            </div>
          </section>

          {/* --- UPDATED: Values Section with Card Design --- */}
          <section>
            <div className="text-center">
              <h2 className="font-bold text-gray-800 text-4xl">
                Nuestros Valores
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
                Los principios que guían cada una de nuestras acciones y
                decisiones.
              </p>
            </div>

            {/* Carousel for Mobile (Visible on screens smaller than 'md') */}
            <div className="md:hidden mt-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="">
                  {valuesData.map((value, index) => (
                    <CarouselItem key={index} className="">
                      <div className="flex flex-col justify-center items-center bg-gray-50 shadow-sm p-8 rounded-lg h-full text-center">
                        <div className="flex justify-center items-center bg-sky-100 mb-4 p-2 rounded-lg w-12 h-12 text-main-500">
                          {value.icon}
                        </div>
                        <h3 className="font-semibold text-gray-800 text-xl">
                          {value.title}
                        </h3>
                        <p className="mt-2 text-gray-700">
                          {value.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-[-10px]" />
                <CarouselNext className="right-[-10px]" />
              </Carousel>
            </div>

            <div className="hidden md:flex flex-col gap-6 mt-12">
              <section className="flex justify-around">
                {/* Value 1: Ética y transparencia */}
                <div className="flex flex-col items-center bg-gray-50 shadow-sm hover:shadow-md p-8 rounded-lg max-w-[32%] text-center transition-shadow">
                  <div className="flex justify-center items-center bg-sky-100 mb-4 p-2 rounded-lg w-12 h-12 text-main-500">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xl">
                    Ética y transparencia
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Actuamos con integridad en cada decisión y proceso.
                    Promovemos prácticas comerciales honestas, transparentes y
                    responsables, garantizando el cumplimiento de las normas.
                  </p>
                </div>

                {/* Value 2: Calidad y seguridad sanitaria */}
                <div className="flex flex-col items-center bg-gray-50 shadow-sm hover:shadow-md p-8 rounded-lg max-w-[32%] text-center transition-shadow">
                  <div className="flex justify-center items-center bg-sky-100 mb-4 p-2 rounded-lg w-12 h-12 text-main-500">
                    <Gem className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xl">
                    Calidad y seguridad sanitaria
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Seleccionamos y distribuimos productos con respaldo
                    científico. Nuestra prioridad es asegurar la seguridad,
                    eficacia y trazabilidad de cada dispositivo.
                  </p>
                </div>

                {/* Value 3: Innovación y excelencia operativa */}
                <div className="flex flex-col items-center bg-gray-50 shadow-sm hover:shadow-md p-8 rounded-lg max-w-[32%] text-center transition-shadow">
                  <div className="flex justify-center items-center bg-sky-100 mb-4 p-2 rounded-lg w-12 h-12 text-main-500">
                    {/* Custom SVG for Innovation (can be replaced with a Lucide icon if preferred) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.456-2.456L12.75 18l1.197-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.197a3.375 3.375 0 002.456 2.456L20.25 18l-1.197.398a3.375 3.375 0 00-2.456 2.456z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xl">
                    Innovación y excelencia operativa
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Evolucionamos constantemente incorporando tecnologías y
                    procesos que optimizan la gestión logística, la trazabilidad
                    y el servicio al cliente.
                  </p>
                </div>
              </section>

              <section className="flex justify-around">
                {/* Value 4: Compromiso con el cliente y con la salud */}
                <div className="flex flex-col items-center bg-gray-50 shadow-sm hover:shadow-md p-8 rounded-lg max-w-[32%] text-center transition-shadow">
                  <div className="flex justify-center items-center bg-sky-100 mb-4 p-2 rounded-lg w-12 h-12 text-main-500">
                    {/* Custom SVG for Commitment (can be replaced with a Lucide icon if preferred) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xl">
                    Compromiso con el cliente y con la salud
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Trabajamos junto a instituciones, profesionales y pacientes,
                    brindando soluciones integrales que fortalecen la calidad de
                    la atención y el acceso equitativo.
                  </p>
                </div>

                {/* Value 5: Responsabilidad ambiental y sustentabilidad */}
                <div className="flex flex-col items-center bg-gray-50 shadow-sm hover:shadow-md p-8 rounded-lg max-w-[32%] text-center transition-shadow">
                  <div className="flex justify-center items-center bg-sky-100 mb-4 p-2 rounded-lg w-12 h-12 text-main-500">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xl">
                    Responsabilidad ambiental y sustentabilidad
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Diseñamos políticas orientadas al desarrollo sustentable,
                    minimizando el impacto ambiental de nuestras operaciones y
                    promoviendo el uso responsable de recursos.
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
