export default {
  global: {
    componenteFormativo: 'Preservación y consulta',
    descripcionCurso:
      'El manejo de la documentación con el pasar del tiempo se han ido adaptando a los avances tecnológicos, de esta manera, buscan un acercamiento a la sociedad en general, volviendo accesible la información en cualquier momento, en cualquier lugar, garantizando la autenticidad de lo consultado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Preservación y publicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mantenimiento a largo plazo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estrategias y técnicas de preservación digital',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tablas de control de acceso',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Copias de seguridad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Buenas prácticas para la realización de copias de seguridad',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de copia de seguridad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos de copia de seguridad según su destino',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Integridad de la información',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Bases de datos según su flexibilidad de modificación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Bases de datos según su forma de organización',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Información de consulta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de consulta',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Derechos de autor',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: '<em>Software</em> de gestión documental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (s,f). Fundamentos de preservación digital a largo plazo. ',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/12.%20herramientas/DT%20-%20MANUAL%20FUNDAMENTOS%20DE%20PRESERVACION%20DIGITAL%20A%20LARGO%20PLAZO.pdf',
    },
    {
      referencia:
        'Ley 23 de 1982. Sobre derechos de autor. 28 de enero de 1982. ',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_23_1982.pdf',
    },
    {
      referencia:
        'Dirección nacional de derechos de autor. (2021). Preguntas frecuentes. ',
      link: 'http://derechodeautor.gov.co:8080/preguntas-frecuentes#10',
    },
    {
      referencia:
        'Lisot (2018). ¿Qué es un Sistema de Gestión de la Seguridad de la Información (SGSI)? ',
      link:
        'https://www.lisot.com/que-es-un-sistema-de-gestion-de-la-seguridad-de-la-informacion-sgsi/#',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). Manual Sistema Integrado de Conservación – SIC 2020.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-322548_recurso_25.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2021). Plan de preservación digital. ',
      link:
        'https://www.mineducacion.gov.co/1759/articles-362792_recurso_89.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2021). Tablas de control de acceso.',
      link:
        'https://www.mineducacion.gov.co/1759/w3-article-398601.html?_noredirect=1',
    },
    {
      referencia: 'MinTIC. (2017). Formato de archivos de uso común. ',
      link:
        'https://mintic.gov.co/arquitecturati/630/articles-61594_recurso_pdf.pdf',
    },
    {
      referencia: '(OMPI, 2021). Tratado de la OMPI sobre derechos de autor. ',
      link: 'https://www.wipo.int/treaties/es/ip/wct/index.html',
    },
    {
      referencia: 'Oracle. (2021). Base de datos. ',
      link: 'https://www.oracle.com/co/database/what-is-database/',
    },
    {
      referencia: 'Tecnología de información. (2018). Integridad de datos. ',
      link: 'https://www.tecnologias-informacion.com/integridaddatos.html',
    },
    {
      referencia: 'UNESCO ORG. (2021). El patrimonio digital. ',
      link:
        'https://es.unesco.org/themes/information-preservation/digital-heritage',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación',
      significado:
        'Es el intercambio de información entre dos o más personas con el fin de recibir o dar información.',
    },
    {
      termino: 'Consulta',
      significado: 'Buscar información en una fuente.',
    },
    {
      termino: 'Digital',
      significado:
        'Dispositivos que son diseñados con un sistema binario para almacenar información.',
    },
    {
      termino: 'Flexibilidad',
      significado: 'Capacidad de adaptarse a las circunstancias.',
    },
    {
      termino: 'Gestión',
      significado:
        'Es la implementación de algunas actividades específicas para llegar a un objetivo.',
    },
    {
      termino: 'Información',
      significado: 'Es un grupo de datos que forman un mensaje.',
    },
    {
      termino: 'Metadatos',
      significado: 'Es la descripción de datos.',
    },
    {
      termino: 'Organización',
      significado:
        'Es un equipo de trabajo que está capacitado para lograr un objetivo. ',
    },
    {
      termino: 'Política',
      significado:
        'Es un grupo de normas establecidas para la toma de decisiones.',
    },
    {
      termino: 'Preservación',
      significado:
        'Es un conjunto de actividades para proteger un registro durante su ciclo de vida.',
    },
    {
      termino: 'Programa',
      significado:
        'Es un algoritmo en un lenguaje de programación que nos permite desarrollar ciertas tareas.',
    },
  ],
  complementario: [
    {
      texto:
        'Gestor de la información y contenidos digitales. (2020). Preservación digital. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/GkOJJ7g1wU8',
    },
    {
      texto:
        'Canal AGN Colombia. (2018). Plan de preservación de largo plazo. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/avy2qDB3CDs',
    },
    {
      texto: 'Código Compilado. (2015). Bases de datos. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/yoeV4Ex8C8U',
    },
    {
      texto:
        'Digital UANL. (2015). Bases de datos: consultas. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/uls5cGWGZvw',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios. CIES. <br>Regional Norte de Santander',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
