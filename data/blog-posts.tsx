// /data/blog-posts.ts

import type { BlogPost } from "@/types/index";

// Usaremos esta constante para exportar la entrada del blog
export const mantengaSusOjosSanos: BlogPost = {
  id: "mantenga-sus-ojos-sanos",
  title: "Mantenga sus ojos sanos",
  description:
    "Hay muchas cosas que puede hacer para mantener sus ojos sanos y proteger su visión.",
  // Reemplaza esto con la ruta real a tu imagen de portada
  coverImage: "/assets/images/blog/healthy.jpg",
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
          <a href="#" className="text-blue-600 hover:underline">
            Obtenga información sobre los exámenes de los ojos con dilatación de
            las pupilas
          </a>
        </>
      ),
    },
    {
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
      title:
        "¿Con qué frecuencia debo hacerme un examen de los ojos con dilatación de las pupilas?",
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
            personas con diabetes o alta presión arterial deben hacerse un
            examen de los ojos con dilatación de las pupilas al menos una vez al
            año.
          </p>
        </>
      ),
    },
    {
      title:
        "¿Qué sucede durante un examen de los ojos con dilatación de las pupilas?",
      content: (
        <>
          <p>El examen incluye:</p>
          <ul className="space-y-2 pl-4 list-disc list-inside">
            <li>
              <strong>Prueba de agudeza visual:</strong> para verificar la
              claridad con la que ve. El médico le pedirá que lea letras de
              lejos y de cerca.
            </li>
            <li>
              <strong>Prueba de campo visual:</strong> para verificar su visión
              periférica (lateral). El médico evaluará qué tan bien puede ver
              los objetos a los lados de su visión sin mover los ojos.
            </li>
            <li>
              <strong>Prueba de la función muscular del ojo:</strong> para
              revisar si tiene problemas con los músculos alrededor de los
              globos oculares. El médico moverá un objeto y le pedirá que lo
              siga con los ojos.
            </li>
            <li>
              <strong>Prueba de respuesta de la pupila:</strong> para revisar
              cómo entra la luz a sus ojos. El médico le iluminará los ojos con
              una pequeña linterna y revisará cómo reaccionan sus pupilas a la
              luz.
            </li>
            <li>
              <strong>Prueba de tonometría:</strong> para medir la presión en
              sus ojos. El médico usará una máquina para enviar un soplo rápido
              de aire al ojo, o tocará suavemente su ojo con una herramienta
              especial. ¡No se preocupe, esto no duele!
            </li>
            <li>
              <strong>Dilatación:</strong> para detectar problemas en las partes
              internas del ojo. El médico le pondrá unas gotas para los ojos
              para dilatar (ensanchar) la pupila. Esto ayuda al médico a ver el
              interior de su ojo.
            </li>
          </ul>
          <p className="mt-4">
            Dependiendo de sus necesidades, su médico también podría incluir
            otras pruebas. Consulte con su médico si tiene alguna pregunta.
          </p>
        </>
      ),
    },
    {
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
      title:
        "¿Qué sucede después de un examen de los ojos con dilatación de las pupilas?",
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
          <a href="#" className="text-blue-600 hover:underline">
            Obtenga más información sobre los errores de refracción
          </a>
        </>
      ),
    },
  ],
};

// Puedes crear un array para exportar todas las entradas juntas
export const allBlogPosts = [mantengaSusOjosSanos];
