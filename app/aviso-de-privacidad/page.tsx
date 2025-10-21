// /app/aviso-de-privacidad/page.tsx

export default function AvisoDePrivacidadPage() {
  return (
    <div className="bg-white">
      <main className="mt-20">
        {/* --- Hero Header --- */}
        <header className="bg-main-500 py-20 text-white">
          <div className="relative mx-auto px-4 max-w-4xl text-center">
            <h1 className="font-bold text-4xl md:text-5xl">
              Aviso de Privacidad
            </h1>
          </div>
        </header>

        {/* --- Main Content Section --- */}
        <div className="space-y-10 mx-auto px-4 py-16 max-w-4xl text-gray-700">
          <section className="space-y-4 text-lg leading-relaxed">
            <p>
              Respetar su derecho a la privacidad y conservar su confianza es
              importante para <strong>20 de Junio</strong>.
            </p>
            <p>
              20 de Junio se compromete a ser un administrador confiable de su
              información personal (consulte la sección `&quot;`Información
              personal`&quot;` a continuación para obtener una explicación de
              qué se considera su información personal). Recopilamos y
              utilizamos esta información personal para satisfacer sus
              expectativas cuando interactúa con nosotros y para seguir
              mejorando nuestra misión.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-bold text-gray-800 text-2xl">
              Nuestro compromiso con usted
            </h2>
            <p className="leading-relaxed">
              Nos comprometemos a ser transparentes en nuestra gestión de su
              información personal y tomamos todas las medidas razonables para
              garantizar que nuestras prácticas, procedimientos y actividades
              cumplan con todos los requisitos aplicables, incluidas todas las
              leyes de privacidad aplicables y con este Aviso de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-bold text-gray-800 text-2xl">
              ¿Qué es la información personal?
            </h2>
            <p className="leading-relaxed">
              La información personal es cualquier información relativa a una
              persona física identificada o identificable. Una persona física
              identificable es aquella cuya identidad puede determinarse,
              directa o indirectamente, en particular mediante un identificador,
              como un nombre, un número de identificación, datos de ubicación,
              un identificador en línea o uno o más factores específicos de su
              identidad física, fisiológica, genética, mental, económica,
              cultural o social.
            </p>
          </section>

          <section>
            <h2 className="mb-6 font-bold text-gray-800 text-2xl">
              ¿Qué información personal recopilamos y cómo la utilizamos?
            </h2>

            {/* --- Responsive Table Wrapper --- */}
            <div className="w-full overflow-x-auto">
              <table className="border border-gray-300 min-w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 border border-gray-300 font-semibold">
                      Finalidad y categorías de la información personal
                    </th>
                    <th className="p-4 border border-gray-300 font-semibold">
                      Base legal
                    </th>
                    <th className="p-4 border border-gray-300 font-semibold">
                      Nuestros intereses legítimos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* --- Row 1: Respuesta a solicitudes o consultas --- */}
                  <tr className="align-top">
                    <td className="p-4 border border-gray-300">
                      <p className="font-bold">
                        Respuesta a solicitudes o consultas.
                      </p>
                      <p className="mt-2">
                        Podemos utilizar la información personal que nos
                        proporciona para tomar las medidas necesarias para
                        responder a su solicitud; por ejemplo, puede enviar una
                        solicitud de información personal, consultar sobre un
                        producto. Dependiendo de su solicitud, podemos recopilar
                        su información personal de contacto (como su nombre,
                        dirección postal, número de teléfono, puesto de
                        trabajo), sus intereses y preferencias (como productos o
                        áreas de interés) y cualquier otra información personal
                        que nos proporcione voluntariamente.
                      </p>
                    </td>
                    <td className="p-4 border border-gray-300">
                      Recopilamos y procesamos su información personal para
                      estos fines basados en un interés legítimo de responder a
                      su solicitud. Si nos proporcionó información personal
                      sensible como parte de su consulta, también basaremos
                      dicho procesamiento en su consentimiento explícito. Si se
                      requiere informar, podremos procesar su información
                      personal para cumplir con nuestras obligaciones legales.
                    </td>
                    <td className="p-4 border border-gray-300">
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Entregándole nuestros productos y servicios.</li>
                        <li>
                          Realizar ventas y promociones de nuestros productos y
                          servicios.
                        </li>
                        <li>
                          Asegurarnos de que interactuamos y nos comunicamos con
                          usted de manera más eficiente.
                        </li>
                      </ul>
                    </td>
                  </tr>

                  {/* --- Row 2: Farmacovigilancia --- */}
                  <tr className="align-top">
                    <td className="p-4 border border-gray-300">
                      <p className="font-bold">
                        Seguimiento y Monitoreo de Eventos Adversos y
                        Farmacovigilancia.
                      </p>
                      <p className="mt-2">
                        Algunas secciones específicas de nuestros Sitios pueden
                        recopilar información personal relacionada con eventos
                        adversos u otras actividades de farmacovigilancia. Esta
                        información personal es fundamental para la salud
                        pública y se utilizará para la detección, evaluación,
                        comprensión y prevención de eventos adversos u otros
                        problemas médicos.
                      </p>
                    </td>
                    <td className="p-4 border border-gray-300">
                      Recopilamos y procesamos su información personal para
                      estos fines para cumplir con nuestras obligaciones
                      legales, incluyendo en ciertos casos la obligación de
                      informar la información recopilada a las autoridades
                      reguladoras.
                    </td>
                    <td className="p-4 border border-gray-300"></td>
                  </tr>

                  {/* --- Row 3: Mantenimiento de sitios web --- */}
                  <tr className="align-top">
                    <td className="p-4 border border-gray-300">
                      <p className="font-bold">
                        Para la gestión y el mantenimiento de nuestros sitios
                        web.
                      </p>
                      <p className="mt-2">
                        Utilizamos cierta información personal para proteger
                        nuestros sitios, incluyendo sitios web, sistemas de red
                        y otros activos. Esto puede incluir información personal
                        sobre su dirección IP, ubicación geográfica (cuando la
                        ley lo permita), geolocalización precisa, recursos a los
                        que ha accedido e información personal similar.
                      </p>
                    </td>
                    <td className="p-4 border border-gray-300">
                      Recopilamos esta información personal automáticamente para
                      nuestros intereses comerciales legítimos de ejecutar,
                      mantener y proteger nuestros Sitios.
                    </td>
                    <td className="p-4 border border-gray-300">
                      Garantizar que nuestros sitios sean seguros y funcionen
                      correctamente.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-bold text-gray-800 text-2xl">
              ¿Cuándo y a quién divulgamos su información personal?
            </h2>
            <p className="leading-relaxed">
              La información personal que recopilamos de usted y sobre usted
              puede ser divulgada a terceros para los fines descritos en este
              Aviso de Privacidad:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>
                a terceros que nos brindan servicios, como aquellos que atienden
                solicitudes de información personal, responden llamadas,
                administran programas o proyectos, ayudan en la investigación y
                el desarrollo, entregan anuncios u otras comunicaciones o alojan
                bases de datos o servidores,
              </li>
              <li>
                a socios comerciales que ofrecen productos o servicios
                conjuntamente con 20 de Junio,
              </li>
              <li>
                según lo requiera la ley, como a las autoridades policiales, a
                las autoridades sanitarias para informar posibles eventos
                adversos, durante inspecciones o auditorías gubernamentales,
                según lo ordenado o indicado por tribunales u otras agencias
                gubernamentales, o para cumplir con una citación u otro proceso
                legal,
              </li>
              <li>
                cuando creamos de buena fe que la divulgación es necesaria para
                proteger los derechos legales o la seguridad o integridad de
                nuestras operaciones o los Servicios, proteger su seguridad o la
                seguridad de otros, investigar un fraude, un incumplimiento de
                contrato o una violación de la ley, responder a una solicitud
                del gobierno o permitirnos buscar los recursos disponibles o
                limitar los daños que podamos sufrir, y
              </li>
              <li>
                a terceros, asesores y otras entidades en la medida que sea
                razonablemente necesario para el desarrollo o para proceder con
                la negociación o finalización de una transacción corporativa o
                comercial, incluida una reorganización, fusión, adquisición,
                empresa conjunta, venta u otra disposición de la totalidad o una
                parte de nuestro negocio, activos o acciones (incluso en
                relación con cualquier quiebra o procedimiento similar).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-bold text-gray-800 text-2xl">
              ¿Durante cuánto tiempo conservamos su información personal?
            </h2>
            <p className="leading-relaxed">
              A menos que se indique lo contrario en este Aviso de Privacidad,
              los criterios que utilizamos para decidir durante cuánto tiempo
              conservamos la información personal incluyen: (i) si necesitamos
              su información personal para ejecutar un contrato al que está
              sujeto, para responder a sus preguntas o brindarle el servicio o
              soporte requerido, (ii) si existe una obligación legal a la que
              estamos sujetos, o (iii) si la retención es aconsejable a la luz
              de nuestra posición legal (como en relación con los estatutos de
              limitaciones aplicables, litigios o investigaciones regulatorias).
              <br />
              Eliminamos la información personal cuando ya no es necesario
              conservarla para los fines descritos en este Aviso de Privacidad,
              o cuando así lo exige la legislación aplicable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-bold text-gray-800 text-2xl">
              ¿Cuándo y cómo transferimos su información personal entre países?
            </h2>
            <p className="leading-relaxed">
              Debido a la naturaleza global de nuestro negocio, su información
              personal podría ser transferida o accedida por terceros en todo el
              mundo. Por supuesto, al hacerlo, cumplimos con la legislación
              aplicable sobre transferencia de información personal entre
              países.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-bold text-gray-800 text-2xl">
              Sus derechos de privacidad
            </h2>
            <p className="mb-4 leading-relaxed">
              Usted puede tener los siguientes derechos en relación con su
              información personal, de acuerdo con las leyes de protección de
              datos aplicables:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>
                Para retirar su consentimiento en cualquier momento, si estamos
                procesando su información personal sobre la base del
                consentimiento,
              </li>
              <li>
                Para solicitar que 20 de Junio rectifique o borre su información
                personal,
              </li>
              <li>
                Para solicitar que 20 de Junio restrinja la forma en que procesa
                su información personal,
              </li>
              <li>
                Para oponerse a la forma en que 20 de Junio procesa su
                información personal,
              </li>
              <li>
                Cuando nos lo solicite, para transferir su información personal
                ya sea a usted o a otra persona o entidad, y
              </li>
              <li>
                El derecho a expresar su punto de vista en caso de que se tome
                una decisión individual por medios automatizados que tenga un
                impacto significativo sobre usted y a solicitar que dicha
                decisión automatizada sea revisada por un humano.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Si desea ejercer alguno de estos derechos, complete nuestro
              formulario e indiquelo en las observaciones. También tiene derecho
              a presentar una reclamación ante una{" "}
              <a href="https://www.argentina.gob.ar/servicio/denunciar-incumplimientos-de-la-ley-de-proteccion-de-datos-personales">
                autoridad de protección de datos de Argentina.
              </a>
              Necesitaremos evidencia apropiada de su identidad o que se nos
              proporcione información personal relevante adicional en función de
              su relación con nosotros antes de que podamos actuar sobre su
              solicitud en circunstancias en las que la información personal que
              tenemos en nuestros sistemas no sea lo suficientemente detallada
              para identificarlo o responder a su solicitud. Si lo desea, puede
              autorizar a otra persona a ejercer sus derechos bajo este Aviso de
              Privacidad en su nombre. A esta persona la llamaremos su
              Representante Personal. Si su Representante Personal nos envía una
              solicitud para ejercer sus derechos bajo este Aviso de Privacidad,
              podríamos solicitarle que presente evidencia de que usted le
              autorizó a realizar la solicitud en su nombre. En ese caso,
              también podríamos verificar su identidad directamente o pedirle
              que confirme la capacidad del Representante Personal para actuar
              en su nombre.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-bold text-gray-800 text-2xl">
              Información personal de los niños
            </h2>
            <p className="leading-relaxed">
              Nos comprometemos a proteger la privacidad de los menores, por lo
              que no recopilamos deliberadamente información personal de menores
              de 18 años, salvo que la legislación aplicable lo permita. Si
              descubrimos que hemos recopilado información personal directamente
              de menores a través de nuestros Sitios sin que la legislación
              aplicable lo permita, eliminaremos dicha información.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-bold text-gray-800 text-2xl">
              Enlaces a sitios web de terceros
            </h2>
            <p className="leading-relaxed">
              Este Aviso de Privacidad se aplica únicamente a los Sitios que lo
              muestran o hacen referencia a él. Los Sitios pueden contener
              enlaces a sitios web de terceros que escapan a nuestro control. No
              nos responsabilizamos de la recopilación, el uso ni la divulgación
              de su información personal por parte de dichos sitios web. Le
              recomendamos que revise las políticas de privacidad de todos los
              sitios web de terceros para saber cómo recopilan, utilizan y
              divulgan su información personal.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-bold text-gray-800 text-2xl">
              Cambios a este Aviso de Privacidad
            </h2>
            <p className="leading-relaxed">
              Podemos actualizar este Aviso de Privacidad ocasionalmente
              mediante la publicación de un nuevo Aviso de Privacidad en
              nuestros Sitios. Al actualizar este Aviso de Privacidad,
              indicaremos cuándo se actualizó más recientemente modificando la
              fecha de &quot;última actualización&quot;. Salvo que se indique lo
              contrario, las actualizaciones de este Aviso de Privacidad entran
              en vigor inmediatamente después de su publicación. Si realizamos
              un cambio sustancial en nuestro Aviso de Privacidad, podemos tomar
              medidas razonables para notificarle, por ejemplo, mediante la
              publicación de un banner o una ventana emergente en nuestros
              Sitios.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
