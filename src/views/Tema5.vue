<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Información de consulta

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Desde el punto de vista de documentación física, la consulta es visualizar un documento, siempre y cuando exista el permiso para acceder a este. 
        p Desde el punto de vista tecnológico, una consulta es el método para extraer información de una base de datos digital. Mediante las consultas se puede agregar, eliminar y cambiar datos en una base de datos, según la instrucción dada. Cada base de datos tiene su mecanismo propio para realizar consultas, algunos tipos de consulta requiere de personal especializado, según sea el nivel de seguridad de la base de datos. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema5-img.png', alt='Imagen decorativa')  
    
    p.mb-4(data-aos="fade") Las consultas facilitan la visualización, adición, eliminación y cambio de datos en una base de datos. Algunos beneficios de las consultas son:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.bg-acento-botones2
        .row.justify-content-center.align-items-center.p-4
          .col-lg-3.col-4.mb-lg-0.mb-4.px-lg-4
            img.px-lg-4(src='@/assets/curso/tema5-ico.svg', alt='Icono decorativa')  
          .col-lg-9
            ul.lista-ul--color
              li.mb-0 
                i.fas.fa-check
                | Hallar datos concretos rápidamente, filtrándolos por ciertos requisitos (condiciones).
              li.mb-0 
                i.fas.fa-check
                | Evaluar y simplificar datos. 
              li.mb-0 
                i.fas.fa-check
                | Mecanizar la administración de datos. 

    Separador

    // 5.1
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 5.1  Tipos de consulta

    p.mb-0(data-aos="fade") Las consultas dependen de la información que se desea obtener de una base de datos en particular. Para realizar consultas se requiere que los usuarios tengan permisos y perfiles para poder visualizar la información requerida, es decir, los datos no deben estar disponible en su totalidad para todos los usuarios. 
    p.mb-4(data-aos="fade") A continuación se presentan, algunos tipos de consulta más utilizados:

    .row.justify-content-center.bg-componente.mb-5(data-aos="fade-down")
      .col-lg-11
        Botones5(data-aos="fade-down")

    p(data-aos="fade") Las consultas pueden ser generales o especializadas, todo depende del diseño de la base de datos y de la información que requiere cada usuario, por ello el precedente principal, es que al momento de diseñar la base de datos esté estructurada de manera que posteriormente el proceso de consulta sea eficiente.

    Separador

    // 5.2
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 5.2  Derechos de autor 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5-2-bloque.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 Es la protección que le otorga el Estado al creador de las obras literarias o artísticas desde el momento de su creación y por un tiempo determinado (Dirección nacional de derechos de autor, 2021).

    p.mb-4(data-aos="fade") Según la dirección nacional de derechos de autor, el tratado OMPI sobre Derecho de Autor ha sido aprobado en Colombia mediante la Ley 565 de 2000, y en el ámbito internacional ha entrado en vigencia el 6 de marzo de 2002.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .cajon.color-acento-contenido.p-4.px-md-5
          .h4 Tratado de la OMPI sobre Derecho de Autor
          p “El Tratado de la OMPI sobre Derecho de Autor (WCT) es un arreglo particular adoptado en virtud del Convenio de Berna que trata de la protección de las obras y los derechos de sus autores en el entorno digital. Además de los derechos reconocidos en el Convenio de Berna, se conceden determinados derechos económicos. El Tratado también se ocupa de dos objetos de protección por derecho de autor: i) los programas de computadora, con independencia de su modo o forma de expresión, y ii) las compilaciones de datos u otros materiales (“bases de datos”)”.  (OMPI, 2021).

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-gris.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.px-lg-3(src="@/assets/curso/tema5-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ley 23 de 1982
                  p.text-small A continuación, se relaciona, la “Ley 23 de 1982”, emitida por el Congreso de la República, sobre derechos de autor, y dentro de esta misma ley, podrá consultar la ley modificatoria “Ley 44 de 1993” y el “Decreto Nacional 1474 de 2002”, donde se promulga el Tratado de la OMPI.
                .col-sm-auto
                  a.boton.color-secundario.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace
                    i.fas.fa-link



</template>

<script>
import Botones5 from '../components/Botones5.vue'
export default {
  name: 'Tema5',
  components: {
    Botones5,
  },
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
