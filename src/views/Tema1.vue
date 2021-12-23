<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Preservación y publicación 

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Preservar es diferente a publicar, primero se debe asegurar que antes de publicar la información digital, esta debe tener condiciones para mantener de forma auténtica, legible e íntegra la documentación, aplicando métodos y normas destinadas a su almacenamiento para largos periodos en tiempo,  es así, que la publicación de esta, dependerá de las tecnologías implementadas para la disponibilidad de la información, migrando, a medida que las tecnologías van avanzando, sin olvidar que lo más importante es que los datos no sean alterados. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") El Sistema Integrado de Conservación, se desarrollará a través de los siguientes componentes:

    .row.justify-content-center.mb-md-4
      .col-md-5.tarjeta-display.text-center.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-display__content.bg-secundario2.px-3.py-4
          img.mb-4(src='@/assets/curso/tema1-tarjeta1.png', alt='Plan de Conservación Documental')
          h3 Plan de conservación documental
          .content-tarjeta
            p.mb-0 El cual aplica a los documentos de archivo creados en medios físicos y/o análogos.
      .col-md-5.tarjeta-display.text-center.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta-display__content.bg-secundario2.px-3.py-4(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img.mb-4(src='@/assets/curso/tema1-tarjeta2.png', alt='Plan de Preservación Digital a Largo Plazo')
          h3 Plan de preservación digital a largo plazo
          .content-tarjeta
            p.mb-0 Este aplica a documentos digitales y/o electrónicos de archivo. 

    p.mb-4(data-aos="fade") Para el desarrollo de la conservación documental se deben tener en cuenta las siguientes etapas:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1-infografia.svg', alt='Etapas para el desarrollo de la conservación documental')

          div.row.bg-secundario.p-4(x="31%" y="94%" tooltip="Clic para ver más" numero="")
            .col-md-5
              h3 Diseño
              p Se refiere a la planeación, ejecución y verificación de las actividades que se deben realizar.
            .col-md-7
              img(src='@/assets/curso/tema1-infografia1.png', alt='Diseño')  
          div.row.bg-secundario.p-4(x="45%" y="83%" tooltip="Clic para ver más" numero="")
            .col-md-5
              h3 Mantenimiento
              p Inspección y vigilancia para la conservación de los documentos manteniendo sus características principales.
            .col-md-7
              img(src='@/assets/curso/tema1-infografia2.png', alt='Mantenimiento') 
          div.row.bg-secundario.p-4(x="58%" y="71%" tooltip="Clic para ver más" numero="")
            .col-md-5
              h3 Difusión
              p Concientización interna y externa para salvaguardar la información.
            .col-md-7
              img(src='@/assets/curso/tema1-infografia3.png', alt='Difusión') 
          div.row.bg-secundario.p-4(x="71.5%" y="51%" tooltip="Clic para ver más" numero="")
            .col-md-5
              h3 Administración
              p Dirigir los pautas establecidas para desarrollar las actividades para la conservación documental.
            .col-md-7
              img(src='@/assets/curso/tema1-infografia4.png', alt='Administración')             


    h4.mb-4(data-aos="fade") Plan integrado de conservación documental 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-bloque.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El plan integrado de conservación documental está orientado en definir el paso a paso o acciones, que constantemente se deben aplicar para poder minimizar el deterioro de los soportes documentales para el caso de documentos en papel y la preservación de los documentos digitales, para el caso digital. Este plan debe indicar los sistemas de almacenamiento, en sus diferentes fases de archivo. Estas actividades requieren de seguimiento de las acciones para que se minimicen los riesgos de la pérdida de información.  Cada plan depende de las políticas, sistemas de calidad, programas y control de cada organización. 

    .row.justify-content-center(data-aos="fade-down")
      .col-md-8
        .bloque-texto-b.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-4 El patrimonio digital del mundo corre el peligro de perderse para la posteridad. Contribuyen a ello, entre otros factores, la rápida obsolescencia de los equipos y programas informáticos que le dan vida, las incertidumbres existentes en torno a los recursos, la responsabilidad y los métodos para su mantenimiento y conservación y la falta de legislación que ampare estos procesos.
              br 
              br
            h5.text-right.px-md-5 (UNESCO).
            i.fas.fa-quote-right






    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
