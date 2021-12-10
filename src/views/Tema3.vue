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

    .row.mb-5
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
