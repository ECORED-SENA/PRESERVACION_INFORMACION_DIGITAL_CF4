<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Copias de seguridad digital
      
    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3-img.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 La copia de seguridad digital es una tecnología básica para preservar la información, que implica la creación de una copia exacta de un objeto digital, sin importar el número de réplicas, donde lo importante es que la copia sea idéntica a la original.

    Separador


    // 3.1
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.1  Buenas prácticas para la realización de copias de seguridad 

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3-1-img.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p Hoy en día las empresas crean sus propias políticas de seguridad de la información y dentro de estas se estipulan buenas prácticas para la creación de copias de seguridad; estas difieren en cada entidad, teniendo en cuenta el volumen de información, su nivel de crecimiento exponencial, el tipo de datos (financieros, académicos, comerciales, etc.).

    p.mb-4(data-aos="fade") Es así que a continuación se mencionan algunas buenas prácticas, alrededor de cinco áreas fundamentales:

    .row
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.py-5
          .tarjeta-numerada__numero.text-white
            .h2 1
          img.px-2.mb-4(src='@/assets/curso/tema3-1-tarj1.svg', alt='Imagen decorativa')
          p.px-3.text-center.mb-0 Seleccionar la información que queremos proteger.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.py-5
          .tarjeta-numerada__numero.text-white
            .h2 2
          img.px-2.mb-4(src='@/assets/curso/tema3-1-tarj2.svg', alt='Imagen decorativa')
          p.px-3.text-center.mb-0 Configurar la manera en la que haremos la copia.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.py-5
          .tarjeta-numerada__numero.text-white
            .h2 3
          img.px-2.mb-4(src='@/assets/curso/tema3-1-tarj3.svg', alt='Imagen decorativa')
          p.px-3.text-center.mb-0 Almacenar la información cifrada en otra ubicación distinta a la principal.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.py-5
          .tarjeta-numerada__numero.text-white
            .h2 4
          img.px-2.mb-4(src='@/assets/curso/tema3-1-tarj4.svg', alt='Imagen decorativa')
          p.px-3.text-center.mb-0 Plan de pruebas periódicas de restauración de copias.  

    Separador


    // 3.2
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.2  Tipos de copia de seguridad 

    p.mb-4(data-aos="fade") Una vez valorada la información de la organización y su fin, se puede determinar el tipo de copia a realizar y su periodicidad. 





    Separador


    // 3.3
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.3  Tipos de copias de seguridad, según su destino 

    p.mb-4(data-aos="fade") El tipo de copia de seguridad está también supeditado a donde finalmente vaya a dirigir su destino, es decir, si sus réplicas quedarán a nivel interno o externo, a continuación en la figura 2 se explica de mejor manera. 

    .row.justify-content-center
      .col-lg-10.col-md-11
        .titulo-sexto.color-secundario(data-aos="fade-right")
          p.mb-0 <b>Figura 2.</b> Según su destino 
        .row.justify-content-center
          .col-lg-10.col-md-11  
            figure.mb-5
              img.mb-3(src='@/assets/curso/tema3-3-fig1.svg', alt='Según su destino')
              figcaption Nota. SENA (2021).

    Separador


    // 3.4
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.4  Integridad de la información

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8.col-md-10
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 La seguridad de la información, según ISO 27001, consiste en la preservación de confidencialidad, integridad y disponibilidad así como los sistemas implicados en su tratamiento, dentro de una organización.
              br 
            h5.text-right.px-md-5 (Lisot, 2021).
            i.fas.fa-quote-right

    p.mb-4(data-aos="fade") Por lo anterior, al hablar de integridad se habla de exactitud y fiabilidad, por ello es importante garantizarla, porque puede empezar con no cumplirse por errores o malas prácticas desde la fuente humana, ver figura 3. 

    .row.justify-content-center.mb-5
      .col-lg-10.col-md-11
        .titulo-sexto.color-secundario(data-aos="fade-right")
          p.mb-0 <b>Figura 3.</b> Integridad de datos 
        figure
          img.mb-3(src='@/assets/curso/tema3-4-fig1.svg', alt='Integridad de datos')
          figcaption Nota. Tecnología de información (2018).

    p.mb-4(data-aos="fade") Es por ello, que las organizaciones deben enfocarse en suministrar información que se mantenga disponible de manera auténtica, segura, respaldada, por ello es importante la implementación y aplicación del Sistema de Gestión de la Seguridad de la Información (SGSI), a continuación en la figura 4 se exponen características importantes:

    .row.justify-content-center.mb-5
      .col-lg-8.col-md-11
        .titulo-sexto.color-secundario(data-aos="fade-right")
          p.mb-0 <b>Figura 4.</b> Características de SGSI 
        figure
          img.mb-3(src='@/assets/curso/tema3-4-fig4.svg', alt='Características de SGSI')
          figcaption Nota. Lisot (2021).



</template>

<script>
export default {
  name: 'Tema3',
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
