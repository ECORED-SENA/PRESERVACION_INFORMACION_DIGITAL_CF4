<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

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

    .row.justify-content-center.tarjeta-display
      .col-md-5(data-aos="fade-right")

      

    p.mb-4(data-aos="fade") Para el desarrollo de la conservación documental se deben tener en cuenta las siguientes etapas:


    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
