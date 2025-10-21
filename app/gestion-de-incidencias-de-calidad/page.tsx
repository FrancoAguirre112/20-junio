// /app/notificacion-eventos-adversos/page.tsx

// 1. Make sure to import your form component from its correct location
import { QualityIncidentForm } from "@/components/forms/QualityIncidentForm";

export default function EventosAdversosPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="mt-20">
        {/* --- Hero Banner Section --- */}
        <header className="bg-main-500 py-20 text-white">
          <div className="relative mx-auto px-4 max-w-4xl text-center">
            <h1 className="font-bold text-4xl md:text-5xl">
              Notificación de Eventos Adversos
            </h1>
            <p className="mt-4 text-gray-100 text-lg">
              Todos podemos desempeñar un papel importante en la supervisión de
              la seguridad de los productos terapéuticos.
            </p>
          </div>
        </header>

        {/* --- Main Content Section --- */}
        <div className="space-y-12 mx-auto px-4 py-16 max-w-4xl">
          {/* --- Informational Text Section --- */}
          <section className="space-y-4 text-gray-700 leading-relaxed">
            <h2 className="font-bold text-gray-800 text-3xl">
              Descripción general de los eventos adversos
            </h2>
            <p>
              Los <strong>eventos adversos</strong> son sucesos no deseados y a
              veces dañinos asociados con el uso de un medicamento, vacuna o
              dispositivo médico (conocidos colectivamente como bienes
              terapéuticos). Los eventos adversos incluyen efectos secundarios
              de medicamentos y vacunas, y problemas o incidentes relacionados
              con dispositivos médicos.
            </p>
            <p>
              Ejemplos de eventos adversos son cualquier signo, síntoma o
              enfermedad desfavorable e involuntario asociado con el uso de un
              bien terapéutico. Un hallazgo de laboratorio anormal podría ser un
              ejemplo de un signo desfavorable e intencionado.
            </p>
            <p>
              En el caso de dispositivos médicos, un evento adverso también
              puede ser un problema o incidente que haya causado o pueda causar
              daño a pacientes, cuidadores, profesionales de la salud u otras
              personas. Estos pueden incluir &apos;casi accidentes&apos; –
              eventos que podrían haber provocado una muerte o lesiones graves.
              Es posible que la intervención oportuna de un profesional de la
              salud haya evitado un evento adverso.
            </p>
            <p>
              Es importante destacar que un evento adverso no siempre es causado
              por el bien terapéutico en sí. Podría ser el resultado de una
              interacción incorrecta del usuario u otras circunstancias, como
              dos dispositivos que funcionan correctamente y que no funcionan
              según lo previsto cuando se usan en combinación. La ocurrencia de
              un evento adverso no significa necesariamente que haya algo malo
              con el bien terapéutico.
            </p>
          </section>

          {/* --- Form Section --- */}
          <section className="mx-auto pt-8 max-w-2xl">
            <QualityIncidentForm />
          </section>
        </div>
      </main>
    </div>
  );
}
