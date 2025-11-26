// /data/blog-posts.ts

import type { BlogPost } from "@/types/index";
import Link from "next/link";

// Usaremos esta constante para exportar la entrada del blog
export const mantengaSusOjosSanos: BlogPost = {
  id: "mantenga-sus-ojos-sanos",
  title: "Mantenga sus ojos sanos",
  description:
    "Hay muchas cosas que puede hacer para mantener sus ojos sanos y proteger su visión.",
  // Reemplaza esto con la ruta real a tu imagen de portada
  coverImage: "/assets/images/blog/blog-1-portada.jpg",
  sections: [
    {
      title:
        "Hágase un examen completo de los ojos con dilatación de las pupilas",
      content: (
        <>
          <p>
            El examen de ojos con dilatación de las pupilas es sencillo y no
            duele. Es lo mejor que puede hacer por la salud de sus ojos.
          </p>
          <p>
            Incluso si siente los ojos sanos, podría tener un problema y no
            saberlo. Esto se debe a que muchas enfermedades de los ojos no
            presentan ningún síntoma o señal de advertencia.
          </p>
          <p>
            Un examen de los ojos con dilatación de las pupilas es la única
            forma de detectar muchas enfermedades oculares desde temprano,
            cuando son más fáciles de tratar.
          </p>
          <br />
          <Link
            href="/salud-visual/examen-dilatacion-pupilas"
            className="text-blue-600 hover:underline"
          >
            Obtenga información sobre los exámenes de los ojos con dilatación de
            las pupilas
          </Link>
        </>
      ),
    },
  ],
};

export const examenConDilatacion: BlogPost = {
  id: "examen-dilatacion-pupilas",
  title: "Examen de los ojos con dilatación de las pupilas",
  description:
    "Un examen de los ojos con dilatación de las pupilas es la mejor forma de detectar tempranamente enfermedades oculares, cuando son más fáciles de tratar.",
  coverImage: "", // Asigna la ruta de imagen correcta
  sections: [
    {
      id: "que-es-un-examen",
      title: "¿Qué es un examen de los ojos con dilatación de las pupilas?",
      content: (
        <>
          <p>
            ¡Un examen de los ojos con dilatación de las pupilas es lo mejor que
            usted puede hacer por la salud de sus ojos! Es la única forma de
            detectar tempranamente enfermedades oculares, cuando son más fáciles
            de tratar, y antes de que causen pérdida de visión.
          </p>
          <p>
            El examen es sencillo y no duele. Su oculista revisará si tiene
            problemas de visión que le dificulten ver con claridad, como miopía
            o hipermetropía. Luego, le pondrá unas gotas para los ojos para
            dilatar (ensanchar) la pupila y determinar si tiene alguna
            enfermedad ocular.
          </p>
          <p>
            Dado que muchas enfermedades oculares no presentan síntomas ni
            señales de advertencia, es posible que tenga un problema y no lo
            sepa. Incluso si cree que sus ojos están sanos, la única forma de
            saberlo con certeza es haciéndose un examen de los ojos con
            dilatación de las pupilas.
          </p>
        </>
      ),
    },
    {
      id: "con-que-frecuencia",
      title: "¿Con qué frecuencia debo hacerme este examen?",
      content: (
        <>
          <p>
            La frecuencia con la que necesita hacerse este examen depende de su
            riesgo de desarrollar una enfermedad ocular. Consulte con su médico
            sobre lo que es adecuado para usted.
          </p>
          <p>
            Si usted tiene diabetes o alta presión arterial, consulte con su
            médico con qué frecuencia debe hacerse el examen. La mayoría de las
            personas con estas condiciones deben hacerse un examen de los ojos
            con dilatación de las pupilas al menos una vez al año.
          </p>
        </>
      ),
    },
    {
      id: "que-sucede-durante",
      title: "¿Qué sucede durante el examen?",
      content: (
        <>
          <p>El examen incluye:</p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>
              <strong>Prueba de agudeza visual:</strong> para verificar la
              claridad con la que ve.
            </li>
            <li>
              <strong>Prueba de campo visual:</strong> para verificar su visión
              periférica (lateral).
            </li>
            <li>
              <strong>Prueba de la función muscular del ojo:</strong> para
              revisar si tiene problemas con los músculos alrededor de los
              globos oculares.
            </li>
            <li>
              <strong>Prueba de respuesta de la pupila:</strong> para revisar
              cómo entra la luz a sus ojos.
            </li>
            <li>
              <strong>Prueba de tonometría:</strong> para medir la presión en
              sus ojos.
            </li>
            <li>
              <strong>Dilatación:</strong> para detectar problemas en las partes
              internas del ojo.
            </li>
          </ul>
          <p className="mt-4">
            Dependiendo de sus necesidades, su médico también podría incluir
            otras pruebas.
          </p>
        </>
      ),
    },
    {
      id: "como-funciona",
      title: "¿Cómo funciona la dilatación?",
      content: (
        <>
          <p>
            La dilatación de la pupila permite que entre más luz en el ojo, de
            la misma forma en que la luz entra en una habitación oscura al abrir
            la puerta. La dilatación ayuda al oculista a detectar muchos
            problemas oculares comunes, como la retinopatía diabética, el
            glaucoma y la degeneración macular relacionada con la edad.
          </p>
          <div className="flex justify-center my-5 w-full">
            <img
              src="/assets/images/blog/blog-1-image-1.jpg"
              alt="Ilustración de la dilatación de la pupila"
              className="rounded-lg w-96"
            />
          </div>
        </>
      ),
    },
    {
      id: "que-sucede-despues",
      title: "¿Qué sucede después del examen?",
      content: (
        <>
          <p>
            Durante unas horas después de un examen de los ojos con dilatación
            de las pupilas, su visión podría estar borrosa y usted podría quedar
            sensible a la luz. Pídale a un amigo o familiar que lo lleve a casa
            después de su cita.
          </p>
          <p>
            Si el oculista encuentra que usted tiene errores de refracción en su
            visión, podría recetarle anteojos o lentes de contacto para ayudarle
            a ver con más claridad.
          </p>
          <br />
          <Link
            href="/salud-visual/errores-de-refraccion"
            className="text-blue-600 hover:underline"
          >
            Obtenga más información sobre los errores de refracción
          </Link>
        </>
      ),
    },
  ],
};

export const erroresDeRefraccion: BlogPost = {
  id: "errores-de-refraccion",
  title: "Errores de refracción",
  description:
    "Los errores de refracción son un tipo de problema de visión que dificulta ver con claridad. Se presenta cuando la forma del ojo evita que la luz se enfoque correctamente en la retina.",
  coverImage: "", // Asigna la ruta de imagen correcta
  // No se especifica 'sectionIds' porque no necesita un índice.
  sections: [
    {
      id: "que-son-los-errores-de-refraccion",
      title: "¿Qué son los errores de refracción?",
      content: (
        <>
          <p>
            Los errores de refracción son un tipo de problema de visión que
            dificulta ver con claridad. Se presenta cuando la forma del ojo
            evita que la luz se enfoque correctamente en la retina (una capa de
            tejido sensible a la luz en la parte de atrás del ojo).
          </p>
          <p>
            Los errores de refracción son el tipo más común de problemas de
            visión. Más de 150 millones de personas en los Estados Unidos tienen
            un error de refracción, pero muchas no saben que podrían ver mejor.
            Por eso son tan importantes los exámenes de los ojos.
          </p>
          <p>
            Si usted tiene un error de refracción, su oculista puede recetarle
            anteojos o lentes de contacto para ayudarle a ver con claridad.
          </p>
        </>
      ),
    },
    {
      id: "cuales-son-los-tipos-de-errores-de-refraccion",
      title: "¿Cuáles son los tipos de errores de refracción?",
      content: (
        <>
          <p>Hay 4 tipos comunes de errores de refracción:</p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>
              <Link
                href="/salud-visual/miopia"
                className="text-blue-600 hover:underline"
              >
                Miopía
              </Link>
              , que hace que los objetos lejanos se vean borrosos.
            </li>
            <li>
              <Link
                href="/salud-visual/hipermetropia"
                className="text-blue-600 hover:underline"
              >
                Hipermetropía
              </Link>
              &nbsp;(también llamada hiperopía), que hace que los objetos
              cercanos se vean borrosos.
            </li>
            <li>
              <Link
                href="/salud-visual/astigmatismo"
                className="text-blue-600 hover:underline"
              >
                Astigmatismo
              </Link>
              , que puede hacer que los objetos cercanos y lejanos se vean
              borrosos o distorsionados.
            </li>
            <li>
              <Link
                href="/salud-visual/presbicia"
                className="text-blue-600 hover:underline"
              >
                Presbicia
              </Link>
              , que hace que sea difícil para los adultos mayores y de mediana
              edad ver las cosas de cerca.
            </li>
          </ul>
          <p className="mt-4">
            <Link
              href="/salud-visual/tipos-de-errores-de-refraccion"
              className="text-blue-600 hover:underline"
            >
              Obtenga más información sobre los tipos comunes de errores de
              refracción
            </Link>
          </p>
        </>
      ),
    },
  ],
};

export const tiposDeErroresDeRefraccion: BlogPost = {
  id: "tipos-de-errores-de-refraccion",
  title: "Tipos de errores de refracción",
  description:
    "Los errores de refracción se presentan cuando la forma del ojo evita que la luz se enfoque correctamente en la retina. Cada tipo es diferente, pero todos dificultan ver con claridad.",
  coverImage: "", // Asigna la ruta de imagen correcta
  // No se especifica 'sectionIds' porque no necesita un índice.
  sections: [
    {
      id: "miopia",
      title: "Miopía",
      content: (
        <>
          <p>
            La miopía hace que los objetos lejanos se vean borrosos. Se presenta
            cuando la longitud del globo ocular es muy larga de adelante hacia
            atrás, o cuando hay problemas con la forma de la córnea (capa
            frontal transparente del ojo) o el cristalino (una parte interna del
            ojo o “lente” que ayuda al ojo a enfocar). Estos problemas hacen que
            la luz se enfoque en un área delante de la retina, en lugar de
            directamente sobre ella.
          </p>
          <br />
          <p>
            La miopía generalmente comienza entre los 6 y los 14 años. Los niños
            que pasan más tiempo al aire libre durante estos años tienen menos
            probabilidad de desarrollar miopía, pero los expertos desconocen la
            razón.
          </p>
          <br />
          <p>
            La miopía grave (conocida también como miopía alta o elevada) puede
            aumentar el riesgo de otras afecciones oculares, como el
            desprendimiento de retina (cuando la retina se separa de su posición
            normal).
            <br />
          </p>
          <br />
          <Link
            href="/salud-visual/miopia"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre la miopía
          </Link>
        </>
      ),
    },
  ],
};

export const miopiaHipermetropia: BlogPost = {
  id: "miopia",
  title: "A simple vista: Miopía",
  description:
    "La miopía es un problema de refracción que hace que los objetos lejanos se vean borrosos. Conozca sus síntomas, causas y tratamientos.",
  coverImage: "", // Asigna la ruta de imagen correcta

  sections: [
    {
      id: "que-es-la-miopia",
      title: "¿Qué es la miopía?",
      content: (
        <>
          <p>
            La miopía es un problema de refracción (forma en que la luz se
            refleja dentro del ojo) que hace que los objetos lejanos se vean
            borrosos. Pasa cuando la forma de su ojo hace que la luz se enfoque
            en un área enfrente de la retina (una capa de tejido sensible a la
            luz en la parte de atrás del ojo), en vez de enfocarse en la propia
            retina.
          </p>
          <p>
            Si usted tiene miopía, su oculista puede recetarle anteojos o lentes
            de contacto para ayudarle a ver claramente.
          </p>
        </>
      ),
    },
    {
      id: "sintomas-de-la-miopia",
      title: "¿Cuáles son los síntomas de la miopía?",
      content: (
        <>
          <p>Los síntomas más comunes de la miopía son:</p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>Problemas para ver cosas que están lejos</li>
            <li>La necesidad de entrecerrar los ojos para ver claramente</li>
            <li>
              Fatiga ocular (cuando los ojos se sienten cansados o adoloridos)
            </li>
          </ul>
          <p className="mt-4">
            Algunas personas con miopía tienen dolores de cabeza, pero no es tan
            común. Si usted tiene una miopía leve, es posible que no note ningún
            síntoma. Por eso es importante hacerse con regularidad exámenes de
            los ojos.
          </p>
          <p>
            Las personas que tienen miopía aguda (también conocida como “miopía
            alta” o “magna”) podrían correr el riesgo de desarrollar otras
            enfermedades oculares, como el desprendimiento de la retina.
          </p>
        </>
      ),
    },
    {
      id: "riesgo-de-miopia",
      title: "¿Corro riesgo de tener miopía?",
      content: (
        <>
          <p>
            Cualquier persona puede tener miopía, pero su riesgo aumenta si
            miembros de su familia también son miopes.
          </p>
          <p>
            La miopía normalmente comienza entre los 6 y los 14 años de edad y
            empeora hasta el principio de la segunda década de vida. Los niños
            que pasan más tiempo al aire libre tiene menos probabilidad de ser
            miopes, pero los expertos no están seguros sobre la razón.
          </p>
        </>
      ),
    },
    {
      id: "causa-de-la-miopia",
      title: "¿Qué causa miopía?",
      content: (
        <p>
          La miopía ocurre cuando el globo ocular crece demasiado largo, desde
          adelante hacia atrás, o cuando hay problemas con la forma de su córnea
          (la capa transparente frontal del ojo) o el cristalino (el “lente”
          interno que ayuda al ojo a enfocar). Estos problemas hacen que la luz
          se refleje en un área enfrente de la retina en vez de directamente
          sobre ella, lo que hace que los objetos lejanos se vean borrosos.
        </p>
      ),
    },
    {
      id: "diagnostico-de-la-miopia",
      title: "¿Cómo determinará el oculista si tengo miopía?",
      content: (
        <p>
          Los oculistas pueden determinar la existencia de miopía como parte de
          un examen completo de los ojos. El examen es sencillo y no duele.
        </p>
      ),
    },
    {
      id: "tratamiento-para-la-miopia",
      title: "¿Cuál es el tratamiento para la miopía?",
      content: (
        <>
          <p>
            Los tratamientos más comunes para la miopía consisten en anteojos
            con prescripción médica o lentes de contacto. El oculista le
            recetará los anteojos adecuados para ayudarle a ver lo más
            claramente posible.
          </p>
          <p>
            Los adultos también pueden tener cirugía para tratar la miopía. La
            cirugía cambia la forma de su córnea para que pueda enfocar la luz
            claramente.
          </p>
        </>
      ),
    },
    {
      id: "hipermetropia",
      title: "Hipermetropía (hiperopía)",
      content: (
        <>
          <p>
            La hipermetropía (también llamada hiperopía) hace que los objetos
            cercanos se vean borrosos. Se presenta cuando la longitud del globo
            ocular es muy corta de adelante hacia atrás, o cuando hay problemas
            con la forma de la córnea o el cristalino. Estos problemas hacen que
            la luz se enfoque en un área detrás de la retina, en lugar de
            directamente sobre ella.
          </p>

          <p>Las personas con hipermetropía suelen nacer con esta afección.</p>
          <br />
          <Link
            href="/salud-visual/hipermetropia"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre la hipermetropía
          </Link>
        </>
      ),
    },
  ],
};

export const hipermetropiaAstigmatismo: BlogPost = {
  id: "hipermetropia-y-astigmatismo",
  title: "A simple vista: Hipermetropía (hiperopía)",
  description:
    "La hipermetropía es un error de refracción que hace que los objetos cercanos se vean borrosos. Conozca sus síntomas, causas y tratamientos.",
  coverImage: "/images/blog/hyperopia-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "que-es-la-hipermetropia",
    "sintomas-de-la-hipermetropia",
    "causa-de-la-hipermetropia",
    "diagnostico-de-la-hipermetropia",
    "tratamiento-para-la-hipermetropia",
    "astigmatismo",
  ],
  sections: [
    {
      id: "que-es-la-hipermetropia",
      title: "¿Qué es la hipermetropía?",
      content: (
        <>
          <p>
            La hipermetropía (también llamada hiperopía) es un error de
            refracción que hace que los objetos cercanos se vean borrosos. Se
            presenta cuando la forma del ojo hace que la luz se enfoque por
            detrás de la retina (una capa de tejido sensible a la luz en la
            parte de atrás del ojo) en lugar de directamente en la retina.
          </p>
          <p>
            Si tiene hipermetropía, su oculista puede recetarle anteojos o
            lentes de contacto para ayudarle a ver con claridad.
          </p>
        </>
      ),
    },
    {
      id: "sintomas-de-la-hipermetropia",
      title: "¿Cuáles son los síntomas de la hipermetropía?",
      content: (
        <>
          <p>Los síntomas más comunes de la hipermetropía son:</p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>Problemas para ver las cosas de cerca</li>
            <li>
              Fatiga ocular (cuando los ojos se sienten cansados o adoloridos)
            </li>
            <li>Dolor de cabeza, especialmente al leer</li>
          </ul>
          <p className="mt-4">
            Si tiene hipermetropía leve, es posible que no note ningún síntoma.
            Por eso es importante hacerse exámenes de la visión con regularidad.
          </p>
          <p>
            Los niños con hipermetropía aguda también podrían correr un mayor
            riesgo de presentar otros problemas oculares, como ojos bizcos
            (también llamado estrabismo) o ambliopía (ojo perezoso).
          </p>
        </>
      ),
    },
    {
      id: "causa-de-la-hipermetropia",
      title: "¿Qué causa la hipermetropía?",
      content: (
        <>
          <p>
            La hipermetropía se presenta cuando el globo ocular crece demasiado
            pequeño desde adelante hacia atrás, o cuando hay problemas con la
            forma de la córnea o el cristalino.
          </p>
          <p>
            Estos problemas hacen que la luz se enfoque detrás de la retina, en
            lugar de en ella, y eso hace que los objetos cercanos se vean
            borrosos. La mayoría de las personas con hipermetropía nacen así,
            pero es posible que no cause problemas de visión hasta que se hagan
            mayores.
          </p>
        </>
      ),
    },
    {
      id: "diagnostico-de-la-hipermetropia",
      title: "¿Cómo determinará mi oculista si tengo hipermetropía?",
      content: (
        <p>
          Durante un examen completo de los ojos, el oculista puede determinar
          si tiene hipermetropía. El examen es sencillo y no duele.
        </p>
      ),
    },
    {
      id: "tratamiento-para-la-hipermetropia",
      title: "¿Cuál es el tratamiento para la hipermetropía?",
      content: (
        <>
          <p>
            Los tratamientos más comunes para la hipermetropía son anteojos o
            lentes de contacto. El oculista le recetará los anteojos adecuados
            para que le brinden la visión más clara posible.
          </p>
          <p>
            Los médicos también pueden hacer una cirugía para tratar la
            hipermetropía en adultos. La cirugía cambia la forma de la córnea
            para que pueda enfocar la luz con claridad.
          </p>
        </>
      ),
    },
    {
      id: "astigmatismo",
      title: "Astigmatismo",
      content: (
        <>
          <p>
            El astigmatismo puede hacer que los objetos cercanos y lejanos se
            vean borrosos o distorsionados. Se presenta cuando la córnea o el
            cristalino tienen una forma distinta de la normal, lo que hace que
            la luz se refracte de manera diferente cuando ingresa al ojo.
          </p>
          <p>
            Algunas personas con astigmatismo nacen con esta afección, pero
            muchas personas lo desarrollan cuando son niños o adultos jóvenes.
            Las personas con astigmatismo a menudo tienen otro error de
            refracción, como miopía o hipermetropía.
          </p>
          <Link
            href="/salud-visual/astigmatismo"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre el astigmatismo
          </Link>
        </>
      ),
    },
  ],
};

export const astigmatismoPresbicia: BlogPost = {
  id: "astigmatismo-y-presbicia",
  title: "A simple vista: Astigmatismo",
  description:
    "El astigmatismo es un problema común que puede hacer la visión borrosa o distorsionada. Ocurre cuando la córnea o el cristalino tiene una forma anormal.",
  coverImage: "/images/blog/astigmatism-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "que-es-el-astigmatismo",
    "sintomas-del-astigmatismo",
    "causa-del-astigmatismo",
    "diagnostico-del-astigmatismo",
    "tratamiento-para-el-astigmatismo",
    "presbicia",
  ],
  sections: [
    {
      id: "que-es-el-astigmatismo",
      title: "¿Qué es el astigmatismo?",
      content: (
        <>
          <p>
            El astigmatismo es un problema común que puede hacer la visión
            borrosa o distorsionada. Ocurre cuando la córnea (la capa
            transparente en la parte frontal del ojo) o el cristalino (una parte
            interna del ojo que ayuda a enfocar) tiene una forma anormal.
          </p>
          <p>
            La única forma de averiguar si usted tiene astigmatismo, es a través
            de un examen ocular. Los anteojos con receta médica o los lentes de
            contacto pueden ayudarle a ver mejor. Algunas personas pueden tener
            cirugía para solucionar su problema de astigmatismo.
          </p>
        </>
      ),
    },
    {
      id: "sintomas-del-astigmatismo",
      title: "¿Cuáles son los síntomas del astigmatismo?",
      content: (
        <>
          <p>Los síntomas más comunes del astigmatismo son:</p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>Visión borrosa</li>
            <li>
              La necesidad de entrecerrar los ojos para poder ver claramente
            </li>
            <li>Dolor de cabeza</li>
            <li>Fatiga ocular</li>
            <li>Problemas de visión en la noche</li>
          </ul>
          <p className="mt-4">
            Si usted tiene astigmatismo leve, es posible que no note ningún
            síntoma. Por eso es importante hacerse exámenes de los ojos
            regularmente. Esto es especialmente importante para los niños,
            quienes tienen menos probabilidad de darse cuenta de que su visión
            no es normal.
          </p>
        </>
      ),
    },
    {
      id: "causa-del-astigmatismo",
      title: "¿Qué causa el astigmatismo?",
      content: (
        <>
          <p>
            El astigmatismo ocurre cuando la córnea o el cristalino tiene una
            forma anormal. Esta forma hace que la luz se curve de forma distinta
            cuando entra al ojo, causando un error de refracción.
          </p>
          <p>
            Los médicos no saben qué causa el astigmatismo, y no hay forma de
            prevenirlo. Algunas personas nacen con astigmatismo, pero muchas
            desarrollan la afección durante la infancia o cuando son adultos
            jóvenes. Algunas personas pueden también desarrollar astigmatismo
            después de sufrir una lesión ocular o de una cirugía.
          </p>
        </>
      ),
    },
    {
      id: "diagnostico-del-astigmatismo",
      title: "¿Cómo determinará mi oculista si tengo astigmatismo?",
      content: (
        <p>
          Los oculistas pueden evaluar la existencia de astigmatismo como parte
          de un examen de los ojos con dilatación de las pupilas. El examen es
          sencillo y no duele.
        </p>
      ),
    },
    {
      id: "tratamiento-para-el-astigmatismo",
      title: "¿Cuál es el tratamiento para el astigmatismo?",
      content: (
        <>
          <p>
            El tratamiento más común para el astigmatismo son anteojos con
            receta médica o lentes de contacto. Su oculista le recetará los
            lentes adecuados para ayudarle a ver lo más claramente posible.
          </p>
          <p>
            Los médicos también pueden usar cirugía para tratar el astigmatismo.
            La cirugía cambia la forma de la córnea para que pueda enfocar la
            luz correctamente. Si su astigmatismo es leve, podría no necesitar
            tratamiento.
          </p>
        </>
      ),
    },
    {
      id: "presbicia",
      title: "Presbicia",
      content: (
        <>
          <p>
            La presbicia hace que sea difícil para los adultos mayores y de
            mediana edad ver las cosas de cerca. A medida que envejecemos, el
            cristalino se vuelve más duro y menos flexible y deja de enfocar la
            luz correctamente en la retina.
          </p>
          <p>
            Todos desarrollamos presbicia a medida que envejecemos, generalmente
            después de los 45 años. Muchas personas tienen otro error de
            refracción además de la presbicia.
          </p>
          <Link
            href="/salud-visual/presbicia"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre la presbicia
          </Link>
        </>
      ),
    },
  ],
};

export const presbicia: BlogPost = {
  id: "presbicia",
  title: "A simple vista: Presbicia",
  description:
    "La presbicia es un error de refracción que le dificulta a las personas de mediana edad y a los adultos mayores ver cosas de cerca.",
  coverImage: "/images/blog/presbyopia-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "que-es-la-presbicia",
    "sintomas-de-la-presbicia",
    "causas-de-la-presbicia",
    "diagnostico-de-la-presbicia",
    "tratamiento-para-la-presbicia",
    "sintomas-generales-refraccion",
  ],
  sections: [
    {
      id: "que-es-la-presbicia",
      title: "¿Qué es la presbicia?",
      content: (
        <>
          <p>
            La presbicia es un error de refracción que le dificulta a las
            personas de mediana edad y a los adultos mayores ver cosas de cerca.
            Ocurre cuando el cristalino (el “lente” del ojo que ayuda a enfocar)
            deja de enfocar la luz correctamente en la retina (la capa de tejido
            sensible a la luz en la parte de atrás del ojo).
          </p>
          <p>
            La presbicia es una parte normal del envejecimiento. Todas las
            personas desarrollan presbicia a medida que envejecen, normalmente
            después de los 45 años. Muchas personas tienen otros errores de
            refracción además de la presbicia.
          </p>
        </>
      ),
    },
    {
      id: "sintomas-de-la-presbicia",
      title: "¿Cuáles son los síntomas de la presbicia?",
      content: (
        <>
          <p>Los síntomas de la presbicia incluyen:</p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>Problemas para ver cosas de cerca</li>
            <li>
              La necesidad de sostener materiales de lectura lejos de los ojos
              para poder enfocar bien
            </li>
            <li>
              Cansancio y tensión ocular (cuando sus ojos se sienten cansados o
              irritados)
            </li>
            <li>Dolor de cabeza</li>
          </ul>
          <p className="mt-4">
            La presbicia empeora a medida que pasa el tiempo, pero normalmente
            detiene su avance después de los 65 años de edad.
          </p>
        </>
      ),
    },
    {
      id: "causas-de-la-presbicia",
      title: "¿Qué causa la presbicia?",
      content: (
        <>
          <p>
            A medida que usted envejece, el cristalino del ojo se endurece y se
            vuelve menos flexible, y deja de enfocar la luz correctamente en la
            retina. Esto hace que los objetos cercanos se vean borrosos.
          </p>
          <p>
            La presbicia es distinta a la miopía, otro error de refracción que
            dificulta ver las cosas de cerca.
          </p>
        </>
      ),
    },
    {
      id: "diagnostico-de-la-presbicia",
      title: "¿Cómo determinará mi oculista si tengo presbicia?",
      content: (
        <p>
          Los oculistas pueden determinar la existencia de presbicia como parte
          de un examen completo de los ojos. El examen es sencillo y no duele.
        </p>
      ),
    },
    {
      id: "tratamiento-para-la-presbicia",
      title: "¿Cuál es el tratamiento para la presbicia?",
      content: (
        <>
          <p>
            En las etapas tempranas de la presbicia, usted puede realizar
            cambios simples que le ayuden a leer, como por ejemplo:
          </p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>Sostener los materiales de lectura un poco más lejos</li>
            <li>
              Escoger libros con letras más grandes, e incrementar el tamaño de
              las letras en la computadora
            </li>
            <li>Usar luces más brillantes para leer</li>
          </ul>
          <p className="mt-4">
            A medida que su presbicia avanza, probablemente necesitará anteojos
            con receta médica o lentes de contacto para leer.
          </p>
        </>
      ),
    },
    {
      id: "sintomas-generales-refraccion",
      title: "Síntomas generales de los errores de refracción",
      content: (
        <>
          <p>
            El síntoma más común es la visión borrosa. Otros síntomas incluyen:
          </p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>Visión doble</li>
            <li>Visión borrosa</li>
            <li>
              Ver un resplandor o una aureola alrededor de luces brillantes
            </li>
            <li>Tener que entrecerrar los ojos para poder enfocar</li>
            <li>Dolor de cabeza</li>
            <li>
              Fatiga ocular (cuando los ojos se sienten cansados o adoloridos)
            </li>
            <li>Problemas para enfocar al leer o mirar la computadora</li>
          </ul>
          <p className="mt-4">
            Es importante hacerse exámenes de los ojos con regularidad, para que
            su oculista pueda asegurarse de que usted está viendo lo más
            claramente posible.
          </p>
        </>
      ),
    },
    {
      id: "tratamiento-general-refraccion",
      title: "Tratamiento para los errores de refracción",
      content: (
        <>
          <p>
            Los oculistas pueden corregir los errores de refracción con anteojos
            o lentes de contacto, o corregir el error de refracción con cirugía.
          </p>
          <div className="bg-blue-50 mt-4 p-4 border-blue-500 border-l-4">
            <p className="font-bold">Anteojos</p>
            <p>
              Los anteojos son la forma más sencilla y segura de corregir los
              errores de refracción. El oculista le recetará los anteojos
              adecuados que le brinden la visión más clara posible.
            </p>
            <Link
              href="/salud-visual/anteojos"
              className="inline-block mt-2 font-semibold text-blue-600 hover:underline"
            >
              Obtenga más información sobre los anteojos
            </Link>
          </div>
        </>
      ),
    },
  ],
};

export const comoFuncionanLosOjos: BlogPost = {
  id: "como-funcionan-los-ojos",
  title: "Cómo funcionan los ojos",
  description:
    "Todas las diferentes partes del ojo trabajan juntas para ayudarnos a ver. Descubra el viaje de la luz desde la córnea hasta el cerebro.",
  coverImage: "/assets/images/blog/ojo-diagrama.jpg", // Asigna la ruta de imagen correcta
  // No se especifica 'sectionIds' porque no necesita un índice.
  sections: [
    {
      id: "el-proceso-de-la-vision",
      title: "El viaje de la luz para crear la visión",
      content: (
        <>
          <p>
            Primero, la luz atraviesa la córnea (la capa frontal transparente
            del ojo). La córnea tiene la forma de una cúpula y curva la luz para
            ayudar al ojo a enfocar.
          </p>
          <p>
            Parte de esta luz entra al ojo a través de una abertura conocida
            como pupila. El iris (la parte coloreada del ojo) controla la
            cantidad de luz que la pupila deja entrar.
          </p>
          <p>
            Luego, la luz atraviesa el cristalino (el “lente”, que es la parte
            transparente del ojo). El cristalino trabaja junto con la córnea
            para enfocar la luz correctamente en la retina.
          </p>
          <p>
            Cuando la luz llega a la retina (una capa de tejido sensible a la
            luz en la parte de atrás del ojo), unas células especiales conocidas
            como fotorreceptores convierten la luz en señales eléctricas.
          </p>
          <p>
            Estas señales eléctricas viajan desde la retina a través del nervio
            óptico al cerebro. Luego, el cerebro convierte las señales en las
            imágenes que vemos.
          </p>
          <p className="mt-4">
            Los ojos también necesitan lágrimas para funcionar correctamente.
            <br />
            <Link
              href="/salud-visual/como-funcionan-las-lagrimas"
              className="ml-1 font-semibold text-blue-600 hover:underline"
            >
              Obtenga más información sobre cómo funcionan las lágrimas
            </Link>
          </p>
        </>
      ),
    },
  ],
};

export const ochoCosasParaProtegerVision: BlogPost = {
  id: "8-cosas-para-proteger-su-vision",
  title: "8 cosas que puede hacer ahora mismo para proteger su visión",
  description:
    "A medida que envejeces, el riesgo de desarrollar algunas enfermedades de los ojos puede aumentar. ¡Prepárese para ver lo mejor posible toda una vida con estos 8 consejos!",
  coverImage: "/assets/images/blog/8-cosas-portada.jpg", // Asigna la ruta de imagen correcta

  sections: [
    {
      id: "busque-un-oculista",
      title: "1. Busque un oculista en el que confíe.",
      content: (
        <div>
          <p>
            Muchas enfermedades de los ojos no tienen síntomas tempranos, por lo
            que podría tener un problema y no saberlo. La buena noticia es que
            un oculista puede ayudarle a mantener control sobre su salud ocular.
            Encuentre un oculista en quien confiar, preguntando a sus amigos y
            familiares si les gusta su médico. También puede revisar su plan de
            seguro médico para encontrar oculistas cerca de usted.
          </p>

          <div className="flex justify-center my-5 w-full">
            <img
              src="/assets/images/blog/8-cosas-2da.jpg"
              alt="Ilustración de la dilatación de la pupila"
              className="rounded-lg w-96"
            />
          </div>
        </div>
      ),
    },
    {
      id: "examen-con-dilatacion",
      title:
        "2. Pregunte con qué frecuencia necesita hacerse un examen de los ojos con dilatación de las pupilas.",
      content: (
        <div>
          <p>
            Hacerse un examen de los ojos con dilatación de las pupilas es lo
            mejor que puede hacer por la salud de sus ojos. Es la única manera
            de encontrar enfermedades de los ojos de forma temprana, cuando son
            más fáciles de tratar y antes de que causen pérdida de visión. El
            oculista decidirá con qué frecuencia usted necesita un examen basado
            en su riesgo de desarrollar enfermedades de los ojos. Pregúntele al
            oculista qué es lo adecuado para usted.
          </p>
          <div className="flex justify-center my-5 w-full">
            <img
              src="/assets/images/blog/8-cosas-3ra.jpg"
              alt="Ilustración de la dilatación de la pupila"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      ),
    },
    {
      id: "agregue-movimiento",
      title: "3. Agregue más movimiento a su día.",
      content: (
        <div>
          <p>
            La actividad física puede reducir el riesgo de desarrollar problemas
            que pueden afectar su visión, como la diabetes y la presión arterial
            alta. Y una ventaja extra, ¡es que puede ayudarle a sentirse mejor!
            Si tiene problemas para encontrar tiempo para la actividad física,
            trate de integrarla en otras actividades. Camine mientras habla por
            teléfono, haga flexiones de brazos, estírese mientras ve la
            televisión o baile mientras hace los quehaceres del hogar.
            ¡Cualquier cosa que le haga bombear el corazón cuenta!
          </p>
          <div className="flex justify-center my-5 w-full">
            <img
              src="/assets/images/blog/8-cosas-4ta.jpg"
              alt="Ilustración de la dilatación de la pupila"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      ),
    },
    {
      id: "historial-familiar",
      title:
        "4. Motive a sus seres queridos a hablar sobre el historial médico de la salud ocular de su familia.",
      content: (
        <div>
          <p>
            Algunas enfermedades de los ojos, como el glaucoma y la degeneración
            macular relacionada con la edad (AMD, por sus siglas en inglés)
            pueden ser hereditarias. Hablar sobre su historial médico familiar
            puede ayudarlos a todos a mantenerse saludables. Pregúnteles a sus
            familiares si alguien sabe si hay problemas de los ojos en su
            familia y asegúrese de compartir lo que aprenda con su oculista.
          </p>
          <div className="flex justify-center my-5 w-full">
            <img
              src="/assets/images/blog/8-cosas-5ta.jpg"
              alt="Ilustración de la dilatación de la pupila"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      ),
    },
    {
      id: "alimentacion-saludable",
      title: "5. Desarrolle hábitos para tener una alimentación saludable.",
      content: (
        <div>
          <p>
            Comer alimentos saludables ayuda a prevenir enfermedades, como la
            diabetes o la presión arterial alta, que pueden ponerlo en riesgo de
            tener problemas en sus ojos. ¡Añada a su plato más alimentos que
            beneficien la salud de sus ojos! Pruebe los vegetales de hojas
            verdes oscuras y seleccione pescados ricos en ácidos grasos como el
            omega-3, presentes en el mero, el salmón y el atún.
          </p>
        </div>
      ),
    },
    {
      id: "use-gafas-de-sol",
      title:
        "6. Acostúmbrese a usar sus gafas de sol, incluso en días nublados.",
      content: (
        <div>
          <p>
            Los rayos ultravioleta (UV) del sol pueden dañar sus ojos. El uso de
            gafas de sol que bloqueen entre el 99 y el 100 por ciento de la
            radiación UVA y UVB puede proteger a sus ojos y reducir el riesgo de
            desarrollar cataratas. Así que asegúrese de incluir las gafas de sol
            a su lista de cosas imprescindibles antes de salir de casa.
          </p>
          <div className="flex justify-center my-5 w-full">
            <img
              src="/assets/images/blog/8-cosas-6ta.jpg"
              alt="Ilustración de la dilatación de la pupila"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      ),
    },
    {
      id: "control-enfermedades",
      title:
        "7. Manténgase al día en el control de enfermedades de salud a largo plazo.",
      content: (
        <div>
          <p>
            La diabetes y la presión arterial alta pueden aumentar su riesgo de
            padecer algunas enfermedades de los ojos, como el glaucoma. Si tiene
            diabetes o presión arterial alta, pregúntele a su médico sobre lo
            que puede hacer para controlar su afección y reducir el riesgo de
            pérdida de visión.
          </p>
        </div>
      ),
    },
    {
      id: "dejar-de-fumar",
      title: "8. Si fuma, haga un plan para dejar de fumar.",
      content: (
        <p>
          Dejar de fumar es bueno para casi todas las partes de su cuerpo,
          ¡incluyendo sus ojos! Dejar el hábito le ayudará a reducir el riesgo
          de desarrollar enfermedades de los ojos como la degeneración macular y
          las cataratas. Dejar de fumar es difícil, pero es posible, y tener un
          plan para dejar de fumar puede ayudar.
        </p>
      ),
    },
  ],
};

export const anteojosErroresRefraccion: BlogPost = {
  id: "anteojos-para-errores-de-refraccion",
  title: "Anteojos para los errores de refracción",
  description:
    "Los anteojos son la forma más sencilla y segura de corregir los errores de refracción. Conozca los diferentes tipos y cómo funcionan.",
  coverImage: "/images/blog/anteojos-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "tipos-de-anteojos",
    "como-funcionan-los-anteojos",
    "como-conseguir-anteojos",
    "lentes-de-contacto",
  ],
  sections: [
    {
      id: "tipos-de-anteojos",
      title: "¿Cuáles son los diferentes tipos de anteojos?",
      content: (
        <>
          <p>
            Las personas con diferentes errores de refracción necesitan
            diferentes tipos de anteojos para ver con claridad.
          </p>
          <ul className="space-y-3 mt-4 pl-4 list-disc list-inside">
            <li>
              <strong>Anteojos para leer:</strong> Ayudan a las personas con
              presbicia a ver de cerca. Se pueden comprar sin receta, pero los
              exámenes oculares regulares siguen siendo importantes.
            </li>
            <li>
              <strong>Lentes monofocales:</strong> Corrigen la visión de cerca o
              de lejos, pero no ambas. Son para miopía o hipermetropía.
            </li>
            <li>
              <strong>Lentes multifocales:</strong> Corrigen la visión tanto de
              cerca como de lejos. Incluyen bifocales, trifocales y progresivos
              (sin línea visible).
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "como-funcionan-los-anteojos",
      title: "¿Cómo funcionan los anteojos?",
      content: (
        <>
          <p>
            Los lentes de los anteojos funcionan desviando (refractando) la luz
            para que se enfoque correctamente en la retina. Cada tipo de lente
            corrige un defecto específico causado por la forma del ojo.
          </p>
          <p>
            Los anteojos mejoran su visión solo mientras los usa; no cambian sus
            ojos ni empeoran su visión.
          </p>
        </>
      ),
    },
    {
      id: "como-conseguir-anteojos",
      title: "¿Cómo consigo los anteojos?",
      content: (
        <>
          <p>
            Si cree que necesita anteojos, el primer paso es visitar a un
            oculista para un examen completo. Si necesita corrección, el médico
            le dará una receta.
          </p>
          <p>
            Con esa receta, un profesional óptico le ayudará a elegir los marcos
            y lentes adecuados. Es crucial hacerse exámenes regulares para
            asegurarse de que su receta esté actualizada.
          </p>
        </>
      ),
    },
    {
      id: "lentes-de-contacto",
      title: "Lentes de contacto",
      content: (
        <>
          <p>
            Los lentes de contacto se colocan directamente en la superficie de
            los ojos para corregir los errores de refracción. El oculista
            determinará los lentes adecuados y le mostrará cómo limpiarlos y
            usarlos de manera segura.
          </p>
          <Link
            href="/salud-visual/lentes-de-contacto"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre los lentes de contacto
          </Link>
        </>
      ),
    },
  ],
};

export const lentesDeContacto: BlogPost = {
  id: "lentes-de-contacto",
  title: "Lentes de contacto",
  description:
    "Los lentes de contacto son una alternativa segura y eficaz a los anteojos para corregir los errores de refracción y ver con más claridad.",
  coverImage: "/images/blog/contact-lenses-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "tipos-de-lentes",
    "beneficios-de-lentes",
    "riesgos-de-lentes",
    "cuidado-de-lentes",
    "como-obtenerlos",
    "cirugia-ocular",
  ],
  sections: [
    {
      id: "que-son-los-lentes",
      title: "¿Qué son los lentes de contacto?",
      content: (
        <>
          <p>
            Los lentes de contacto son lentes delgados que se colocan encima de
            la córnea (la capa exterior transparente del ojo). Corrigen los
            errores de refracción para que la visión sea más clara, igual como
            lo hacen los anteojos.
          </p>
          <p>
            Aproximadamente 45 millones de personas en los Estados Unidos usan
            lentes de contacto. Si se usan de la manera correcta, pueden ser una
            alternativa segura y eficaz a los anteojos.
          </p>
        </>
      ),
    },
    {
      id: "tipos-de-lentes",
      title: "¿Cuáles son los diferentes tipos de lentes de contacto?",
      content: (
        <>
          <p>
            Hay 3 cosas importantes que debe saber a la hora de escoger los
            lentes de contacto: si son blandos o duros, cuánto tiempo puede
            usarlos y con qué frecuencia debe reemplazarlos.
          </p>
          <ul className="space-y-3 mt-4 pl-4 list-disc list-inside">
            <li>
              <strong>Blandos o duros:</strong> Los lentes blandos son los más
              comunes, flexibles y cómodos. Los lentes duros (rígidos) pueden
              ofrecer una visión más nítida pero requieren un período de
              adaptación más largo.
            </li>
            <li>
              <strong>Uso diario o prolongado:</strong> Los de uso diario se
              quitan y limpian cada noche. Los de uso prolongado se pueden usar
              para dormir, hasta por 30 días seguidos, aunque aumentan el riesgo
              de infecciones.
            </li>
            <li>
              <strong>De un solo uso o reutilizables:</strong> Los de un solo
              uso (diarios) se desechan cada noche. Los reutilizables se limpian
              y guardan para usarse de nuevo, reemplazándose cada 7 a 30 días
              según la marca.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "beneficios-de-lentes",
      title: "¿Cuáles son los beneficios de los lentes de contacto?",
      content: (
        <>
          <p>
            Algunas personas prefieren usar lentes de contacto en lugar de
            anteojos.
          </p>
          <p>
            Los lentes de contacto permanecen en su lugar y mejoran la visión
            periférica (lateral), por lo que pueden ser más fáciles de usar al
            hacer ejercicio. No se empañan como los anteojos, lo que es
            conveniente en climas fríos.
          </p>
        </>
      ),
    },
    {
      id: "riesgos-de-lentes",
      title: "¿Cuáles son los riesgos de los lentes de contacto?",
      content: (
        <>
          <div className="bg-red-50 mt-4 mb-6 p-4 border-red-500 border-l-4">
            <p className="font-bold">Cuándo buscar ayuda</p>
            <p>
              Sáquese los lentes de contacto si tiene dolor, ojos rojos,
              sensibilidad a la luz, visión borrosa repentina, ojos llorosos o
              flujo inusual. Si los síntomas no desaparecen, llame a su
              oculista.
            </p>
          </div>
          <p>
            Si no se usan de la manera correcta, los lentes de contacto pueden
            generar afecciones oculares graves, como úlceras e infecciones en la
            córnea.
          </p>
          <p>
            Puede reducir el riesgo si los desinfecta correctamente, respeta el
            tiempo de uso recomendado y se los quita antes de ducharse o nadar.
          </p>
        </>
      ),
    },
    {
      id: "cuidado-de-lentes",
      title: "¿Cómo debo cuidar mis lentes de contacto?",
      content: (
        <>
          <p>
            La mayoría de las personas usan una solución multiuso. Siga estos
            pasos para mantener sus lentes y ojos seguros:
          </p>
          <ul className="space-y-2 mt-4 pl-4 list-disc list-inside">
            <li>
              <strong>Al quitárselos:</strong> Frótelos y enjuáguelos con
              solución, luego guárdelos en solución limpia en su estuche.
            </li>
            <li>
              <strong>Al ponérselos:</strong> Vacíe la solución vieja, frote y
              enjuague el estuche con solución nueva, séquelo con un pañuelo de
              papel y guárdelo boca abajo y destapado.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "como-obtenerlos",
      title: "¿Cómo obtengo los lentes de contacto?",
      content: (
        <>
          <p>
            Su oculista puede recetarle lentes de contacto después de un examen
            completo de los ojos.
          </p>
          <p>
            Para ello, le pondrá lentes de prueba para ver cómo se ajustan y
            evaluará su visión con ellos puestos. Si usa lentes de contacto, es
            importante hacerse un examen de la vista al menos una vez al año.
          </p>
        </>
      ),
    },
    {
      id: "cirugia-ocular",
      title: "Cirugía ocular como alternativa",
      content: (
        <>
          <p>
            Algunos tipos de cirugía, como la cirugía ocular con láser, pueden
            cambiar la forma de la córnea para corregir permanentemente los
            errores de refracción. El oculista puede ayudarle a decidir si la
            cirugía es una opción adecuada para usted.
          </p>
          <Link
            href="/salud-visual/cirugia-ocular"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre la cirugía ocular
          </Link>
        </>
      ),
    },
  ],
};

export const cirugiaErroresRefraccion: BlogPost = {
  id: "cirugia-para-errores-de-refraccion",
  title: "Cirugía para los errores de refracción",
  description:
    "Algunos tipos de cirugía pueden cambiar la forma de la córnea para corregir los errores de refracción. El tipo más común es la cirugía LASIK.",
  coverImage: "/images/blog/lasik-surgery-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "que-es-lasik",
    "es-lasik-para-mi",
    "beneficios-de-lasik",
    "riesgos-de-lasik",
    "durante-la-cirugia",
    "recuperacion-lasik",
    "otros-tipos-cirugia",
  ],
  sections: [
    {
      id: "que-es-lasik",
      title: "¿En qué consiste la cirugía LASIK?",
      content: (
        <>
          <p>
            La cirugía LASIK usa un láser para cambiar la forma de la córnea y
            ayudar a que la visión sea más clara. Funciona mejor para adultos
            con miopía, hipermetropía o astigmatismo, pero no puede corregir la
            presbicia.
          </p>
          <p>
            Para que el LASIK funcione correctamente, su visión debe ser estable
            (es decir que su receta de anteojos o lentes de contacto permanezca
            igual a través del tiempo).
          </p>
        </>
      ),
    },
    {
      id: "es-lasik-para-mi",
      title: "¿Es la cirugía LASIK adecuada para mí?",
      content: (
        <>
          <p>
            Para saber si la cirugía LASIK es adecuada para usted, necesitará un
            examen completo de ojos con dilatación de las pupilas.
          </p>
          <p>
            La cirugía LASIK no es adecuada para todas las personas. Algunas
            afecciones oculares pueden aumentar el riesgo de complicaciones,
            entre ellas: queratocono, infecciones oculares, síndrome del ojo
            seco, glaucoma, cataratas o pupilas grandes.
          </p>
        </>
      ),
    },
    {
      id: "beneficios-de-lasik",
      title: "¿Cuáles son los beneficios de la cirugía LASIK?",
      content: (
        <p>
          Después de la cirugía LASIK, la mayoría de las personas ve lo
          suficientemente bien como para dejar de usar anteojos o lentes de
          contacto durante la mayoría de sus actividades diarias. Sin embargo,
          como la presbicia avanza con la edad, la mayoría de las personas
          seguirán necesitando anteojos para leer en algún momento.
        </p>
      ),
    },
    {
      id: "riesgos-de-lasik",
      title: "¿Cuáles son los riesgos de la cirugía LASIK?",
      content: (
        <>
          <p>
            La cirugía LASIK, al igual que cualquier otra cirugía, puede causar
            efectos secundarios. Los más comunes incluyen resequedad de los
            ojos, ver resplandores o halos, visión doble y sensibilidad a la
            luz. Estos efectos suelen desaparecer después de unos meses.
          </p>
          <p>
            En raras ocasiones, pueden ocurrir complicaciones más serias como
            infecciones, problemas de sanación o incluso una pérdida de visión
            que podría ser permanente. Es importante discutir todos los riesgos
            y beneficios con su oculista.
          </p>
        </>
      ),
    },
    {
      id: "durante-la-cirugia",
      title: "¿Qué sucede durante la cirugía LASIK?",
      content: (
        <>
          <p>
            Justo antes de la cirugía, el médico le pondrá gotas en el ojo para
            adormecerlo. Durante el procedimiento, el cirujano crea un pequeño
            colgajo en la córnea, lo levanta y utiliza un láser programado para
            remodelar el tejido corneal. Finalmente, el colgajo se vuelve a
            colocar en su lugar.
          </p>
        </>
      ),
    },
    {
      id: "recuperacion-lasik",
      title: "¿Cuánto tiempo toma la recuperación?",
      content: (
        <>
          <p>
            Inmediatamente después de la cirugía, el ojo podría estar irritado y
            su visión será borrosa. Necesitará que alguien lo lleve a casa.
          </p>
          <p>
            Podrá ver después de la cirugía, pero el ojo tardará de 2 a 3 meses
            en terminar de sanar por completo. Su visión se volverá más clara a
            medida que el ojo va sanando.
          </p>
        </>
      ),
    },
    {
      id: "otros-tipos-cirugia",
      title: "¿Cuáles son los otros tipos de cirugía refractiva?",
      content: (
        <>
          <p>Las alternativas a la cirugía LASIK incluyen:</p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>LASEK (queratomileusis epitelial con láser)</li>
            <li>EpiLasik</li>
            <li>Implante de lentes intraoculares (LIO) fáquicos</li>
            <li>Queratectomía fotorrefractiva (PRK)</li>
          </ul>
          <p className="mt-4">
            Su oculista puede hablar con usted sobre los diferentes tipos y los
            riesgos y beneficios de cada cirugía.
          </p>
          <div className="bg-blue-50 mt-6 p-4 border-blue-500 border-l-4">
            <p className="font-bold">¡Lleve sus anteojos de sol!</p>
            <p>
              Sus ojos podrían quedar sensibles a la luz durante algunas horas
              después de su examen. Los anteojos de sol pueden ayudar, así que
              llévelos a la cita si los tiene.
            </p>
          </div>
        </>
      ),
    },
  ],
};

export const retinopatiaDiabetica: BlogPost = {
  id: "retinopatia-diabetica",
  title: "A simple vista: Retinopatía diabética",
  description:
    "La retinopatía diabética es una afección del ojo que puede causar pérdida de visión y ceguera en personas con diabetes. Afecta los vasos sanguíneos de la retina.",
  coverImage: "/images/blog/diabetic-retinopathy-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "que-es",
    "sintomas",
    "riesgo",
    "causas",
    "diagnostico",
    "prevencion",
    "tratamiento",
  ],
  sections: [
    {
      id: "que-es",
      title: "¿Qué es la retinopatía diabética?",
      content: (
        <>
          <p>
            La retinopatía diabética es una afección del ojo que puede causar
            pérdida de visión y ceguera en personas con diabetes. Afecta los
            vasos sanguíneos de la retina (la capa de tejido sensible a la luz
            en la parte de atrás del ojo).
          </p>
          <p>
            Si usted tiene diabetes, es importante que se haga un examen
            completo de ojos con dilatación de las pupilas por lo menos una vez
            al año. Detectarla temprano puede ayudarle a tomar medidas para
            proteger su visión.
          </p>
          <div className="bg-blue-50 mt-6 p-4 border-blue-500 border-l-4">
            <p className="font-bold">
              Otros tipos de enfermedad ocular diabética
            </p>
            <p>
              La diabetes también aumenta el riesgo de desarrollar cataratas (de
              2 a 5 veces más propenso) y glaucoma de ángulo abierto (casi
              duplica el riesgo).
            </p>
          </div>
        </>
      ),
    },
    {
      id: "sintomas",
      title: "¿Cuáles son los síntomas de la retinopatía diabética?",
      content: (
        <>
          <p>
            Las primeras etapas por lo general no presentan síntomas. Algunas
            personas notan cambios leves, como dificultad para leer o ver de
            lejos.
          </p>
          <p>
            En etapas avanzadas, puede ver manchas oscuras flotantes o líneas
            que parecen telarañas. Esto ocurre cuando los vasos sanguíneos
            sangran. Es crucial recibir tratamiento de inmediato para evitar que
            empeore.
          </p>
          <p className="mt-4 font-semibold">Otras complicaciones graves:</p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              <strong>Edema macular diabético (EMD):</strong> Causa visión
              borrosa debido a la inflamación en la mácula.
            </li>
            <li>
              <strong>Glaucoma neovascular:</strong> Nuevos vasos sanguíneos
              anormales bloquean el drenaje del ojo, aumentando la presión.
            </li>
            <li>
              <strong>Desprendimiento de la retina:</strong> Se forman
              cicatrices que tiran de la retina y la separan de su posición.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "riesgo",
      title: "¿Corro riesgo de desarrollar retinopatía diabética?",
      content: (
        <>
          <p>
            Cualquier persona con diabetes (tipo 1, tipo 2 o gestacional) puede
            desarrollar retinopatía diabética. El riesgo aumenta cuanto más
            tiempo ha tenido diabetes.
          </p>
          <p>
            Las mujeres con diabetes que quedan embarazadas corren un alto
            riesgo, por lo que deben hacerse un examen ocular lo antes posible.
          </p>
        </>
      ),
    },
    {
      id: "causas",
      title: "¿Qué causa la retinopatía diabética?",
      content: (
        <p>
          Es causada por una alta concentración de azúcar en la sangre. Con el
          tiempo, el exceso de azúcar daña los pequeños vasos sanguíneos que van
          a la retina, haciendo que goteen o sangren. En respuesta, el ojo crea
          nuevos vasos sanguíneos que son más frágiles y propensos a sangrar,
          empeorando el problema.
        </p>
      ),
    },
    {
      id: "diagnostico",
      title: "¿Cómo se diagnostica la retinopatía diabética?",
      content: (
        <p>
          Los oculistas pueden detectarla durante un examen de ojos con
          dilatación de las pupilas. El examen es simple, no duele y permite al
          médico revisar la retina en busca de daños. Si tiene diabetes, es muy
          importante que se haga estos exámenes con regularidad.
        </p>
      ),
    },
    {
      id: "prevencion",
      title: "¿Qué puedo hacer para prevenirla?",
      content: (
        <p>
          Controlar su diabetes es la mejor manera de reducir el riesgo. Esto
          incluye mantener los niveles de azúcar en la sangre estables mediante
          actividad física, una dieta saludable y el uso adecuado de sus
          medicamentos. Controlar la presión arterial y el colesterol también es
          fundamental.
        </p>
      ),
    },
    {
      id: "tratamiento",
      title: "¿Cuál es el tratamiento para la retinopatía diabética?",
      content: (
        <>
          <p>
            En las primeras etapas, su oculista probablemente solo hará un
            seguimiento. En etapas avanzadas, es importante comenzar el
            tratamiento de inmediato para evitar que la visión empeore.
          </p>
          <p className="mt-4 font-semibold">
            Los tratamientos comunes incluyen:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              <strong>Inyecciones:</strong> Medicamentos como los anti-VEGF o
              corticoesteroides se inyectan en el ojo para retardar o revertir
              el daño.
            </li>
            <li>
              <strong>Tratamiento con láser:</strong> Puede ayudar a sellar los
              vasos sanguíneos que gotean.
            </li>
            <li>
              <strong>Cirugía (vitrectomía):</strong> Se realiza para eliminar
              la sangre del vítreo y el tejido cicatricial de la retina.
            </li>
          </ul>
          <Link
            href="#"
            className="inline-block mt-4 font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre las inyecciones
          </Link>
        </>
      ),
    },
  ],
};

export const inyeccionesAfeccionesOculares: BlogPost = {
  id: "inyecciones-para-afecciones-oculares",
  title: "Inyecciones para tratar las afecciones oculares",
  description:
    "Medicamentos como los anti-VEGF y los esteroides se administran mediante inyecciones en el ojo para tratar diversas afecciones de la retina.",
  coverImage: "/images/blog/eye-injections-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "proceso-inyeccion",
    "medicamentos-anti-vegf",
    "esteroides",
    "tratamiento-laser",
  ],
  sections: [
    {
      id: "proceso-inyeccion",
      title: "¿Cómo es el proceso de una inyección en el ojo?",
      content: (
        <>
          <p>
            Cuando reciba inyecciones en su ojo, su oculista primero le pondrá
            un medicamento anestésico para adormecer el ojo y que se sienta más
            cómodo. Luego, limpiará el ojo para prevenir infecciones antes de
            aplicar el medicamento con una aguja muy pequeña.
          </p>
          <p>
            Las inyecciones no cambian su visión de inmediato. Es posible que
            sienta una leve irritación o vea burbujas de aire flotantes durante
            uno o dos días, lo cual es normal.
          </p>
          <div className="bg-red-50 mt-4 mb-6 p-4 border-red-500 border-l-4">
            <p className="font-bold">¡Atención!</p>
            <p>
              Comuníquese con su oculista de inmediato si tiene dolor o
              problemas de visión que empeoran después de una inyección, ya que
              podrían ser señales de una infección.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "medicamentos-anti-vegf",
      title: "Medicamentos anti-VEGF",
      content: (
        <>
          <p>
            En ciertas enfermedades oculares, el cuerpo produce en exceso una
            proteína llamada VEGF, que causa derrames e inflamación en la
            retina. Los medicamentos anti-VEGF bloquean esta proteína y pueden
            mejorar la visión.
          </p>
          <p>Su oculista podría recetarle inyecciones anti-VEGF si tiene:</p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Retinopatía diabética</li>
            <li>Edema macular diabético (EMD)</li>
            <li>Degeneración macular relacionada con la edad (AMD húmeda)</li>
            <li>Oclusión de venas de la retina</li>
          </ul>
          <p className="mt-4">
            La mayoría de las personas necesitan inyecciones una vez al mes al
            principio, y con el tiempo la frecuencia puede disminuir.
          </p>
        </>
      ),
    },
    {
      id: "esteroides",
      title: "Esteroides",
      content: (
        <>
          <p>
            Si tiene edema macular, uveítis u otra enfermedad que causa
            inflamación en el ojo, su médico podría sugerirle un tratamiento con
            esteroides para reducir la hinchazón.
          </p>
          <p>
            Además de las inyecciones, los esteroides pueden administrarse en
            gotas o mediante un implante especial en el ojo que libera pequeñas
            dosis a lo largo del tiempo.
          </p>
          <p className="mt-2">
            Es importante saber que los esteroides pueden aumentar su riesgo de
            cataratas y glaucoma, por lo que necesitará exámenes de los ojos con
            regularidad.
          </p>
        </>
      ),
    },
    {
      id: "tratamiento-laser",
      title: "Tratamiento con láser",
      content: (
        <>
          <p>
            Para reducir la inflamación de la retina, los oculistas pueden usar
            láseres para contraer los vasos sanguíneos y detener el goteo de
            sangre.
          </p>
          <Link
            href="/salud-visual/tratamiento-laser-retinopatia"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre los tratamientos con láser
          </Link>
        </>
      ),
    },
  ],
};

export const tratamientoLaserRetinopatia: BlogPost = {
  id: "tratamiento-laser-retinopatia",
  title: "Tratamiento con láser para la retinopatía diabética",
  description:
    "Si usted tiene retinopatía diabética avanzada, el médico podría usar un tipo de tratamiento con láser conocido como “cirugía con láser de dispersión”.",
  coverImage: "/images/blog/laser-treatment-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "que-puedo-esperar",
    "es-adecuado-para-mi",
    "cirugia-vitrectomia",
  ],
  sections: [
    {
      id: "que-puedo-esperar",
      title: "¿Qué puedo esperar de un tratamiento con láser?",
      content: (
        <>
          <p>
            Puede recibir este tratamiento con láser en el consultorio de su
            oculista. Durante el procedimiento, el médico le pondrá gotas para
            adormecer el ojo y luego dirigirá un haz de luz intensa (láser)
            hacia la retina usando un lente especial.
          </p>
          <p>
            Durante el tratamiento, usted podría ver destellos de luz y sentir
            un leve ardor. Su visión quedará borrosa durante el resto del día,
            por lo que necesitará que alguien lo lleve de regreso a casa. Es
            posible que necesite más de una sesión para completar el
            tratamiento.
          </p>
        </>
      ),
    },
    {
      id: "es-adecuado-para-mi",
      title: "¿Es el tratamiento con láser adecuado para mí?",
      content: (
        <>
          <p>
            Como es el caso con cualquier cirugía, este tratamiento tiene
            riesgos. Puede causar una pérdida parcial de la visión periférica
            (lateral), de la visión de los colores y de la visión nocturna.
          </p>
          <p>
            Sin embargo, para muchas personas con retinopatía diabética
            avanzada, los beneficios de prevenir una ceguera mayor superan a los
            riesgos. Consulte con su médico si la cirugía con láser de
            dispersión es adecuada para usted.
          </p>
        </>
      ),
    },
    {
      id: "cirugia-vitrectomia",
      title: "Cirugía del ojo (vitrectomía)",
      content: (
        <>
          <p>
            Si su retina está sangrando mucho o usted tiene muchas cicatrices en
            el ojo, el oculista podría recomendarle un tipo de cirugía conocida
            como vitrectomía.
          </p>
          <Link
            href="/salud-visual/vitrectomia"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre la vitrectomía
          </Link>
        </>
      ),
    },
  ],
};

export const vitrectomia: BlogPost = {
  id: "vitrectomia",
  title: "Vitrectomía",
  description:
    "Si tiene una afección ocular en la retina o el vítreo, su oculista podría recomendarle un tipo de cirugía conocida como vitrectomía.",
  coverImage: "/images/blog/vitrectomy-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "afecciones-que-trata",
    "durante-la-cirugia",
    "recuperacion",
    "investigaciones-recientes",
  ],
  sections: [
    {
      id: "afecciones-que-trata",
      title: "¿Qué afecciones oculares trata la vitrectomía?",
      content: (
        <>
          <p>
            La vitrectomía puede ayudar a los médicos a tratar varias afecciones
            oculares diferentes. Por ejemplo, podría ser parte del plan de
            tratamiento para:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              <strong>El desprendimiento de la retina,</strong> ayudando a su
              médico a reparar cualquier agujero o desgarro.
            </li>
            <li>
              <strong>La retinopatía diabética,</strong> reemplazando el vítreo
              nublado y ayudando a reparar las fuentes de sangrado en la retina.
            </li>
          </ul>
          <p className="mt-4">
            Como cualquier otra cirugía, este tratamiento tiene riesgos. Hable
            con su médico sobre los riesgos y beneficios de la vitrectomía.
          </p>
        </>
      ),
    },
    {
      id: "durante-la-cirugia",
      title: "¿Qué pasa durante la vitrectomía?",
      content: (
        <>
          <p>
            Durante la cirugía, el oculista le hará aberturas muy pequeñas en la
            pared del ojo y extraerá la mayor parte del vítreo con una
            herramienta de succión.
          </p>
          <p>
            Dependiendo de su plan de tratamiento, su médico podría además usar
            un láser, inyectar una burbuja de aire, gas o aceite de silicona en
            el ojo para mantener la retina en su lugar.
          </p>
        </>
      ),
    },
    {
      id: "recuperacion",
      title: "¿Cuánto tiempo toma recuperarse?",
      content: (
        <>
          <p>
            La mayoría de las personas regresan a casa el mismo día y
            necesitarán que alguien las lleve. Su ojo podría estar inflamado y
            enrojecido durante varias semanas.
          </p>
          <p className="mt-4 font-semibold">
            Después de la cirugía, usted deberá:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Usar un parche en el ojo, generalmente durante un día.</li>
            <li>
              Usar gotas para los ojos para reducir la inflamación y prevenir
              infecciones.
            </li>
            <li>
              Evitar actividades como conducir, hacer ejercicio intenso y
              levantar objetos pesados.
            </li>
            <li>
              Tomar tiempo libre de su trabajo, por lo general de 2 a 4 semanas.
            </li>
          </ul>
          <p className="mt-4">
            Si su médico le pone una burbuja de aire o gas en el ojo, tendrá que
            mantener la cabeza en una posición determinada y evitar viajar en
            avión o ir a zonas de gran altitud.
          </p>
        </>
      ),
    },
    {
      id: "investigaciones-recientes",
      title: "Investigaciones Recientes",
      content: (
        <>
          <p>
            Los científicos están estudiando mejores formas de detectar, tratar
            y prevenir la pérdida de visión en las personas con diabetes y otras
            afecciones como la degeneración macular.
          </p>
          <Link
            href="/salud-visual/degeneracion-macular"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre la degeneración macular
          </Link>
        </>
      ),
    },
  ],
};

export const degeneracionMacular: BlogPost = {
  id: "degeneracion-macular-relacionada-con-la-edad",
  title: "Degeneración macular relacionada con la edad (AMD)",
  description:
    "La degeneración macular relacionada con la edad (AMD) es una enfermedad ocular que puede nublar la visión central. Se presenta cuando el envejecimiento daña la mácula.",
  coverImage: "/images/blog/amd-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "tipos-y-etapas",
    "sintomas",
    "riesgo",
    "prevencion",
    "diagnostico",
    "tratamiento",
    "vivir-con-baja-vision",
  ],
  sections: [
    {
      id: "tipos-y-etapas",
      title: "¿Cuáles son los tipos y etapas de la AMD?",
      content: (
        <>
          <p>Hay 2 tipos de AMD: seca y húmeda.</p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              <strong>AMD seca (atrófica):</strong> Es la más común y ocurre
              cuando la mácula se vuelve más fina con la edad. Progresa
              lentamente a través de 3 etapas: temprana, intermedia y avanzada.
              No existe un tratamiento para la etapa avanzada.
            </li>
            <li>
              <strong>AMD húmeda (neovascular):</strong> Es menos común pero
              causa una pérdida de visión más rápida. Ocurre cuando crecen vasos
              sanguíneos anormales que dañan la mácula. Afortunadamente, existen
              opciones de tratamiento para este tipo.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "sintomas",
      title: "¿Cuáles son los síntomas de la AMD?",
      content: (
        <>
          <p>
            Los síntomas de la AMD dependen de la etapa. La AMD seca temprana no
            causa ningún síntoma.
          </p>
          <p>
            En la etapa intermedia, algunas personas notan un leve desenfoque en
            su visión central o dificultad para ver con poca luz.
          </p>
          <p>
            En la AMD avanzada (húmeda o seca), las líneas rectas pueden empezar
            a verse onduladas o torcidas. También pueden aparecer áreas borrosas
            o puntos ciegos en la visión central.{" "}
            <strong>
              Si nota que las líneas rectas se ven onduladas, consulte a su
              oculista de inmediato.
            </strong>
          </p>
        </>
      ),
    },
    {
      id: "riesgo",
      title: "¿Corro riesgo de desarrollar degeneración macular?",
      content: (
        <>
          <p>
            El riesgo de desarrollar la AMD aumenta con la edad, especialmente
            después de los 55 años. Otros factores de riesgo incluyen:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Tener antecedentes familiares de AMD.</li>
            <li>Ser de raza caucásica.</li>
            <li>Fumar.</li>
          </ul>
          <p className="mt-4">
            Dado que la AMD temprana no presenta síntomas, es crucial hacerse
            exámenes de los ojos con regularidad.
          </p>
        </>
      ),
    },
    {
      id: "prevencion",
      title: "¿Cómo puedo reducir mi riesgo?",
      content: (
        <p>
          Las investigaciones demuestran que puede reducir su riesgo de AMD o
          retardar su progresión si toma decisiones saludables como dejar de
          fumar, hacer ejercicio, mantener una buena presión arterial y niveles
          de colesterol, y consumir una dieta rica en pescado y verduras de
          hojas verde oscuro.
        </p>
      ),
    },
    {
      id: "diagnostico",
      title: "¿Cómo se diagnostica la AMD?",
      content: (
        <p>
          Los oculistas pueden detectar la AMD como parte de un examen completo
          de los ojos con dilatación de las pupilas. También pueden usar una
          prueba llamada Tomografía de Coherencia Óptica (OCT), que toma
          imágenes detalladas del interior de su ojo.
        </p>
      ),
    },
    {
      id: "tratamiento",
      title: "¿Cuál es el tratamiento para la AMD?",
      content: (
        <>
          <p>El tratamiento para la AMD depende de la etapa y el tipo.</p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              <strong>AMD temprana:</strong> No hay tratamiento, solo
              seguimiento regular.
            </li>
            <li>
              <strong>AMD intermedia:</strong> Suplementos dietéticos especiales
              (vitaminas y minerales como los de la fórmula AREDS 2) pueden
              evitar que avance.
            </li>
            <li>
              <strong>AMD húmeda:</strong> Los tratamientos pueden detener una
              mayor pérdida de visión e incluyen medicamentos anti-VEGF
              inyectados en el ojo y terapia fotodinámica (una combinación de
              inyecciones y láser).
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "vivir-con-baja-vision",
      title: "Vivir con baja visión e investigaciones recientes",
      content: (
        <>
          <p>
            Vivir con la pérdida de visión por AMD puede ser un desafío. La
            rehabilitación de la vista, junto con dispositivos para la baja
            visión, puede ayudarlo a aprender las habilidades que necesita para
            mantenerse independiente y activo.
          </p>
          <p>
            Los científicos están estudiando activamente qué causa la AMD y cómo
            tratarla mejor, incluyendo investigaciones sobre trasplantes de
            células madre.
          </p>
          <Link
            href="/salud-visual/cataratas"
            className="inline-block mt-4 font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre las cataratas
          </Link>
        </>
      ),
    },
  ],
};

export const cataratas: BlogPost = {
  id: "cataratas",
  title: "A simple vista: Cataratas",
  description:
    "Una catarata es un área nublada en el cristalino del ojo. Son muy comunes a medida que envejece y pueden hacer que su visión se vuelva borrosa, difusa o menos colorida.",
  coverImage: "/images/blog/cataracts-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "que-son-las-cataratas",
    // Se agregarán más IDs a medida que se añada contenido
  ],
  sections: [
    {
      id: "que-son-las-cataratas",
      title: "¿Qué son las cataratas?",
      content: (
        <>
          <p>
            Una catarata es un área nublada en el cristalino, es decir, el
            “lente” de su ojo (la parte clara de su ojo que ayuda a enfocar la
            luz). Las cataratas son muy comunes a medida que usted envejece. En
            efecto, más de la mitad de todos los estadounidenses de 80 años o
            más tiene cataratas o ha tenido cirugía para eliminarlas.
          </p>
          <p>
            Al principio, es posible que usted no note que tiene una catarata.
            Pero con el paso del tiempo, las cataratas pueden hacer que su
            visión se haga borrosa, difusa, o menos colorida. Podría tener
            problemas para leer o realizar otras actividades cotidianas.
          </p>
          <p>
            La buena noticia es que la cirugía puede eliminar las cataratas. La
            cirugía de cataratas es segura y corrige los problemas de visión
            causados por esta afección.
          </p>
        </>
      ),
    },
  ],
};

export const graficoCataratas: BlogPost = {
  id: "grafico-de-cataratas",
  title: "¿Qué tipos de cataratas existen?",
  description:
    "La mayoría de las cataratas están relacionadas con la edad, pero también pueden desarrollarse por otras razones, como una lesión ocular o una cirugía previa.",
  coverImage: "/images/blog/cataract-types-cover.jpg", // Asigna la ruta de imagen correcta
  // No se especifica 'sectionIds' porque es un post corto.
  sections: [
    {
      id: "tipos-de-cataratas",
      title: "¿Qué tipos de cataratas existen?",
      content: (
        <>
          <p>
            La mayoría de las cataratas están relacionadas con la edad. Surgen
            debido a los cambios normales en sus ojos a medida que envejecemos.
            Pero usted puede desarrollar cataratas por otras razones, como por
            ejemplo, después de una lesión en los ojos o después de otra cirugía
            relacionada con otro problema ocular (como el glaucoma).
          </p>
          <p>
            No importa qué tipo de catarata tiene, usted necesitará cirugía para
            tratarla.
          </p>
          <Link
            href="/salud-visual/cataratas"
            className="inline-block mt-2 font-semibold text-blue-600 hover:underline"
          >
            Aprenda más sobre los tipos de cataratas
          </Link>
        </>
      ),
    },
  ],
};

export const tiposDeCatarata: BlogPost = {
  id: "tipos-de-catarata",
  title: "Tipos de catarata",
  description:
    "La mayoría de las cataratas están relacionadas con la edad, pero también pueden aparecer por otras razones. Conozca los 5 tipos principales de cataratas.",
  coverImage: "/images/blog/cataract-types-detail-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "relacionada-con-la-edad",
    "por-trauma",
    "por-radiacion",
    "pediatricas",
    "secundarias",
    "sintomas",
    "riesgo",
    "causas",
  ],
  sections: [
    {
      id: "relacionada-con-la-edad",
      title: "Cataratas relacionada con la edad",
      content: (
        <>
          <p>
            A medida que usted envejece, puede desarrollar cataratas debido a
            cambios naturales en el cristalino del ojo. Este es el tipo de
            catarata más común. Es más probable que las desarrolle si fuma, toma
            demasiado alcohol, tiene diabetes, antecedentes familiares o toma
            esteroides.
          </p>
        </>
      ),
    },
    {
      id: "por-trauma",
      title: "Cataratas por trauma",
      content: (
        <p>
          Las lesiones oculares graves pueden dañar el cristalino y causar una
          catarata. La catarata podría formarse rápidamente después de la
          lesión, o podría formarse muchos años después.
        </p>
      ),
    },
    {
      id: "por-radiacion",
      title: "Cataratas por radiación",
      content: (
        <p>
          Algunos tipos de radiación pueden causar cataratas. Estos incluyen los
          rayos ultravioletas (UV) del sol y la radioterapia para el cáncer.
        </p>
      ),
    },
    {
      id: "pediatricas",
      title: "Cataratas pediátricas",
      content: (
        <>
          <p>
            Los niños también pueden tener cataratas. Pueden nacer con ellas
            (congénitas) o desarrollarlas más adelante. Suelen ser genéticas,
            pero también pueden ocurrir por problemas durante el embarazo o
            enfermedades infantiles.
          </p>
          <p>
            Cuando las cataratas pediátricas causan problemas de visión,
            necesitan tratamiento inmediato para evitar otros problemas como la
            ambliopía (ojo perezoso).
          </p>
        </>
      ),
    },
    {
      id: "secundarias",
      title: "Cataratas secundarias",
      content: (
        <>
          <p>
            Después de la cirugía de cataratas, existe la posibilidad de
            desarrollar cicatrices en el tejido del ojo, que pueden hacer que su
            visión se nuble nuevamente. Esto es llamado “catarata secundaria”.
          </p>
          <p>
            El tratamiento para la catarata secundaria es rápido y no duele. Su
            oculista usará un láser (capsulotomía con láser YAG) para hacer una
            abertura en la parte nublada, y la visión suele volver a la
            normalidad en unos pocos días.
          </p>
        </>
      ),
    },
    {
      id: "sintomas",
      title: "¿Cuáles son los síntomas de las cataratas?",
      content: (
        <>
          <p>
            Usted podría no tener síntomas al principio. Pero a medida que las
            cataratas crecen, podría notar que:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Su visión está nublada o borrosa.</li>
            <li>Los colores se ven opacos.</li>
            <li>No puede ver bien en las noches.</li>
            <li>
              Las luces se ven demasiado brillantes o con un halo alrededor.
            </li>
            <li>Ve doble.</li>
          </ul>
        </>
      ),
    },
    {
      id: "riesgo",
      title: "¿Corro riesgo de tener cataratas?",
      content: (
        <>
          <p>
            Su riesgo de tener cataratas aumenta a medida que envejece. Su
            riesgo aumenta también si usted:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Tiene problemas de salud como diabetes.</li>
            <li>Fuma o consume demasiado alcohol.</li>
            <li>Tiene antecedentes familiares de cataratas.</li>
            <li>Ha tenido alguna lesión o cirugía en el ojo.</li>
            <li>Ha pasado mucho tiempo bajo el sol.</li>
            <li>Toma esteroides.</li>
          </ul>
        </>
      ),
    },
    {
      id: "causas",
      title: "¿Qué causa las cataratas?",
      content: (
        <>
          <p>
            La mayoría de las cataratas se desarrollan por cambios normales en
            los ojos a medida que envejecemos.
          </p>
          <p>
            Alrededor de los 40 años, las proteínas de los cristalinos comienzan
            a desintegrarse y se aglomeran. Esta aglomeración crea un área
            nublada en los cristalinos, llamada catarata. Con el tiempo, la
            catarata empeora y nubla un área más grande del cristalino.
          </p>
          <Link
            href="/salud-visual/causas-cataratas"
            className="inline-block mt-2 font-semibold text-blue-600 hover:underline"
          >
            Aprenda más sobre las causas de las cataratas
          </Link>
        </>
      ),
    },
  ],
};

export const causasDeLasCataratas: BlogPost = {
  id: "causas-de-las-cataratas",
  title: "Causas de las cataratas",
  description:
    "La mayoría de las cataratas se desarrollan por cambios naturales en sus ojos a medida que envejece. Conozca cómo se forman y los factores de riesgo.",
  coverImage: "/images/blog/cataract-causes-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "como-se-forman",
    "que-las-causa",
    "como-prevenir",
    "diagnostico",
    "tratamiento",
  ],
  sections: [
    {
      id: "como-se-forman",
      title: "¿Cómo se forman las cataratas?",
      content: (
        <>
          <p>
            Las cataratas se forman cuando las proteínas del cristalino del ojo
            se agrupan y hacen que el cristalino se nuble. Normalmente, el
            cristalino es transparente y ayuda a enfocar la luz en la retina
            para que pueda ver con claridad.
          </p>
          <p>
            Si las proteínas en el cristalino se agrupan, este se nubla. Con el
            tiempo, los grupos de proteínas se hacen más grandes y más gruesos,
            lo que dificulta la visión. Sus cristalinos podrían además volverse
            amarillos o marrones, lo que puede cambiarle la forma en que usted
            ve los colores.
          </p>
        </>
      ),
    },
    {
      id: "que-las-causa",
      title: "¿Qué causa la aparición de las cataratas?",
      content: (
        <>
          <p>
            Después de los 40 años, las proteínas en el cristalino del ojo
            comienzan a descomponerse de forma natural. Los factores que
            aumentan la probabilidad de desarrollar cataratas incluyen:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Historial familiar de cataratas</li>
            <li>Tener diabetes</li>
            <li>Una lesión ocular grave o cirugía ocular previa</li>
            <li>Tomar medicamentos esteroides</li>
            <li>Recibir radioterapia</li>
            <li>Fumar o tomar demasiado alcohol</li>
            <li>Pasar demasiado tiempo bajo el sol sin protección</li>
          </ul>
        </>
      ),
    },
    {
      id: "como-prevenir",
      title: "¿Cómo puedo prevenir las cataratas?",
      content: (
        <>
          <p>
            Usted puede tomar medidas para proteger sus ojos de las cataratas:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              <strong>Proteja sus ojos del sol:</strong> Use un sombrero y
              anteojos de sol que bloqueen los rayos UV.
            </li>
            <li>
              <strong>Proteja sus ojos de las lesiones:</strong> Use protección
              ocular durante deportes o al usar herramientas eléctricas.
            </li>
            <li>
              <strong>Deje de fumar.</strong>
            </li>
            <li>
              <strong>Prefiera alimentos saludables:</strong> Coma muchas
              frutas, verduras de hojas verdes, nueces y granos enteros.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "diagnostico",
      title: "¿Cómo se diagnostican las cataratas?",
      content: (
        <p>
          El oculista puede comprobar la presencia de cataratas como parte de un
          examen de ojos con dilatación de las pupilas. Si usted tiene 60 años
          de edad o más, hágase este examen cada 1 a 2 años. El examen es
          simple, no duele y permite al médico detectar cataratas y otros
          problemas oculares.
        </p>
      ),
    },
    {
      id: "tratamiento",
      title: "¿Cuál es el tratamiento para las cataratas?",
      content: (
        <>
          <p>
            La cirugía es la única forma de eliminar una catarata, pero es
            posible que no la necesite inmediatamente. Al principio, puede hacer
            pequeños cambios para manejarlas, como usar luces más brillantes o
            anteojos con una nueva receta.
          </p>
          <p>
            Su oculista podría sugerirle cirugía si sus cataratas afectan sus
            actividades diarias. Durante la cirugía de cataratas, el cirujano
            extraerá el cristalino nublado y lo reemplazará con un nuevo lente
            artificial (lente intraocular).
          </p>
          <Link
            href="/salud-visual/cirugia-cataratas"
            className="inline-block mt-2 font-semibold text-blue-600 hover:underline"
          >
            Aprenda más sobre la cirugía de cataratas
          </Link>
        </>
      ),
    },
  ],
};

export const cirugiaDeCataratas: BlogPost = {
  id: "cirugia-de-cataratas",
  title: "Cirugía de cataratas",
  description:
    "La cirugía es la única forma de eliminar las cataratas. Aprenda quién la necesita, cómo prepararse y qué esperar durante y después del procedimiento.",
  coverImage: "/images/blog/cataract-surgery-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "quien-necesita-cirugia",
    "como-prepararse",
    "que-sucede-durante",
    "que-sucede-despues",
    "vision-despues-de-cirugia",
    "riesgos-de-cirugia",
    "cataratas-secundarias",
  ],
  sections: [
    {
      id: "quien-necesita-cirugia",
      title: "¿Quién necesita una cirugía de cataratas?",
      content: (
        <>
          <p>
            Su oculista probablemente le sugerirá una cirugía de cataratas si
            usted tiene pérdida de visión que afecta sus actividades cotidianas,
            como leer, conducir o mirar televisión.
          </p>
          <p>
            No es necesario que se apresure a someterse a una cirugía. Consulte
            con su oculista sobre los riesgos y beneficios para decidir si es
            adecuada para usted. Si tiene cataratas en ambos ojos, necesitará
            cirugía en cada ojo por separado.
          </p>
        </>
      ),
    },
    {
      id: "como-prepararse",
      title: "¿Cómo me preparo para la cirugía de cataratas?",
      content: (
        <>
          <p>
            Alrededor de una semana antes de su cirugía, su oculista medirá su
            ojo para seleccionar el lente intraocular (IOL) correcto. Además,
            podría pedirle que:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              Use gotas especiales para los ojos para prevenir infecciones.
            </li>
            <li>Detenga temporalmente el consumo de algunos medicamentos.</li>
            <li>No coma ni beba nada varias horas antes de su cirugía.</li>
            <li>Lave sus párpados y pestañas para eliminar gérmenes.</li>
          </ul>
          <p className="mt-4">
            El día de la cirugía, asegúrese de ir con un amigo o familiar, ya
            que no podrá conducir de regreso a casa.
          </p>
        </>
      ),
    },
    {
      id: "que-sucede-durante",
      title: "¿Qué sucede durante la cirugía de cataratas?",
      content: (
        <>
          <p>
            Durante la cirugía, que dura aproximadamente una hora y es casi
            indolora, su oculista retirará el cristalino opaco y lo reemplazará
            con un lente artificial (IOL).
          </p>
          <p>
            Por lo general, estará despierto pero relajado. El cirujano le
            aplicará gotas para adormecer el ojo, hará un pequeño corte,
            desprenderá y sacará el cristalino, y colocará el nuevo lente.
          </p>
        </>
      ),
    },
    {
      id: "que-sucede-despues",
      title: "¿Qué sucede después de la cirugía de cataratas?",
      content: (
        <>
          <p>
            Su oculista le explicará cómo proteger el ojo. Deberá usar gotas
            para los ojos y posiblemente un protector ocular. Es posible que
            deba evitar algunas actividades durante unas semanas, como tocarse
            el ojo o levantar objetos pesados.
          </p>
          <div className="bg-red-50 mt-4 mb-6 p-4 border-red-500 border-l-4">
            <p className="font-bold">¡Atención!</p>
            <p>
              Llame a su oculista de inmediato si nota pérdida de visión, dolor
              intenso que no desaparece, ojos muy rojos o un aumento de
              `&quot;`moscas volantes`&quot;`.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "vision-despues-de-cirugia",
      title: "¿Quedará normal mi visión después de la cirugía?",
      content: (
        <>
          <p>
            Aproximadamente 9 de cada 10 personas que se someten a una cirugía
            de cataratas ven mejor después. La visión podría ser borrosa al
            principio mientras el ojo se recupera.
          </p>
          <p>
            Algunas personas notan que los colores se ven más brillantes. Una
            vez que su ojo se haya curado por completo (unas 8 semanas), es
            posible que necesite una nueva receta para anteojos.
          </p>
        </>
      ),
    },
    {
      id: "riesgos-de-cirugia",
      title: "¿Cuáles son los riesgos de la cirugía de cataratas?",
      content: (
        <>
          <p>
            La cirugía de cataratas es muy segura, pero como con cualquier
            cirugía, hay riesgos. Por ejemplo:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Hinchazón, hemorragia o infecciones.</li>
            <li>Pérdida de visión o visión doble.</li>
            <li>Cambios inusuales en la presión ocular.</li>
            <li>Desprendimiento de retina.</li>
          </ul>
        </>
      ),
    },
    {
      id: "cataratas-secundarias",
      title: "Cataratas secundarias e Investigaciones",
      content: (
        <>
          <p>
            Después de la cirugía, algunas personas pueden desarrollar una
            `&quot;`catarata secundaria`&quot;`, que es cuando la cápsula del
            lente se nubla. Su oculista puede repararla fácilmente con un
            tratamiento con láser rápido e indoloro.
          </p>
          <p>
            Los científicos continúan estudiando qué causa las cataratas para
            identificar mejores tratamientos.
          </p>
          <Link
            href="/salud-visual/glaucoma"
            className="inline-block mt-4 font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre el glaucoma
          </Link>
        </>
      ),
    },
  ],
};

export const glaucoma: BlogPost = {
  id: "glaucoma",
  title: "A simple vista: Glaucoma",
  description:
    "El glaucoma es un grupo de enfermedades de los ojos que pueden causar pérdida de visión y ceguera al dañar el nervio óptico.",
  coverImage: "/images/blog/glaucoma-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: ["que-es-el-glaucoma", "tipos-de-glaucoma"],
  sections: [
    {
      id: "que-es-el-glaucoma",
      title: "¿Qué es el glaucoma?",
      content: (
        <>
          <p>
            El glaucoma es un grupo de enfermedades de los ojos que pueden
            causar pérdida de visión y ceguera al dañar el nervio ubicado en la
            parte de atrás del ojo, conocido como nervio óptico.
          </p>
          <p>
            Los síntomas pueden empezar tan lentos que es posible que no los
            note. La única forma de saber si tiene glaucoma es mediante un
            examen completo de los ojos con dilatación de las pupilas.
          </p>
          <p>
            El glaucoma no tiene cura, pero el tratamiento temprano puede a
            menudo detener el daño y proteger su visión.
          </p>
        </>
      ),
    },
    {
      id: "tipos-de-glaucoma",
      title: "¿Qué tipos de glaucoma existen?",
      content: (
        <>
          <p>
            Existen muchos tipos diferentes de glaucoma, pero el tipo más común
            en los Estados Unidos se conoce como glaucoma de ángulo abierto.
            Este tipo es al que la mayoría de las personas se refiere cuando
            habla de glaucoma.
          </p>
          <p>
            Hay otros tipos de glaucomas menos comunes, como el glaucoma de
            ángulo cerrado y el glaucoma congénito.
          </p>
          <Link
            href="/salud-visual/tipos-de-glaucoma"
            className="inline-block mt-2 font-semibold text-blue-600 hover:underline"
          >
            Obtenga información adicional sobre los tipos de glaucoma
          </Link>
        </>
      ),
    },
  ],
};

export const tiposDeGlaucoma: BlogPost = {
  id: "tipos-de-glaucoma",
  title: "Tipos de glaucoma",
  description:
    "El glaucoma es un grupo de enfermedades oculares que dañan el nervio óptico. Conozca los diferentes tipos, desde los primarios hasta los secundarios.",
  coverImage: "/images/blog/glaucoma-types-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "glaucoma-angulo-abierto",
    "glaucoma-tension-normal",
    "glaucoma-angulo-cerrado",
    "glaucoma-congenito",
    "glaucoma-neovascular",
    "glaucoma-pigmentario",
    "glaucoma-exfoliacion",
    "glaucoma-uveitico",
    "sintomas-y-riesgo",
  ],
  sections: [
    {
      id: "glaucoma-angulo-abierto",
      title: "Glaucoma de ángulo abierto",
      content: (
        <>
          <p>
            Es el tipo más común. Muchas personas no presentan síntomas hasta
            que empiezan a perder la visión periférica. Podría deberse a una
            acumulación de presión ocular que, con el tiempo, lesiona al nervio
            óptico.
          </p>
        </>
      ),
    },
    {
      id: "glaucoma-tension-normal",
      title: "Glaucoma de tensión normal",
      content: (
        <p>
          Es un tipo de glaucoma de ángulo abierto que se presenta en personas
          con presión ocular normal. El riesgo es mayor si tiene antecedentes
          familiares, problemas del corazón o baja presión arterial.
        </p>
      ),
    },
    {
      id: "glaucoma-angulo-cerrado",
      title: "Glaucoma de ángulo cerrado",
      content: (
        <>
          <div className="bg-red-50 mt-4 mb-6 p-4 border-red-500 border-l-4">
            <p className="font-bold">¡Urgencia Médica!</p>
            <p>
              Acuda inmediatamente a un médico si tiene dolor intenso en el ojo,
              náuseas, ojos rojos y visión borrosa repentina.
            </p>
          </div>
          <p>
            En este tipo, el iris bloquea el drenaje del líquido, causando un
            aumento repentino de la presión ocular. Si no se trata, puede causar
            ceguera en solo unos días.
          </p>
        </>
      ),
    },
    {
      id: "glaucoma-congenito",
      title: "Glaucoma congénito",
      content: (
        <>
          <p>
            En el glaucoma congénito, los bebés nacen con un problema ocular que
            impide que el líquido drene normalmente. Es raro, afectando a 1 de
            cada 10,000 bebés.
          </p>
          <p>
            Los síntomas incluyen ojos nublados, sensibilidad a la luz, lagrimeo
            excesivo y ojos más grandes de lo normal. La cirugía temprana
            funciona muy bien para tratarlo.
          </p>
        </>
      ),
    },
    {
      id: "glaucoma-neovascular",
      title: "Glaucoma neovascular",
      content: (
        <p>
          Ocurre cuando el ojo produce un exceso de vasos sanguíneos que
          bloquean el drenaje del líquido. Por lo general, es causado por otra
          afección, como la diabetes o la alta presión arterial.
        </p>
      ),
    },
    {
      id: "glaucoma-pigmentario",
      title: "Glaucoma pigmentario",
      content: (
        <p>
          Ocurre cuando se desprende el pigmento (color) del iris y bloquea el
          drenaje de líquido. Es más común en hombres jóvenes, blancos y miopes.
        </p>
      ),
    },
    {
      id: "glaucoma-exfoliacion",
      title: "Glaucoma de exfoliación",
      content: (
        <p>
          Es un tipo de glaucoma de ángulo abierto que se presenta en personas
          con síndrome de exfoliación, una afección que provoca que un exceso de
          material se deposite y bloquee el drenaje de líquido. Puede progresar
          más rápido que otros tipos.
        </p>
      ),
    },
    {
      id: "glaucoma-uveitico",
      title: "Glaucoma uveítico",
      content: (
        <p>
          Puede ocurrir en personas que tienen uveítis, una afección que causa
          inflamación en el ojo. La inflamación y cicatrización pueden bloquear
          el drenaje del líquido, causando alta presión ocular.
        </p>
      ),
    },
    {
      id: "sintomas-y-riesgo",
      title: "Síntomas, Riesgo y Causas",
      content: (
        <>
          <p>
            Al principio, el glaucoma no suele presentar ningún síntoma. Con el
            tiempo, es posible que pierda lentamente la visión, empezando por la
            visión lateral (periférica).
          </p>
          <p>
            Cualquiera persona puede desarrollar glaucoma, pero usted corre un
            mayor riesgo si tiene más de 60 años o tiene antecedentes familiares
            de glaucoma.
          </p>
          <Link
            href="/salud-visual/causas-glaucoma"
            className="inline-block mt-4 font-semibold text-blue-600 hover:underline"
          >
            Obtenga información adicional sobre las causas del glaucoma
          </Link>
        </>
      ),
    },
  ],
};

export const glaucomaPresionOcular: BlogPost = {
  id: "glaucoma-y-la-presion-ocular",
  title: "El glaucoma y la presión ocular",
  description:
    "Las personas con una presión ocular más alta corren un mayor riesgo de desarrollar glaucoma, una enfermedad que daña el nervio óptico.",
  coverImage: "/images/blog/glaucoma-pressure-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "relacion-presion-glaucoma",
    "alta-presion-ocular",
    "diagnostico-glaucoma",
    "tratamiento-glaucoma",
  ],
  sections: [
    {
      id: "relacion-presion-glaucoma",
      title: "¿Cuál es la relación entre la presión ocular y el glaucoma?",
      content: (
        <>
          <p>
            Las investigaciones demuestran que una presión ocular más alta
            aumenta el riesgo de desarrollar glaucoma. Los expertos creen que
            cuando la presión interna del ojo se eleva demasiado, puede dañar al
            nervio óptico y causar pérdida de la visión.
          </p>
          <p>
            Sin embargo, no todas las personas con alta presión ocular
            desarrollarán glaucoma, y algunas personas con presión ocular normal
            sí lo desarrollan. Depende de la cantidad de presión que su nervio
            óptico puede soportar, y esta cantidad es diferente para cada
            persona.
          </p>
        </>
      ),
    },
    {
      id: "alta-presion-ocular",
      title: "¿Qué pasa cuando usted tiene alta presión ocular?",
      content: (
        <>
          <p>
            La presión en sus ojos se eleva cuando el líquido (humor acuoso) no
            puede drenar normalmente a través de la malla trabecular, un tejido
            esponjoso ubicado en la parte frontal del ojo.
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              En el <strong>glaucoma de ángulo abierto</strong>, el líquido pasa
              demasiado lentamente a través de esta malla.
            </li>
            <li>
              En el <strong>glaucoma de ángulo cerrado</strong>, la abertura
              queda bloqueada completamente por el iris.
            </li>
          </ul>
          <p className="mt-4">
            En ambos casos, el líquido se acumula y aumenta la presión dentro
            del ojo.
          </p>
        </>
      ),
    },
    {
      id: "diagnostico-glaucoma",
      title: "¿Cómo se diagnostica el glaucoma?",
      content: (
        <>
          <p>
            Los oculistas pueden chequear si hay glaucoma como parte de un
            examen completo de ojos con dilatación de las pupilas. El examen es
            simple, no duele e incluye una prueba de campo visual para evaluar
            su visión lateral (periférica).
          </p>
          <div className="bg-blue-50 mt-6 p-4 border-blue-500 border-l-4">
            <p className="font-bold">¿Sabía que…?</p>
            <p>
              El nivel de presión ocular considerado normal varía según la
              persona. Un nivel normal para alguien puede ser alto para otro.
              Por eso, los exámenes regulares son cruciales.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "tratamiento-glaucoma",
      title: "¿Cuál es el tratamiento para el glaucoma?",
      content: (
        <>
          <p>
            Los médicos usan algunos tipos diferentes de tratamiento para el
            glaucoma, incluyendo medicamentos (generalmente gotas para los
            ojos), tratamiento con láser y cirugía.
          </p>
          <p>
            Si tiene glaucoma, es importante empezar el tratamiento de
            inmediato. Si bien el tratamiento no reparará el daño a su visión,
            puede evitar que empeore.
          </p>
          <Link
            href="/salud-visual/medicamentos-glaucoma"
            className="inline-block mt-4 font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre los medicamentos para el glaucoma
          </Link>
        </>
      ),
    },
  ],
};

export const medicamentosParaGlaucoma: BlogPost = {
  id: "medicamentos-para-el-glaucoma",
  title: "Medicamentos para el glaucoma",
  description:
    "El tratamiento más común para el glaucoma son las gotas para los ojos recetadas. Estas gotas reducen la presión en el ojo y previenen el daño al nervio óptico.",
  coverImage: "/images/blog/glaucoma-meds-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "tipos-de-gotas",
    "efectos-secundarios",
    "duracion-del-tratamiento",
    "tratamiento-laser",
  ],
  sections: [
    {
      id: "tipos-de-gotas",
      title:
        "¿Qué tipos de gotas para los ojos pueden ayudar contra el glaucoma?",
      content: (
        <>
          <p>
            Hay muchos medicamentos disponibles para tratar el glaucoma. Algunos
            tipos funcionan ayudando a drenar el líquido del ojo para reducir la
            presión. Estos incluyen:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Prostaglandinas</li>
            <li>Inhibidores de la rho quinasa</li>
            <li>Óxidos nítricos</li>
            <li>Agentes mióticos o colinérgicos</li>
          </ul>
          <p className="mt-4">
            Otros tipos de gotas para los ojos funcionan reduciendo la cantidad
            de líquido que produce el ojo, como los bloqueadores beta y los
            inhibidores de la anhidrasa carbónica.
          </p>
        </>
      ),
    },
    {
      id: "efectos-secundarios",
      title: "¿Cuáles son los efectos secundarios?",
      content: (
        <>
          <p>
            La mayoría de las personas no tiene problemas, pero existe una
            pequeña probabilidad de desarrollar efectos secundarios como:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Escozor, picazón, ardor y enrojecimiento en el ojo.</li>
            <li>Visión borrosa.</li>
            <li>Cambios en el color del ojo o la piel alrededor del ojo.</li>
            <li>Dolores de cabeza o resequedad en la boca.</li>
            <li>
              Cambios en su nivel de energía, latidos del corazón o respiración.
            </li>
          </ul>
          <p className="mt-4">
            Si nota algún efecto secundario, consulte con su médico. Es posible
            que pueda tomar una dosis diferente o un medicamento distinto.
          </p>
        </>
      ),
    },
    {
      id: "duracion-del-tratamiento",
      title: "¿Por cuánto tiempo necesitaré usar las gotas para los ojos?",
      content: (
        <>
          <p>
            Mientras el medicamento se muestre efectivo, probablemente su médico
            querrá que lo siga usando todos los días. Es crucial ser constante
            con el tratamiento para evitar que la visión empeore.
          </p>
          <div className="bg-blue-50 mt-4 p-4 border-blue-500 border-l-4">
            <p className="font-bold">Mantenga el tratamiento</p>
            <p>
              Recuerde que las gotas para los ojos para el glaucoma no lo harán
              sentir diferente ni mejorarán su visión. Su función es impedir que
              su visión empeore. Si no las usa siguiendo las instrucciones,
              podría perder su visión.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "tratamiento-laser",
      title: "Tratamiento con Láser",
      content: (
        <>
          <p>
            Para disminuir la presión en el ojo, los oculistas pueden usar un
            láser para ayudar a que el líquido del ojo pueda drenar. Es un
            procedimiento simple que se puede hacer en la consulta del médico.
          </p>
          <Link
            href="/salud-visual/tratamiento-laser-glaucoma"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre el tratamiento con láser para el
            glaucoma
          </Link>
        </>
      ),
    },
  ],
};

export const tratamientoLaserGlaucoma: BlogPost = {
  id: "tratamiento-laser-glaucoma",
  title: "Tratamiento con láser para el glaucoma",
  description:
    "El tratamiento con láser puede ayudar a tratar algunos tipos de glaucoma. Ayuda a drenar el líquido del ojo, lo que puede ayudar a reducir la presión intraocular.",
  coverImage: "/images/blog/glaucoma-laser-treatment-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "necesito-tratamiento-laser",
    "que-sucede-durante",
    "efectos-secundarios-recuperacion",
    "necesitare-mas-tratamiento",
    "cirugia-para-glaucoma",
  ],
  sections: [
    {
      id: "necesito-tratamiento-laser",
      title: "¿Necesito el tratamiento con láser para mi glaucoma?",
      content: (
        <>
          <p>
            Un tratamiento con láser llamado trabeculoplastia se emplea para
            tratar el glaucoma de ángulo abierto. Existen otros tipos de
            tratamiento con láser que pueden tratar otros tipos de glaucoma.
          </p>
          <p>
            Consulte con su oculista sobre todas sus opciones de tratamiento,
            incluyendo medicamentos, láser y cirugía, para elaborar un plan
            adecuado para usted.
          </p>
        </>
      ),
    },
    {
      id: "que-sucede-durante",
      title: "¿Qué sucede durante el tratamiento con láser?",
      content: (
        <>
          <p>Si usted recibe el tratamiento con láser, su médico:</p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Le pondrá gotas en el ojo para adormecerlo.</li>
            <li>
              Apuntará un láser (un rayo de luz potente) al ojo con unos lentes
              especiales.
            </li>
            <li>
              Utilizará el láser para tratar de ayudar a drenar el líquido del
              ojo.
            </li>
          </ul>
          <p className="mt-4">
            Usted podría ver destellos brillantes de luz durante el tratamiento.
            La mayoría de las personas sienten poco o ningún dolor.
          </p>
        </>
      ),
    },
    {
      id: "efectos-secundarios-recuperacion",
      title: "¿Hay efectos secundarios y cómo es la recuperación?",
      content: (
        <>
          <p>
            Podría tener algo de inflamación, dolor o visión borrosa
            inmediatamente después del tratamiento, por lo que necesitará que
            alguien lo lleve a casa. A veces, el láser puede rayar la córnea o
            causar resequedad, pero esto suele sanar rápidamente.
          </p>
          <p>
            La mayoría de las personas pueden retornar a sus actividades diarias
            normales al día siguiente del tratamiento con láser.
          </p>
        </>
      ),
    },
    {
      id: "necesitare-mas-tratamiento",
      title: "¿Necesitaré más tratamiento?",
      content: (
        <>
          <p>
            El tratamiento con láser funciona muy bien para la mayoría de las
            personas, pero no para todas. Deberá esperar de 4 a 6 semanas para
            saber si funcionó.
          </p>
          <p>
            La mayoría de las personas deberá seguir tomando medicamentos para
            el glaucoma incluso después del tratamiento con láser. Debido a que
            el efecto del tratamiento desaparece con el tiempo, es posible que
            algunas personas necesiten recibirlo más de una vez.
          </p>
        </>
      ),
    },
    {
      id: "cirugia-para-glaucoma",
      title: "Cirugía para el glaucoma",
      content: (
        <>
          <p>
            Si los medicamentos y el tratamiento con láser no funcionan, su
            médico podría sugerirle una cirugía. Hay varios tipos diferentes de
            cirugía que pueden ayudar a drenar el líquido del ojo.
          </p>
          <Link
            href="/salud-visual/cirugia-glaucoma"
            className="font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre la cirugía para el glaucoma
          </Link>
        </>
      ),
    },
  ],
};

export const cirugiaGlaucoma: BlogPost = {
  id: "cirugia-de-glaucoma",
  title: "Cirugía de glaucoma",
  description:
    "Si los medicamentos y el tratamiento con láser no han ayudado, el médico podría recomendar una cirugía. La cirugía no puede curar el glaucoma, pero puede ayudar a proteger su visión.",
  coverImage: "/images/blog/glaucoma-surgery-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "trabeculectomia",
    "cirugia-de-implante",
    "migs",
    "despues-de-la-cirugia",
    "resultados-y-efectos-secundarios",
  ],
  sections: [
    {
      id: "trabeculectomia",
      title: "¿En qué consiste la trabeculectomía?",
      content: (
        <>
          <p>
            Este tipo de cirugía, generalmente usada para tratar el glaucoma de
            ángulo abierto, se hace en un hospital y tarda menos de una hora. El
            cirujano creará una pequeña abertura en la parte de arriba del ojo,
            debajo del párpado, para permitir que drene el exceso de líquido, lo
            que reduce la presión ocular.
          </p>
        </>
      ),
    },
    {
      id: "cirugia-de-implante",
      title: "¿En qué consiste la cirugía de implante para el glaucoma?",
      content: (
        <p>
          En esta operación, el cirujano implanta un tubo diminuto (shunt) en la
          parte blanca del ojo. El tubo ayuda a drenar el exceso de líquido, lo
          que reduce la presión ocular. Se usa para tratar varios tipos de
          glaucoma, incluyendo el congénito y el neovascular.
        </p>
      ),
    },
    {
      id: "migs",
      title:
        "¿En qué consiste la cirugía de glaucoma mínimamente invasiva (MIGS)?",
      content: (
        <p>
          Si tiene glaucoma leve, su médico puede recomendar una MIGS. Esta
          técnica también reduce la presión ocular, pero es más segura y le
          ayuda a recuperarse más rápido. Hay diferentes tipos de MIGS, por lo
          que debe consultar con su oculista si podría ser una opción para
          usted.
        </p>
      ),
    },
    {
      id: "despues-de-la-cirugia",
      title: "¿Qué pasa después de la cirugía?",
      content: (
        <>
          <p>
            Su médico le recetará gotas para los ojos para ayudar a prevenir
            inflamación e infecciones. Mientras se recupera, es posible que deba
            evitar algunas actividades durante 2 a 4 semanas, como levantar
            objetos pesados.
          </p>
        </>
      ),
    },
    {
      id: "resultados-y-efectos-secundarios",
      title: "Resultados y Efectos Secundarios",
      content: (
        <>
          <p>
            Para algunas personas, los beneficios de la cirugía duran mucho
            tiempo. Para otras, la abertura del ojo comienza a cerrarse y
            requiere otra cirugía.
          </p>
          <p>
            Los posibles riesgos incluyen cataratas, problemas con la córnea,
            presión ocular demasiado baja o incluso pérdida de visión. Consulte
            con su médico sobre las ventajas y desventajas de la cirugía.
          </p>
          <div className="bg-blue-50 mt-6 p-4 border-blue-500 border-l-4">
            <p className="font-bold">Investigaciones Recientes</p>
            <p>
              Los científicos están estudiando qué causa el glaucoma y cómo
              podemos detectarlo antes y tratarlo mejor.
            </p>
          </div>
        </>
      ),
    },
  ],
};

export const consejosSaludVisual: BlogPost = {
  id: "consejos-para-la-salud-visual",
  title: "Consejos para proteger su salud visual",
  description:
    "Proteger su salud en general puede contribuir en gran medida a mantener sus ojos sanos. Tome control de su salud con estas recomendaciones.",
  coverImage: "/images/blog/healthy-vision-tips-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "conozca-sus-riesgos",
    "tome-control-de-su-salud",
    "proteja-sus-ojos",
  ],
  sections: [
    {
      id: "conozca-sus-riesgos",
      title: "Investigue si corre riesgo de desarrollar enfermedades oculares",
      content: (
        <>
          <p>
            Envejecer aumenta el riesgo de presentar algunas enfermedades
            oculares. También podría correr un mayor riesgo si tiene sobrepeso,
            antecedentes familiares de enfermedad ocular, diabetes o presión
            arterial alta.
          </p>
          <p>
            Hable con los miembros de su familia para averiguar si han tenido
            algún problema ocular, ya que algunas enfermedades como la
            degeneración macular o el glaucoma son hereditarias.
          </p>
        </>
      ),
    },
    {
      id: "tome-control-de-su-salud",
      title: "Tome control de su salud general",
      content: (
        <>
          <p>
            Los hábitos saludables pueden reducir el riesgo de enfermedades que
            pueden causar problemas oculares. Siga estas recomendaciones:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              <strong>Coma alimentos saludables:</strong> Asegúrese de comer
              muchas verduras de hojas verdes oscuras y pescado con alto
              contenido de ácidos grasos omega-3.
            </li>
            <li>
              <strong>Manténgase activo:</strong> La actividad física puede
              reducir su riesgo de diabetes, presión arterial alta y colesterol
              alto.
            </li>
            <li>
              <strong>Deje de fumar:</strong> Fumar aumenta su riesgo de
              degeneración macular y cataratas.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "proteja-sus-ojos",
      title: "Proteja sus ojos en el día a día",
      content: (
        <>
          <p>
            Usted puede tomar medidas sencillas todos los días para mantener sus
            ojos sanos:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              <strong>Use anteojos de sol:</strong> Protéjase los ojos usando
              anteojos de sol que bloqueen del 99 al 100 por ciento de la
              radiación UVA y UVB.
            </li>
            <li>
              <strong>Use anteojos protectores:</strong> Utilice gafas de
              seguridad durante deportes o trabajos de construcción y
              reparaciones.
            </li>
            <li>
              <strong>Descanse los ojos:</strong> Siga la regla 20-20-20. Cada
              20 minutos, mire algo a 20 pies (unos 6 metros) de distancia
              durante 20 segundos.
            </li>
            <li>
              <strong>Si usa lentes de contacto, prevenga infecciones:</strong>{" "}
              Lávese siempre las manos antes de manipularlos, desinféctelos y
              reemplácelos con regularidad.
            </li>
          </ul>
        </>
      ),
    },
  ],
};

export const comoFuncionanLasLagrimas: BlogPost = {
  id: "como-funcionan-las-lagrimas",
  title: "Cómo funcionan las lágrimas",
  description:
    "Las lágrimas mantienen los ojos húmedos y lisos, y ayudan a enfocar la luz para que podamos ver con claridad. También protegen a los ojos de infecciones y cosas irritantes.",
  coverImage: "/images/blog/how-tears-work-cover.jpg", // Asigna la ruta de imagen correcta
  // No se especifica 'sectionIds' porque es un post corto.
  sections: [
    {
      id: "el-proposito-de-las-lagrimas",
      title: "El propósito de las lágrimas",
      content: (
        <>
          <p>
            Las lágrimas mantienen los ojos húmedos y lisos, y ayudan a enfocar
            la luz para que podamos ver con claridad. También protegen a los
            ojos de infecciones y cosas irritantes, como la suciedad y el polvo.
          </p>
          <p>
            Cada vez que parpadeamos, una fina capa de lágrimas conocida como
            `&quot;`película lagrimal`&quot;` se esparce por la superficie de la
            córnea (la capa exterior transparente del ojo). Las lágrimas emanan
            de las glándulas que se encuentran por encima de los ojos, luego
            drenan hacia los conductos lagrimales (pequeños orificios en las
            esquinas internas de los ojos al lado de la nariz) y bajan por el
            interior de la nariz.
          </p>
          <p>
            Cuando los ojos no producen suficientes lágrimas, o las lágrimas no
            funcionan de la manera correcta, usted puede desarrollar el síndrome
            del ojo seco.
          </p>
          <Link
            href="/salud-visual/sindrome-del-ojo-seco"
            className="inline-block mt-2 font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre el síndrome del ojo seco
          </Link>
        </>
      ),
    },
  ],
};

export const sindromeDelOjoSeco: BlogPost = {
  id: "sindrome-del-ojo-seco",
  title: "A simple vista: Síndrome del ojo seco",
  description:
    "El síndrome del ojo seco ocurre cuando los ojos no producen suficientes lágrimas para mantenerse húmedos o cuando las lágrimas no cumplen correctamente su función.",
  coverImage: "/images/blog/dry-eye-cover.jpg", // Asigna la ruta de imagen correcta
  sectionIds: [
    "que-es-el-sindrome-del-ojo-seco",
    "sintomas",
    "riesgo",
    "causas",
  ],
  sections: [
    {
      id: "que-es-el-sindrome-del-ojo-seco",
      title: "¿Qué es el síndrome del ojo seco?",
      content: (
        <>
          <p>
            El síndrome del ojo seco ocurre cuando los ojos no producen
            suficientes lágrimas para mantenerse húmedos o cuando las lágrimas
            no cumplen correctamente su función. Esto puede hacer que sienta
            incomodidad en los ojos y, en algunos casos, también puede causar
            problemas de visión.
          </p>
          <p>
            El ojo seco es común. La buena noticia es que si usted tiene el
            síndrome del ojo seco, hay muchas cosas que puede hacer para
            mantener los ojos sanos y sin molestias.
          </p>
        </>
      ),
    },
    {
      id: "sintomas",
      title: "¿Cuáles son los síntomas del síndrome del ojo seco?",
      content: (
        <>
          <p>El síndrome del ojo seco puede causar:</p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Una sensación de aspereza, como si tuviera algo en el ojo.</li>
            <li>Sensación de escozor o ardor en el ojo.</li>
            <li>Ojos rojos.</li>
            <li>Sensibilidad a la luz.</li>
            <li>Visión borrosa.</li>
          </ul>
        </>
      ),
    },
    {
      id: "riesgo",
      title: "¿Corro riesgo de desarrollar el síndrome del ojo seco?",
      content: (
        <>
          <p>
            Cualquier persona puede tener el síndrome del ojo seco, pero es más
            probable que lo tenga si:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>Tiene más de 50 años.</li>
            <li>Es mujer.</li>
            <li>Usa lentes de contacto.</li>
            <li>No consume suficiente vitamina A o ácidos grasos omega-3.</li>
            <li>
              Tiene ciertas afecciones autoinmunológicas, como el lupus o el
              síndrome de Sjögren.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "causas",
      title: "¿Qué causa el síndrome del ojo seco?",
      content: (
        <>
          <p>
            Normalmente, las glándulas arriba de los ojos producen lágrimas que
            los mantienen húmedos. El ojo seco ocurre cuando las lágrimas no
            desempeñan correctamente su función. Esto podría significar que:
          </p>
          <ul className="space-y-2 mt-2 pl-4 list-disc list-inside">
            <li>
              Las glándulas no producen suficientes lágrimas para mantener los
              ojos húmedos.
            </li>
            <li>Las lágrimas se secan demasiado rápido.</li>
            <li>
              Las lágrimas simplemente no trabajan lo suficientemente bien para
              mantener sus ojos húmedos.
            </li>
          </ul>
          <Link
            href="/salud-visual/causas-ojo-seco"
            className="inline-block mt-4 font-semibold text-blue-600 hover:underline"
          >
            Obtenga más información sobre las causas del síndrome del ojo seco
          </Link>
        </>
      ),
    },
  ],
};

// Puedes crear un array para exportar todas las entradas juntas
export const mainBlogPosts = [
  mantengaSusOjosSanos,
  comoFuncionanLosOjos,
  ochoCosasParaProtegerVision,
];

export const allBlogPosts = [
  mantengaSusOjosSanos,
  examenConDilatacion,
  erroresDeRefraccion,
  tiposDeErroresDeRefraccion,
  miopiaHipermetropia,
  hipermetropiaAstigmatismo,
  astigmatismoPresbicia,
  presbicia,
  comoFuncionanLosOjos,
  ochoCosasParaProtegerVision,
  anteojosErroresRefraccion,
  lentesDeContacto,
  cirugiaErroresRefraccion,
  retinopatiaDiabetica,
  inyeccionesAfeccionesOculares,
  tratamientoLaserRetinopatia,
  vitrectomia,
  degeneracionMacular,
  cataratas,
  graficoCataratas,
  tiposDeCatarata,
  causasDeLasCataratas,
  cirugiaDeCataratas,
  glaucoma,
  tiposDeGlaucoma,
  glaucomaPresionOcular,
  medicamentosParaGlaucoma,
  tratamientoLaserGlaucoma,
  cirugiaGlaucoma,
  consejosSaludVisual,
  comoFuncionanLasLagrimas,
  sindromeDelOjoSeco,
];
