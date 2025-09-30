// product-data.ts

import { Product } from "@/types/index";

/**
 * An array containing all the product data.
 */
export const PRODUCT_DATA: Product[] = [
  {
    name: "Lio Monofocal",
    icon: "/assets/icons/productos/lio_monofocal.png",
    tagline: "Lentes intraoculares monofocales de última generación",
    category: "Insumos",
    subCategory: "LIO",
    description:
      "Recuperar la claridad visual tras la cirugía de cataratas es posible gracias a las nuevas lentes monofocales, desarrolladas con materiales innovadores y avaladas por estudios clínicos internacionales.",
    sections: [
      {
        title: "Beneficios comprobados",
        content: [
          "Visión clara y estable para la distancia lejana, con resultados clínicos que muestran una excelente eficacia visual.",
          "Menor incidencia de opacificación de la cápsula posterior, reduciendo la necesidad de procedimientos adicionales con láser.",
          "Alta calidad de imagen y contraste, incluso en ambientes con poca luz.",
        ],
      },
      {
        title: "Innovación tecnológica",
        content: [
          "Fabricadas con materiales que ofrecen transparencia superior y duradera, evitando la aparición de pequeñas opacidades internas.",
          "Diseño óptico avanzado que reduce aberraciones y mejora la nitidez de la visión.",
          "Incorporan filtros que protegen contra la luz ultravioleta y azul nociva, cuidando la salud ocular a largo plazo.",
        ],
      },
      {
        title: "Respaldo clínico",
        content:
          "Estas lentes cuentan con el apoyo de ensayos clínicos multicéntricos que confirman su seguridad, estabilidad y eficacia, garantizando resultados confiables para los pacientes que se someten a cirugía de cataratas.",
      },
    ],
    conclusion:
      "Una decisión segura y confiable para quienes buscan recuperar la visión con calidad, estabilidad y respaldo científico.",
    slogan: "Porque volver a ver bien, es volver a vivir plenamente.",
  },
  {
    name: "Lio Monofocal torica",
    icon: "/assets/icons/productos/lio_torica.png",
    tagline: "Lentes intraoculares monofocales tóricas de última generación",
    category: "Insumos",
    subCategory: "LIO",
    description:
      "Si tenés cataratas y además astigmatismo, hoy es posible recuperar la claridad visual con una sola solución. Las lentes intraoculares monofocales tóricas corrigen ambos problemas al mismo tiempo, brindando una visión más nítida y estable gracias a materiales innovadores y tecnología óptica avanzada, avalada por estudios clínicos internacionales.",
    sections: [
      {
        title: "Beneficios comprobados",
        content: [
          "Visión clara y definida para la distancia lejana, corrigiendo simultáneamente el astigmatismo.",
          "Menor necesidad de usar anteojos para la visión lejana tras la cirugía.",
          "Reducción del riesgo de opacificación capsular posterior, evitando procedimientos láser adicionales.",
          "Excelente calidad de imagen y contraste, incluso en condiciones de poca luz.",
        ],
      },
      {
        title: "Innovación tecnológica",
        content: [
          "Material acrílico hidrofóbico avanzado que mantiene la transparencia y evita micro-opacidades internas.",
          "Diseño óptico asférico que reduce aberraciones y mejora la nitidez visual.",
          "Marcas de alineación en el lente que garantizan un posicionamiento preciso para corregir el astigmatismo.",
          "Filtros que protegen contra la luz ultravioleta y azul nociva, cuidando la retina y la salud ocular a largo plazo.",
          "Sistema de implantación moderno que hace la cirugía más segura y predecible.",
        ],
      },
      {
        title: "Respaldo clínico",
        content:
          "Estudios clínicos multicéntricos confirman la seguridad, eficacia y estabilidad de las lentes monofocales tóricas, garantizando resultados confiables para los pacientes con cataratas y astigmatismo.",
      },
    ],
    conclusion: "Una decisión segura y confiable para tu visión",
    slogan:
      "Porque volver a ver con claridad y sin las limitaciones del astigmatismo, es volver a vivir plenamente.",
  },
  {
    name: "Lio Multifocal",
    icon: "/assets/icons/productos/lio_multifocal.png",
    tagline: "Lentes intraoculares trifocales de última generación",
    category: "Insumos",
    subCategory: "LIO",
    description:
      "Si tenés cataratas y querés reducir tu dependencia de los anteojos, las lentes intraoculares trifocales son una solución innovadora. Diseñadas para brindar visión clara de lejos, intermedia y de cerca, te permiten disfrutar de tus actividades cotidianas con mayor libertad.",
    sections: [
      {
        title: "Beneficios comprobados",
        content: [
          "Visión de calidad en todas las distancias: leer, usar la computadora y manejar sin necesidad constante de anteojos.",
          "Corrección simultánea de cataratas y presbicia.",
          "Reducción significativa en la dependencia de gafas para la vida diaria.",
          "Excelente calidad de imagen y contraste, avalada por estudios clínicos internacionales.",
        ],
      },
      {
        title: "Innovación tecnológica",
        content: [
          "Diseño trifocal avanzado que distribuye la luz de manera eficiente para visión nítida en todas las distancias.",
          "Material acrílico hidrofóbico de última generación que mantiene la transparencia y evita micro-opacidades internas.",
          "Filtros que protegen contra la luz ultravioleta y la luz azul nociva, cuidando la salud ocular a largo plazo.",
          "Opciones en versión tórica para corregir también el astigmatismo.",
        ],
      },
      {
        title: "Respaldo clínico",
        content:
          "Estudios multicéntricos internacionales confirman la seguridad, eficacia y satisfacción de los pacientes con lentes trifocales, posicionándolas como una de las soluciones más confiables en cirugía de cataratas.",
      },
    ],
    conclusion:
      "Una decisión segura y confiable para una vida con menos anteojos",
    slogan:
      "Porque volver a ver bien en todas las distancias es volver a disfrutar plenamente cada momento.",
  },
  {
    name: "Lio Multifocal Torica",
    icon: "/assets/icons/productos/lio_multifocal_torica.png",
    tagline: "Lentes intraoculares trifocales tóricas de última generación",
    category: "Insumos",
    subCategory: "LIO",
    description:
      "Si tenés cataratas, astigmatismo y querés reducir al máximo el uso de anteojos, las lentes trifocales tóricas son la solución más avanzada. Diseñadas para corregir simultáneamente cataratas, presbicia y astigmatismo, te ofrecen una visión clara y estable en todas las distancias.",
    sections: [
      {
        title: "Beneficios comprobados",
        content: [
          "Visión nítida de lejos, intermedia y de cerca, con menor dependencia de anteojos.",
          "Corrección simultánea del astigmatismo, cataratas y presbicia en un solo procedimiento.",
          "Alta calidad de imagen y contraste, incluso en condiciones de poca luz.",
          "Estudios clínicos que avalan resultados seguros, eficaces y gran satisfacción en los pacientes.",
        ],
      },
      {
        title: "Innovación tecnológica",
        content: [
          "Diseño trifocal que optimiza la distribución de la luz para una visión equilibrada en todas las distancias.",
          "Material acrílico hidrofóbico de última generación, transparente y estable, que evita micro-opacidades internas.",
          "Marcas de alineación que permiten colocar la lente con precisión para corregir el astigmatismo de manera efectiva.",
          "Filtros de protección contra la luz ultravioleta y azul nociva, cuidando la salud ocular a largo plazo.",
          "Sistema de implantación avanzado que aporta seguridad y predictibilidad en la cirugía.",
        ],
      },
      {
        title: "Respaldo clínico",
        content:
          "Las lentes trifocales tóricas cuentan con estudios multicéntricos internacionales que confirman su seguridad, eficacia y estabilidad, garantizando resultados confiables para pacientes con cataratas y astigmatismo.",
      },
    ],
    conclusion: "La elección más completa para tu visión",
    slogan:
      "Porque ver bien de lejos, intermedio y cerca, sin las limitaciones del astigmatismo, es volver a disfrutar cada momento con libertad y confianza.",
  },
  {
    name: "Lio Edof",
    icon: "/assets/icons/productos/lio_edof.png",
    tagline: "Lentes intraoculares de visión extendida de última generación",
    category: "Insumos",
    subCategory: "LIO",
    description:
      "Si tenés cataratas y querés disfrutar de una visión más natural, las lentes de profundidad extendida son una excelente alternativa. Están diseñadas para brindar una visión clara y continua desde lejos hasta la distancia intermedia, ideal para manejar, usar la computadora o mirar televisión, con menos dependencia de anteojos.",
    sections: [
      {
        title: "Beneficios comprobados",
        content: [
          "Visión nítida para la distancia lejana y las actividades de la vida diaria a distancia intermedia.",
          "Mayor libertad para tareas como conducir, trabajar en la computadora o cocinar.",
          "Menor dependencia de anteojos para muchas actividades cotidianas.",
          "Excelente calidad visual y contraste, con baja incidencia de halos y deslumbramientos nocturnos.",
        ],
      },
      {
        title: "Innovación tecnológica",
        content: [
          "Tecnología de profundidad extendida (EDOF) que ofrece un rango de visión continuo y natural.",
          "Material acrílico hidrofóbico avanzado, que mantiene la transparencia y evita micro-opacidades internas.",
          "Diseño óptico no difractivo, que reduce los efectos visuales indeseados como halos y destellos.",
          "Filtros de protección contra la luz ultravioleta y la luz azul nociva, cuidando la retina y la salud ocular a largo plazo.",
        ],
      },
      {
        title: "Respaldo clínico",
        content:
          "Las lentes de visión extendida cuentan con estudios clínicos internacionales que avalan su seguridad, eficacia y estabilidad, ofreciendo resultados confiables y gran satisfacción en los pacientes.",
      },
    ],
    conclusion: "Una solución moderna y equilibrada para tu visión",
    slogan:
      "Porque ver bien de lejos y en la vida diaria, con menos dependencia de anteojos y sin comprometer la calidad visual, es volver a disfrutar cada momento con libertad.",
  },
  {
    name: "Lio Edof Torica",
    icon: "/assets/icons/productos/lio_edof_torica.png",
    subCategory: "LIO",
    tagline:
      "Lentes intraoculares de visión extendida tóricas de última generación",
    category: "Insumos",
    description:
      "Si tenés cataratas y astigmatismo, estas lentes están diseñadas especialmente para vos. Combinan la tecnología de visión extendida (EDOF) con la corrección precisa del astigmatismo, devolviéndote una visión clara y continua desde lejos hasta la distancia intermedia, con mayor libertad y menos necesidad de anteojos.",
    sections: [
      {
        title: "Beneficios comprobados",
        content: [
          "Corrigen simultáneamente cataratas y el astigmatismo, mejorando la nitidez de la visión.",
          "Visión nítida y estable de lejos y en actividades cotidianas como conducir, cocinar o usar la computadora.",
          "Menor dependencia de anteojos para la vida diaria.",
          "Excelente calidad de imagen y contraste, incluso con poca luz.",
          "Baja incidencia de halos y deslumbramientos nocturnos.",
        ],
      },
      {
        title: "Innovación tecnológica",
        content: [
          "Marcas de alineación en el lente que permiten al cirujano colocarlo en el eje exacto para corregir el astigmatismo.",
          "Estabilidad rotacional que mantiene la corrección precisa del astigmatismo a lo largo del tiempo.",
          "Tecnología de profundidad extendida (EDOF) para un rango de visión más natural y continuo.",
          "Material acrílico hidrofóbico avanzado, con transparencia superior y libre de micro-opacidades internas.",
          "Filtros que protegen contra la luz ultravioleta y azul nociva.",
        ],
      },
      {
        title: "Respaldo clínico",
        content:
          "Estudios internacionales confirman que las lentes tóricas ofrecen una corrección confiable y duradera del astigmatismo, junto con los beneficios de la visión extendida, garantizando seguridad, eficacia y satisfacción en los pacientes.",
      },
    ],
    conclusion: "La combinación perfecta para tu visión",
    slogan:
      "Porque ver bien en todas tus actividades, sin las limitaciones del astigmatismo y con menos anteojos, es volver a vivir con claridad y confianza.",
  },
  {
    name: "Cuchilletes",
    icon: "/assets/icons/productos/cuchilletes.png",
    tagline: "Seguridad y Precisión en Cada Cirugía Ocular",
    category: "Insumos",
    description:
      "Cuando hablamos de la salud de tus ojos, lo más importante es que la cirugía sea segura, precisa y confiable.",
    sections: [
      {
        title: "Beneficios para vos",
        content: [
          "Mayor seguridad: los instrumentos modernos reducen al mínimo los riesgos durante la cirugía.",
          "Cortes precisos y delicados: la tecnología de última generación permite incisiones más suaves y controladas.",
          "Mejores resultados clínicos: el diseño avanzado asegura estabilidad y eficacia durante todo el procedimiento.",
          "Higiene garantizada: al ser de un solo uso, se evitan riesgos de contaminación y se cuida tu salud al máximo.",
        ],
      },
      {
        title: "¿Qué significa esto para vos?",
        content: [
          "Más tranquilidad en el quirófano.",
          "Procedimientos más seguros y menos invasivos.",
          "Una experiencia quirúrgica diseñada para proteger tu visión.",
        ],
      },
      {
        title: "Cuchilletes de Incisión (Slit)",
        content:
          "Uso: incisiones principales en córnea o esclera, para introducir instrumental durante la cirugía de catarata u otros procedimientos. Permiten cortes precisos y controlados.\nMedidas: 1.0 mm, 1.2 mm, 1.4 mm, 1.6 mm, 1.8 mm, 2.0 mm, 2.2 mm, 2.4 mm, 2.5 mm, 2.6 mm, 2.65 mm, 2.75 mm, 2.8 mm, 2.85 mm, 3.0 mm, 3.2 mm.",
      },
      {
        title: "Cuchilletes MVR y Lancetas",
        content:
          "Uso: creación de accesos secundarios o “puertos” en la córnea o esclera. Muy útiles para equilibrar la presión ocular o permitir el ingreso de instrumentos adicionales.\nMedidas: 19G, 20G, 21G, 23G, 24G, 25G.",
      },
      {
        title: "Cuchilletes Crescent",
        content:
          "Uso: formación de túneles corneales o esclerales y levantamiento de colgajos de tejido. La orientación del filo (bevel-up o bevel-down) le da versatilidad al corte.\nMedidas:\nBevel-Up: 2.0 mm, 2.2 mm, 2.6 mm.\nBevel-Down: 2.2 mm, 2.6 mm.\nRecto: 2.6 mm.",
      },
      {
        title: "Cuchilletes Clear Cornea",
        content:
          "Uso: incisiones corneales auto-sellantes, sin sutura, que facilitan una recuperación más rápida y segura. Muy utilizados en cirugía de catarata mínimamente invasiva.\nMedidas: 1.0 mm, 1.2 mm, 1.4 mm, 1.6 mm, 1.8 mm, 2.0 mm, 2.2 mm, 2.4 mm, 2.5 mm, 2.6 mm, 2.65 mm, 2.75 mm, 2.8 mm, 2.85 mm, 3.0 mm, 3.2 mm.",
      },
      {
        title: "Cuchilletes Rectos",
        content:
          "Uso: cortes rectos y precisos en distintos ángulos, según la necesidad del procedimiento (ranuras, paracentesis o accesos adicionales).\nModelos/Medidas: 15°, 22.5°, 30°, 45°.",
      },
    ],
  },
  {
    name: "Viscoelastico oftalmico",
    icon: "/assets/icons/productos/visco_oft.png",
    tagline: "Viscoelásticos oftálmicos: aliados en tu cirugía ocular",
    category: "Insumos",
    description:
      "Durante una cirugía de cataratas o procedimientos en los ojos, el cirujano utiliza soluciones especiales llamadas viscoelásticos. Estas sustancias transparentes y seguras ayudan a proteger los tejidos delicados del ojo y a que la cirugía sea más precisa y segura.",
    sections: [
      {
        title: "¿Para qué sirven?",
        content: [
          "Mantienen el espacio dentro del ojo para que el especialista pueda trabajar con claridad y seguridad.",
          "Protegen las células de la córnea y otros tejidos sensibles durante la cirugía.",
          "Facilitan la manipulación de los instrumentos quirúrgicos, evitando fricciones o daños.",
          "Ayudan a mantener una buena visibilidad para el cirujano en todo momento.",
        ],
      },
      {
        title: "Tipos de viscoelásticos disponibles",
        content:
          "Existen diferentes formulaciones que el especialista selecciona según cada necesidad:\n\nAlta viscosidad (muy densos y cohesivos)\n- Mantienen la cámara del ojo muy estable.\n- Brindan máxima protección de los tejidos.\n- Se utilizan en cirugías más complejas o cuando se requiere estabilidad prolongada.\n\nViscosidad intermedia (equilibrados, con protectores adicionales)\n- Ofrecen un balance entre estabilidad y protección.\n- Incorporan sustancias que cuidan especialmente la córnea.\n- Ideales para mantener la forma del ojo y evitar complicaciones postoperatorias.\n\nBaja viscosidad (más fluidos o dispersivos)\n- Se distribuyen con facilidad en todo el ojo.\n- Brindan buena protección y visibilidad.\n- Son muy utilizados en las cirugías de cataratas más habituales.",
      },
      {
        title: "Seguridad y confianza",
        content: [
          "Todos son productos estériles, transparentes y seguros.",
          "Elaborados con materiales de calidad farmacéutica, de origen no animal o libre de riesgos.",
          "Respaldados por estudios clínicos internacionales que garantizan eficacia y protección.",
        ],
      },
    ],
    conclusion: "Tu tranquilidad en el quirófano",
    slogan:
      "Contamos con diferentes opciones de viscoelásticos para adaptarnos a las necesidades de cada cirugía: desde los más densos y protectores, hasta los más fluidos y prácticos, siempre con la misma finalidad: cuidar tus ojos y garantizar el mejor resultado visual.",
  },
  {
    name: "Aceite de silicona",
    icon: "/assets/icons/productos/aceite_silicona.png",
    tagline: "Aceite de silicona ocular para tu recuperación",
    category: "Insumos",
    description:
      "Después de una cirugía de retina, es fundamental que el ojo se mantenga protegido y estable. El aceite de silicona es una solución confiable que los especialistas utilizan para mantener la retina en su lugar y favorecer la cicatrización.",
    sections: [
      {
        title: "Beneficios para tu seguridad",
        content: [
          "Brinda soporte dentro del ojo durante semanas o meses, según lo necesites.",
          "Altamente seguro y probado en todo el mundo.",
          "No genera infecciones ni reacciones adversas.",
          "Compatible con los tejidos naturales del ojo y del cuerpo.",
        ],
      },
      {
        title: "Tecnología que te cuida",
        content:
          "Producto aprobado y utilizado por oftalmólogos desde hace décadas.\nFabricado con silicona médica, un material confiable, puro y biocompatible.\nDisponible en distintas densidades, para que el especialista elija la opción más adecuada en cada cirugía:\n- Uso estándar → para la mayoría de los casos.\n- Mayor resistencia → cuando se necesita un soporte adicional.\n- Protección especial → en situaciones con riesgo de complicaciones.\n- Máxima estabilidad → para cirugías más complejas de retina.",
      },
      {
        title: "Confianza y experiencia",
        content:
          "El aceite de silicona es un aliado silencioso en tu recuperación: transparente, seguro y diseñado para darte la mejor protección hasta que tu ojo esté listo para continuar solo.",
      },
    ],
    conclusion:
      "Una solución segura y confiable para cuidar tu visión en el momento más importante.",
    slogan:
      "Porque mantener la retina en su lugar es la clave para volver a ver con claridad.",
  },
  {
    name: "Perfluoro carbono",
    icon: "/assets/icons/productos/perfluoro_carbono.png",
    tagline: "Un apoyo esencial en tu cirugía de retina",
    category: "Insumos",
    description:
      "Durante una operación de retina, el cirujano necesita mantenerla en su lugar para poder trabajar con precisión. Para esto se utiliza un líquido transparente y seguro llamado perfluorocarbono ocular, diseñado especialmente para proteger tu ojo durante el procedimiento.",
    sections: [
      {
        title: "¿Por qué se usa?",
        content: [
          "Mantiene la retina en posición durante la cirugía.",
          "Evita que se mueva o se pliegue, lo que facilita una reparación más efectiva.",
          "Permite que el especialista trabaje con la máxima claridad y seguridad.",
        ],
      },
      {
        title: "Beneficios para tu tranquilidad",
        content: [
          "Producto de alta pureza y transparencia, que garantiza resultados confiables.",
          "No es tóxico ni provoca reacciones en los tejidos del ojo.",
          "Su densidad especial lo hace ideal para ayudar a reposicionar y adherir la retina.",
          "Uso controlado y seguro: se emplea solo durante la cirugía y se retira antes de finalizarla.",
        ],
      },
      {
        title: "¿Por qué es una buena elección?",
        content:
          "Optar por el uso de perfluorocarbono ocular significa:\n- Apostar por un procedimiento más seguro y con mejores resultados visuales.\n- Confiar en un material que ha demostrado eficacia en oftalmología en todo el mundo durante décadas.\n- Saber que tu cirujano cuenta con una herramienta moderna que protege tu ojo en un momento crítico.",
      },
    ],
    conclusion: "Porque en una cirugía de retina, cada detalle cuenta.",
    slogan:
      "El perfluorocarbono ocular es un aliado invisible que hace que tu cirugía sea más segura, precisa y con mayores posibilidades de recuperar tu visión.",
  },
  {
    name: "Microgas para taponamiento",
    icon: "/assets/icons/productos/microgas_taponamiento.png",
    tagline: "Gases especiales que ayudan a tu recuperación ocular",
    category: "Insumos",
    description:
      "En las cirugías de retina, los especialistas utilizan pequeñas burbujas de gases seguros y no tóxicos que se colocan dentro del ojo al final del procedimiento. Estas burbujas cumplen la función de mantener la retina en su lugar mientras cicatriza, favoreciendo una recuperación más estable.",
    sections: [
      {
        title: "¿Cómo funcionan?",
        content: [
          "Se colocan dentro del ojo en forma de burbuja compacta.",
          "Esa burbuja actúa como un “apoyo interno” que mantiene la retina adherida.",
          "Con el tiempo, el gas se va absorbiendo solo y desaparece de manera natural.",
        ],
      },
      {
        title: "Beneficios para tu cirugía",
        content: [
          "Son transparentes y seguros, lo que permite al cirujano ver con claridad durante el procedimiento.",
          "Protegen la retina y favorecen una buena cicatrización.",
          "Se absorben de forma natural, sin dejar residuos.",
          "Han sido utilizados durante décadas en oftalmología, con total seguridad y eficacia.",
        ],
      },
      {
        title: "Diferentes tipos de gases según tu necesidad",
        content:
          "Dependiendo del caso, el especialista elegirá cuál es el más adecuado:\n- De acción corta (1–2 semanas): se absorben más rápido, ideales para recuperaciones simples.\n- De acción media (4–5 semanas): permanecen más tiempo, ofreciendo un soporte prolongado.\n- De acción larga (7–8 semanas): se usan en cirugías más complejas, cuando la retina necesita más tiempo de apoyo.",
      },
      {
        title: "Seguridad garantizada",
        content:
          "Estos gases se utilizan únicamente en quirófanos estériles y bajo la supervisión de oftalmólogos especialistas en cirugía vitreorretiniana. Su uso está avalado por años de experiencia y estudios internacionales que confirman su eficacia.",
      },
    ],
    conclusion: "Un aliado invisible en tu cirugía de retina",
    slogan:
      "Los gases intraoculares son herramientas diseñadas para darte la máxima seguridad y estabilidad, aumentando las posibilidades de una recuperación visual exitosa.",
  },
  {
    name: "Microscopio quirurgico",
    icon: "/assets/icons/productos/microscopio_quirurgico.png",
    tagline: "El microscopio que transforma la cirugía oftalmológica",
    category: "Equipos",
    description:
      "En cirugía ocular, cada detalle cuenta. Por eso, contar con un microscopio de última generación no es un lujo: es la clave para lograr seguridad, precisión y resultados superiores.",
    sections: [
      {
        title: "Visibilidad incomparable",
        content: [
          "Reflejo rojo estable y amplio: asegura una visualización clara, incluso en pacientes con pupilas pequeñas o casos complejos.",
          "Profundidad de campo extendida: permite ver varias estructuras del ojo al mismo tiempo, reduciendo la necesidad de reenfocar y optimizando cada movimiento quirúrgico.",
        ],
      },
      {
        title: "Iluminación que cuida la visión",
        content: [
          "Luz LED brillante, uniforme y ajustable según la etapa de la cirugía.",
          "Combinación de luz coaxial y oblicua para un contraste perfecto.",
          "Diseñado para minimizar la fototoxicidad, ofreciendo máxima seguridad incluso en procedimientos prolongados.",
        ],
      },
      {
        title: "Eficiencia y ergonomía en quirófano",
        content: [
          "Movilidad total con brazos de largo alcance y soporte estable.",
          "Controles intuitivos que permiten ajustes rápidos de enfoque, zoom e intensidad lumínica.",
          "Diseñado para reducir la fatiga del cirujano y acortar tiempos quirúrgicos.",
        ],
      },
      {
        title: "Visualización compartida",
        content: [
          "Sistema auxiliar de observación en 3D: el equipo quirúrgico ve lo mismo que el cirujano, sin comprometer la calidad de la imagen principal.",
          "Ideal para trabajo en equipo, formación y docencia, potenciando la experiencia en cada cirugía.",
        ],
      },
      {
        title: "Rendimiento integral",
        content: [
          "Perfecto para cirugías de cataratas y retina, con modos de visualización que se adaptan a cada necesidad.",
          "Tecnología que amplifica la visibilidad en las zonas más profundas del ojo, garantizando precisión en cada paso.",
        ],
      },
    ],
    conclusion: "La diferencia está en los detalles.",
    slogan:
      "Este microscopio convierte cada procedimiento en una experiencia más segura, más eficiente y con resultados clínicos superiores. Porque cuando se trata de la visión de tus pacientes, no hay lugar para concesiones.",
  },
  {
    name: "Laser quirurgico",
    icon: "/assets/icons/productos/laser_quirurgico.png",
    tagline: "Láser quirúrgico para el cuidado de la retina",
    category: "Equipos",
    description:
      "La cirugía ocular actual cuenta con la ayuda de tecnologías avanzadas que hacen que cada procedimiento sea más seguro, preciso y confiable. Entre ellas, el láser quirúrgico de última generación se ha convertido en un aliado indispensable para proteger y restaurar la visión en cirugías de retina y segmento posterior.",
    sections: [
      {
        title: "Beneficios principales",
        content: [
          "Máxima precisión: utiliza una luz verde especialmente diseñada para actuar en los tejidos correctos, evitando daños innecesarios.",
          "Mayor seguridad: cada ajuste y cambio de instrumento es confirmado por voz, lo que reduce errores y da confianza al paciente y al cirujano.",
          "Cirugías más rápidas y cómodas: gracias a la posibilidad de conectar varios accesorios al mismo tiempo, se evitan interrupciones durante la operación.",
          "Resultados confiables: permite coagular, sellar y tratar la retina de manera uniforme, aumentando las probabilidades de éxito de la cirugía.",
        ],
      },
      {
        title: "Innovación tecnológica al servicio de la visión",
        content: [
          "Controles con pedal multifunción: el cirujano puede manejar el láser sin apartar la vista del ojo, manteniendo la máxima concentración.",
          "Reconocimiento automático de instrumentos: el sistema identifica el accesorio colocado y ajusta sus parámetros, garantizando seguridad y rapidez.",
          "Pantalla intuitiva y sencilla: pensada para que la cirugía sea ágil y sin complicaciones.",
        ],
      },
      {
        title: "Respaldo y confianza",
        content:
          "Este láser combina años de investigación, ensayos clínicos y la experiencia de especialistas que lo avalan como una herramienta clave para la cirugía oftalmológica moderna.",
      },
    ],
  },
  {
    name: "Sistema de visualizacion 3d",
    icon: "/assets/icons/productos/sistema_3d.png",
    tagline: "El futuro de la cirugía oftalmológica, hoy",
    category: "Equipos",
    sections: [
      {
        title: "Ve lo que otros no pueden ver",
        content:
          "Imagen 3D en ultra alta definición que revela cada detalle.\nHasta 5 veces más profundidad de campo que un microscopio tradicional.\nVisualizá la retina, la cápsula y los tejidos con una claridad sorprendente.\n👉 Más precisión. Más confianza. Mejores resultados.",
      },
      {
        title: "Cirugías más seguras",
        content:
          "Operá con menos luz intraocular: protegé los ojos de tus pacientes del riesgo de fototoxicidad.\nModos digitales inteligentes que se adaptan a cada necesidad:\n- Claridad extra en la cápsula.\n- Contraste optimizado con tintes verdes o azules.\n- Detalles invisibles a simple vista, ahora al alcance de tu mano.\n👉 Seguridad para tus pacientes, tranquilidad para vos.",
      },
      {
        title: "Comodidad que cambia tu práctica",
        content:
          "Cirugía heads-up: olvidate de la incomodidad de los oculares.\nPostura natural frente a una pantalla gigante.\nMenos fatiga, más concentración, más precisión.\n👉 Tu espalda lo agradece, tu rendimiento también.",
      },
      {
        title: "El poder del trabajo en equipo",
        content:
          "Todo el quirófano ve lo mismo que vos, en tiempo real y en 3D.\nFacilitá la coordinación, la docencia y la formación de nuevos talentos.\nTransformá cada cirugía en una experiencia de aprendizaje compartido.\n👉 Vos operás, todos aprenden, el paciente gana.",
      },
      {
        title: "Una herramienta que se adapta a vos",
        content:
          "Integrá parámetros quirúrgicos en la pantalla.\nGrabá tus cirugías en 2D o 3D para enseñanza y análisis.\nCreá perfiles personalizados con tus modos favoritos.\n👉 Un sistema hecho a tu medida.",
      },
    ],
    conclusion: "¿Por qué elegirlo?",
    slogan:
      "Porque este sistema no es solo un microscopio, es un salto de generación. Más que una herramienta, es un nuevo estándar en cirugía oftalmológica: Preciso. Seguro. Cómodo. Colaborativo. 🔥 El futuro de la visualización quirúrgica está acá. Y te pone a vos y a tus pacientes un paso adelante.",
  },
  {
    name: "Sistema de facoemulsificacion para cirugia de catarata",
    icon: "/assets/icons/productos/sistema_catarata.png",
    tagline: "La nueva era en cirugía de cataratas",
    category: "Equipos",
    sections: [
      {
        title: "Seguridad garantizada en cada paso",
        content: [
          "Control inteligente de fluidos que mantiene el ojo estable de principio a fin.",
          "Menor riesgo de complicaciones intraoperatorias.",
          "Protección máxima para la córnea y las incisiones.",
        ],
      },
      {
        title: "Eficacia comprobada",
        content: [
          "Fragmentación precisa y rápida del cristalino, incluso en casos complejos.",
          "Menos energía utilizada → menos daño, más resultados.",
          "Recuperaciones visuales más rápidas y pacientes más satisfechos.",
        ],
      },
      {
        title: "Eficiencia quirúrgica sin límites",
        content: [
          "Flujo de trabajo ágil que acorta los tiempos de cirugía.",
          "Reducción del estrés quirúrgico para el cirujano.",
          "Consistencia en cada procedimiento, sin importar la densidad de la catarata.",
        ],
      },
      {
        title: "Diseño compacto + interfaz intuitiva",
        content: [
          "Fácil de trasladar entre quirófanos.",
          "Controles simples y configuraciones personalizables.",
          "Tecnología que se adapta al estilo del cirujano, no al revés.",
        ],
      },
    ],
    conclusion: "En resumen:",
    slogan:
      "Una plataforma que combina seguridad, eficacia y eficiencia, diseñada para que el cirujano tenga confianza total y el paciente logre los mejores resultados visuales posibles.",
  },
  {
    name: "Biometro Optico",
    icon: "/assets/icons/productos/biometro_optico.png",
    tagline: "Precisión sin límites. Seguridad sin comparación.",
    category: "Equipos",
    description:
      "El nuevo estándar en biometría óptica llegó para transformar la cirugía de catarata.",
    sections: [
      {
        title: "Seguridad en cada paso",
        content: [
          "Tecnología de última generación que atraviesa incluso cataratas densas sin recurrir a métodos de contacto.",
          "Modo exclusivo de visualización de retina, que asegura datos confiables donde otros equipos se detienen.",
          "Captura automática ultrarrápida, eliminando errores humanos y garantizando la máxima tranquilidad al paciente y al cirujano.",
        ],
      },
      {
        title: "Eficacia que se traduce en resultados",
        content: [
          "Todas las mediciones esenciales en menos de un segundo.",
          "Precisión inigualable en ojos complejos, gracias a la medición segmentada de la longitud axial.",
          "Integración total con la cirugía digital, llevando cada dato directamente al quirófano para implantes exactos y resultados refractivos predecibles.",
        ],
      },
      {
        title: "La ventaja frente a cualquier otro",
        content: [
          "Donde la competencia necesita ultrasonido, este sistema logra biometría óptica pura y confiable.",
          "Su velocidad superior optimiza el flujo de pacientes y multiplica la eficiencia del quirófano.",
          "Su ecosistema digital conectado convierte cada cirugía en una experiencia de precisión absoluta.",
        ],
      },
    ],
    conclusion: "El futuro de la biometría está aquí.",
    slogan:
      "Un equipo creado para brindar seguridad total al paciente y eficacia indiscutida al cirujano. No es solo una herramienta: es la elección natural para quienes buscan resultados sin sorpresas.",
  },
  {
    name: "Sistema de Vitrectomia para cirugia vitrorretiniana",
    icon: "/assets/icons/productos/sistema_vitreorretiniana.png",
    tagline: "La excelencia en cirugía vítreo-retiniana",
    category: "Equipos",
    sections: [
      {
        title: "Seguridad sin compromisos",
        content:
          "Cada detalle ha sido diseñado para garantizar la máxima estabilidad ocular durante toda la cirugía. La presión intraocular se controla en tiempo real, evitando colapsos y variaciones inesperadas. Esto se traduce en un campo quirúrgico seguro, predecible y bajo control, incluso en los procedimientos más complejos.",
      },
      {
        title: "Precisión que marca la diferencia",
        content:
          "La tecnología de corte de ultra-alta velocidad, combinada con un control independiente del flujo y vacío, permite al cirujano trabajar con una delicadeza inigualable.\n👉 Resultado: vitrectomías más rápidas, menos tracción retiniana y mayor protección para los tejidos frágiles.",
      },
      {
        title: "Iluminación inteligente",
        content:
          "Una fuente de luz potente y autorregulada aporta la claridad justa para cada etapa del procedimiento. Sin riesgos de fototoxicidad y con la confianza de trabajar siempre con la mejor visibilidad posible, el cirujano puede enfocarse en lo que realmente importa: el paciente.",
      },
      {
        title: "Integración total en un solo equipo",
        content:
          "Láser, vitrectomía e iluminación se unifican en una plataforma que simplifica el quirófano, acelera el flujo de trabajo y potencia la ergonomía. Menos equipos, menos interrupciones y mayor eficiencia en cada cirugía.",
      },
      {
        title: "Versatilidad para cada caso",
        content:
          "Desde calibres finos hasta configuraciones estándar, el sistema se adapta a las preferencias del cirujano y a las necesidades clínicas de cada paciente. La libertad de elegir la técnica adecuada está siempre al alcance.",
      },
      {
        title: "Respaldo que inspira confianza",
        content:
          "Detrás de la tecnología hay un servicio técnico especializado, disponible para acompañar cada paso. Soporte permanente, capacitación y actualizaciones aseguran que cada equipo funcione al máximo de sus capacidades, todos los días.",
      },
    ],
    conclusion: "La mejor elección para el cirujano exigente",
    slogan:
      "Eficacia, precisión y seguridad se combinan en una plataforma integral que transforma la experiencia quirúrgica. Con este sistema, cada procedimiento se convierte en una oportunidad de brindar resultados superiores y confianza absoluta a los pacientes.",
  },
];
