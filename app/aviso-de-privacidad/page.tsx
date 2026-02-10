import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function AvisoDePrivacidad() {
  return (
    <div className="mx-auto px-4 py-12 max-w-4xl container">
      <h1 className="mb-8 font-bold text-primary text-3xl text-center">
        Aviso de Privacidad
      </h1>

      <Card className="shadow-lg">
        <CardContent className="space-y-6 p-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              En <strong>20 de Junio</strong> protegemos su privacidad y
              tratamos sus datos personales de forma responsable, conforme a la
              Ley Nº 25.326 de Protección de Datos Personales y la normativa
              vigente en la República Argentina.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">
              ¿Qué datos recopilamos?
            </h2>
            <p>
              Podemos recopilar datos identificatorios y de contacto (como
              nombre, teléfono, correo electrónico, domicilio) y otra
              información que usted nos proporcione voluntariamente al realizar
              una consulta, solicitar un servicio o mantener una relación
              comercial con nosotros.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">
              ¿Para qué usamos sus datos?
            </h2>
            <p>Utilizamos sus datos personales para:</p>
            <ul className="space-y-1 mt-2 pl-5 list-disc">
              <li>Responder consultas y solicitudes</li>
              <li>Brindar información sobre productos y servicios</li>
              <li>Gestionar relaciones comerciales y contractuales</li>
              <li>Cumplir obligaciones legales</li>
            </ul>
            <p className="mt-2">
              No utilizamos sus datos para fines distintos de aquellos para los
              que fueron recolectados.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">
              ¿Con quién compartimos sus datos?
            </h2>
            <p>Sus datos podrán ser compartidos únicamente con:</p>
            <ul className="space-y-1 mt-2 pl-5 list-disc">
              <li>
                Proveedores que nos prestan servicios y que están obligados a
                mantener confidencialidad
              </li>
              <li>
                Autoridades públicas, cuando así lo exija la ley o una orden
                judicial
              </li>
            </ul>
            <p className="mt-2 font-medium">
              20 de Junio no vende ni comercializa datos personales.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">
              ¿Cómo protegemos sus datos?
            </h2>
            <p>
              Adoptamos medidas razonables de seguridad para evitar accesos no
              autorizados, pérdidas o usos indebidos de su información.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">
              ¿Cuánto tiempo conservamos los datos?
            </h2>
            <p>
              Los datos se conservan solo durante el tiempo necesario para
              cumplir con la finalidad para la cual fueron obtenidos o según lo
              exija la ley.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">
              Sus derechos
            </h2>
            <p>Usted puede:</p>
            <ul className="space-y-1 mt-2 pl-5 list-disc">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar su rectificación, actualización o supresión</li>
            </ul>
            <p className="mt-2">
              El derecho de acceso puede ejercerse gratuitamente cada seis
              meses, salvo que se acredite un interés legítimo.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">
              Autoridad de control
            </h2>
            <p>
              La <strong>Agencia de Acceso a la Información Pública</strong> es
              el organismo de control de la Ley 25.326 y recibe denuncias y
              reclamos relacionados con el tratamiento de datos personales.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">
              Menores de edad
            </h2>
            <p>
              No recopilamos intencionalmente datos personales de menores sin
              autorización de sus responsables legales.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">
              Cambios en este aviso
            </h2>
            <p>
              Este Aviso de Privacidad puede ser actualizado. Las modificaciones
              estarán disponibles por nuestros medios habituales.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
