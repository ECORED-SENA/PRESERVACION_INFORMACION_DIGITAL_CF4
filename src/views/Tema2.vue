<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mantenimiento a largo plazo
    
    p.mb-4(data-aos="fade") Es importante tener claridad sobre la definición de preservación a largo plazo, ver figura 1:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8.col-md-10
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Conjunto de acciones y estándares aplicados a los documentos durante su gestión para garantizar su preservación en el tiempo, independientemente de su medio y forma de registro o almacenamiento. La preservación a largo plazo aplica al documento electrónico de archivo con su medio correspondiente en cualquier etapa de su ciclo vital.
              br 
              br
            h5.text-right.px-md-5 (MEN, 2020).
            i.fas.fa-quote-right


    .titulo-sexto.color-secundario(data-aos="fade-right")
      p.mb-0 <b>Figura 1.</b> Plan de preservación digital a largo plazo

    .row.mb-4(data-aos="fade-down")
      .col-lg-4.mb-2.text-white.text-center
        img(src='@/assets/curso/tema2-img1.jpg', alt='Imagen decorativa')  
        h4.bg-secundario.p-2.mb-0 Documentos electrónicos de archivo
      .col-lg-4.mb-2.text-white.text-center
        img(src='@/assets/curso/tema2-img2.jpg', alt='Imagen decorativa')  
        h4.bg-secundario.p-2.mb-0 Documentos nacidos digitales
      .col-lg-4.mb-2.text-white.text-center
        img(src='@/assets/curso/tema2-img3.jpg', alt='Imagen decorativa')  
        h4.bg-secundario.p-2.mb-0 Documentos de archivo digitalizados
      .col-12.align-items-center
        h1.bg-acento-contenido.text-white.text-center.mb-3.p-2 Incluye: <em>Software</em> y <em>Hardware</em>
        figcaption Nota. SENA (2021).

    p.mb-4(data-aos="fade") La preservación digital debe guiarse por principios, políticas, estándares y estrategias para que los archivos digitales se mantengan en su estado óptimo y sigan siendo útiles a lo largo del tiempo.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-gris.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.px-lg-3(src="@/assets/curso/tema2-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Plan de preservación digital 
                  p.text-small Para mayor profundización sobre los planes de preservación digital, se comparte guía del Ministerio de Educación Nacional. 
                .col-sm-auto
                  a.boton.color-secundario.texto-blanco(href="https://www.mineducacion.gov.co/1759/articles-362792_recurso_89.pdf" target="_blank")
                    span Enlace
                    i.fas.fa-link

    Separador


    // 2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1  Estrategias y técnicas de preservación digital 

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2-1-img.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p Las estrategias y técnicas de preservación digital deben ser universales, precisas y de bajo costo, con el fin de que no se vuelvan obsoletas con el pasar del tiempo. 

    p.mb-4(data-aos="fade") Posteriormente se van a nombrar algunas estrategias y técnicas que se utilizan comúnmente:

    .row.justify-content-center.bg-acento-botones2.mb-4(data-aos="fade-down")
      .col-lg-10.col-md-11.py-4
        SlyderE(indicadores="derecha")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 1. Identificar los documentos electrónicos definitivos 
              ul.lista-ul--color.circulo-vacio
                li
                  i.far.fa-circle
                  | Para crear un documento electrónico se debe convertir de documento electrónico a documento de archivo electrónico, previo a la aprobación, control y movimientos por los que debe pasar el documento, de acuerdo con sus términos.
                li
                  i.far.fa-circle
                  | De igual forma se deben identificar los documentos digitalizados y los nativos digitales y los que se deben mantener digitalmente de acuerdo con las Tablas de Valoración (TVD) y Retención documental (TRD).
            .col-md-6
              figure
                img(src='@/assets/curso/tema2-1-slide1.jpg', alt='Identificar los documentos electrónicos definitivos')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 2. Normalizar la producción electrónica de documentos 
              ul.lista-ul--color.circulo-vacio
                li
                  i.far.fa-circle
                  | La entidad debe definir las características y atributos de la creación de documentos electrónicos especificados reglamentados en el uso de estándares de preservación digital. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema2-1-slide2.jpg', alt='Normalizar la producción electrónica de documentos ')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 3. Utilizar metadatos de preservación  
              ul.lista-ul--color.circulo-vacio
                li
                  i.far.fa-circle
                  | Los metadatos proporcionan la estructura del objeto digital, lo que nos permite obtener toda la información necesaria para utilizar el documento. Con un sistema de gestión documental, las actividades deben definirse para que se registre el patrón de metadatos a almacenar. Información útil para la preservación digital. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema2-1-slide3.jpg', alt='Utilizar metadatos de preservación')
          .row
            .col-md-6.mb-4.mb-md-0
              h4 4. Firmar electrónicamente   
              ul.lista-ul--color.circulo-vacio
                li
                  i.far.fa-circle
                  | Los documentos electrónicos se pueden autenticar mediante técnicas de sellado de tiempo, firmas electrónicas o firmas digitales.
            .col-md-6
              figure
                img(src='@/assets/curso/tema2-1-slide4.jpg', alt='Firmar electrónicamente')      
          .row
            .col-md-6.mb-4.mb-md-0
              h4 5. Mantenimiento de firmas electrónicas  
              p.mb-0 Los documentos con firma electrónica tienen valor legal, y existen algunos riesgos que deben ser tratados para que sigan siendo válidos durante el tiempo de tramitación.
              p Los riesgos son:
              ul.lista-ul--color.circulo-vacio
                li.mb-0
                  i.far.fa-circle
                  | La caducidad del certificado digital.
                li.mb-0
                  i.far.fa-circle
                  | La vigencia del certificado digital. 
                li.mb-0
                  i.far.fa-circle
                  | Tecnología obsoleta con las claves criptográficas. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema2-1-slide5.jpg', alt='Mantenimiento de formas electrónicas')  
          .row
            .col-md-6.mb-4.mb-md-0
              h4 6. Migración 
              p Es la transformación de un archivo digital de un formato a otro que se hace para tener acceso, conservando la autenticidad, integridad, fiabilidad y disponibilidad del archivo de origen. 
              p Los tipos de migración son: 
              ul.lista-ul--color.circulo-vacio
                li.mb-0
                  i.far.fa-circle
                  | Renovación de medios o refresco. 
                li.mb-0
                  i.far.fa-circle
                  | Replicación. 
                li.mb-0
                  i.far.fa-circle
                  | Reenvasado y/o Realmacenamiento. 
                li.mb-0
                  i.far.fa-circle
                  | Transformación.   
            .col-md-6
              figure
                img(src='@/assets/curso/tema2-1-slide6.jpg', alt='Migración')    
          .row
            .col-md-6.mb-4.mb-md-0
              h4 7. Conservación a formatos longevos normalizados  
              p Cuando los documentos llegan en diferentes formatos y no están incluidos en la lista estándar, deben modificar el formato para recuperar información.
              p Los archivos electrónicos deben convertirse a un formato estándar independientemente de si el <i>software</i> es especializado o no.
            .col-md-6
              figure
                img(src='@/assets/curso/tema2-1-slide7.jpg', alt='Conservación a formatos longevos normalizados ')   
          .row
            .col-md-6.mb-4.mb-md-0
              h4 8. Archivar y mantener el acceso a los documentos electrónicos de archivo 
              p A través de políticas de seguridad, los documentos electrónicos se almacenan y se conservan, teniendo en cuenta las especificaciones y condiciones de almacenamiento, diseñadas específicamente para preservar y los objetos digitales.
            .col-md-6
              figure
                img(src='@/assets/curso/tema2-1-slide8.jpg', alt='Archivar y mantener el acceso a los documentos electrónicos de archivo')  

    p.mb-4(data-aos="fade") En la siguiente tabla 1, se presentan algunos formatos comúnmente utilizados para la elaboración de documentos electrónicos de archivo:

    .texto-resaltado.text-center.text-white.mb-5
      h3.mb-0
        span.bg-acento-contenido.p-3 (D = Difusión) (P = Preservación) Contenido de Texto


    .titulo-sexto.color-secundario(data-aos="fade-right")
      p.mb-0 <b>Tabla 1.</b> Formatos de archivo de uso común

    .tabla-b.color-acento-botones
      table
        caption Nota. MinTIC (2017).
        thead.tabla-b__header.top-borde
          tr
            th.th1 Formato
            th.th2 Características
            th.th3 Extensión
            th.th4 Estándar
            th.th5 D
            th.th6 P
        tbody 
          tr
            td 
              strong Texto Plano
            td Formato que contiene únicamente texto formado solo por carácteres que son legibles, sin ningún tipo de formato tipográfico.
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong .txt
                li.mb-4
                  i.fas.fa-circle
                  strong .csv   
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong ISO/IEC 646
                li.mb-4
                  i.fas.fa-circle
                  strong RFC 4180 
            td 
              ul.lista-ul--color.check-tabla
                li.mb-4
                  i.far.fa-check-circle
                  | 
                li.mb-4
                  i.far.fa-check-circle
                  | 
            td   
          tr
            td 
              strong Office OpenXML
            td Formato de procesador de textos basado en lenguaje XML abierto de Microsoft Office.
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong .docx
                li.mb-4
                  i.fas.fa-circle
                  strong .xlsx
                li.mb-4
                  i.fas.fa-circle
                  strong .pptx 
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong ISO/IEC
                li.mb-4
                  i.fas.fa-circle
                  strong 29500
                li.mb-4
                  i.fas.fa-circle
                  strong ECMA-376 
            td 
              ul.lista-ul--color.check-tabla
                li.mb-4
                  i.far.fa-check-circle
                  | 
                li.mb-4
                  i.far.fa-check-circle
                  | 
                li.mb-4
                  i.far.fa-check-circle
                  |     
            td   
          tr
            td 
              strong Open Document
            td Formato de Documento Abierto para Aplicaciones Ofimáticas, basado en XML y diseñado para soportar la edición.
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong .odt
                li.mb-4
                  i.fas.fa-circle
                  strong .ods
                li.mb-4
                  i.fas.fa-circle
                  strong .odp
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong ISO/IEC
                li.mb-4
                  i.fas.fa-circle
                  strong 26300
                li.mb-4
                  i.fas.fa-circle
                  strong OASIS 1.2
            td 
              ul.lista-ul--color.check-tabla
                li.mb-4
                  i.far.fa-check-circle
                  | 
                li.mb-4
                  i.far.fa-check-circle
                  | 
                li.mb-4
                  i.far.fa-check-circle
                  |     
            td   
          tr
            td 
              strong PDF
            td De tipo compuesto (imagen vectorial, mapa de bits y texto), que contiene soporte para anotaciones, metadatos, etc.
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong .pdf  
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong ISO 32000
            td 
              ul.lista-ul--color.check-tabla
                li.mb-4
                  i.far.fa-check-circle
                  | 
            td  
          tr
            td 
              strong PDF/A
            td Formato de archivo de documentos electrónicos para la preservación a largo plazo.
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong .pdf  
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong ISO 19005
            td 
            td 
              ul.lista-ul--color.check-tabla
                li.mb-4
                  i.far.fa-check-circle
                  | 
          tr
            td 
              strong PDF/A-1
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  | PDF/A-1 Restricciones en cuanto al uso del color, fuentes, y otros elemento.
                li.mb-4
                  i.fas.fa-circle
                  | PDF/A-1b (Subnivel b = Básico) Garantiza que el texto del documento se puede visualizar correctamente.
                li.mb-4
                  i.fas.fa-circle
                  | PDF/A-1a (Subnivel a = avanzado) Documento etiquetado lo que permite añadir información sobre su estructura.     
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong .pdf  
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong ISO 19005
            td 
            td 
              ul.lista-ul--color.check-tabla
                li.mb-5
                  i.far.fa-check-circle
                  |  
                li.mb-5
                  i.far.fa-check-circle
                  |  
                li.mb-5
                  i.far.fa-check-circle
                  |                 
          tr
            td 
              strong PDF/ A-2
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  | PDF/A-2 Características adicionales que no están disponibles en formato PDF/A-1.
                li.mb-4
                  i.fas.fa-circle
                  | PDF/A-2b (Subnivel b = Básico) Se cumplen todos los requisitos descritos como necesarios.
                li.mb-4
                  i.fas.fa-circle
                  | PDF/A-2a (Subnivel a = avanzado) Adicional contiene información textual o sobre la estructura lógica del documento.
                li.mb-4
                  i.fas.fa-circle
                  | PDF/A-2u (Subnivel u = Unicode) Requisito adicional, todo el texto en el documento tienen equivalentes en Unicode.
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong .pdf  
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  strong ISO 19005
                li.mb-4
                  i.fas.fa-circle
                  strong ISO 32000-1 
            td 
            td 
              ul.lista-ul--color.check-tabla
                li.mb-5
                  i.far.fa-check-circle
                  |  
                li.mb-5
                  i.far.fa-check-circle
                  |  
                li.mb-5
                  i.far.fa-check-circle
                  |  
                li.mb-5
                  i.far.fa-check-circle
                  | 
          tr
            td 
              strong PDF/A-3
            td 
              ul.lista-ul--color.tabla
                li.mb-4
                  i.fas.fa-circle
                  | PDF/A-3 Ofrece soporte para archivos incrustados.
                li.mb-4
                  i.fas.fa-circle
                  | PDF/A-3b (Subnivel b = básico) Se cumplen todos los requisitos descritos como necesarios para un PDF/A-3.
                li
                  i.fas.fa-circle
                  | PDF/A-3a (Subnivel a = avanzado) etiquetado de forma que se describa y conserve la estructura lógica —el orden de lectura.
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong .pdf  
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong  ISO 32000-1
            td 
            td 
              ul.lista-ul--color.check-tabla
                li.mb-5
                  i.far.fa-check-circle
                  |  
                li.mb-5
                  i.far.fa-check-circle
                  |  
                li.mb-5
                  i.far.fa-check-circle
                  |                           
          tr
            td 
              strong XML
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  | Es un estándar abierto, flexible y ampliamente utilizado para almacenar, publicar e intercambiar cualquier tipo de información.
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong .xml 
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong W3C HTML Estándar Abierto
            td 
              ul.lista-ul--color.check-tabla
                li
                  i.far.fa-check-circle
                  |  
            td 
              ul.lista-ul--color.check-tabla
                li
                  i.far.fa-check-circle
                  |  
          tr
            td 
              strong HTML
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  | Es un formato para documentos y datos estructurados, se utiliza para crear documentos de hipertexto.
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong .html 
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong ISO/IEC 15445 W3C HTML Estándar Abierto
            td 
              ul.lista-ul--color.check-tabla
                li
                  i.far.fa-check-circle
                  |  
            td 
          tr
            td 
              strong HTML
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  | Es un formato para documentos y datos estructurados, se utiliza para crear documentos de hipertexto.
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong .html 
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong ISO/IEC 15445 W3C HTML Estándar Abierto
            td 
              ul.lista-ul--color.check-tabla
                li
                  i.far.fa-check-circle
                  |  
            td
          tr
            td 
              strong JSON
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  | JavaScript Object Notation Formato de texto ligero para el intercambio de datos.
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong .json
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong RFC 7159
            td 
              ul.lista-ul--color.check-tabla
                li
                  i.far.fa-check-circle
                  |  
            td  
          
          tr.tabla-b__header
            th(colspan="6").th1 Formato de modelado de procesos
          tr
            td 
              strong XPDL
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  p.mb-0 Formato de diseño de procesos para almacenar el diagrama visual y la sintaxis de proceso de los modelos (<em>workflow</em>).
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong .xpdl
            td 
              ul.lista-ul--color.tabla
                li
                  i.fas.fa-circle
                  strong WfMC (<em>Workflow</em> Management Coalition)
            td 
              ul.lista-ul--color.check-tabla
                li
                  i.far.fa-check-circle
                  |  
            td  
                  

    Separador


    // 2.2
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2  Tablas de control de acceso    

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Conjunto de políticas, directrices, procedimientos, controles y medidas de seguimiento que implementa la entidad con el fin de asegurar la protección y acceso a la información que se produce al interior. (Mineducación).
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2-2-img.png', alt='Imagen decorativa')  

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-gris.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.px-lg-3(src="@/assets/curso/tema2-2-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tablas control de acceso 
                  p.text-small Para mayor consulta, a continuación se presentan tablas de control de acceso utilizadas, con la finalidad de proteger la información contra el acceso, recolección, divulgación, eliminación, alteración y/o destrucción no autorizada. 
                .col-sm-auto
                  a.boton.color-secundario.texto-blanco(href="https://www.mineducacion.gov.co/1759/w3-article-398601.html?_noredirect=1" target="_blank")
                    span Enlace
                    i.fas.fa-link



   
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
