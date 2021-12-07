<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mantenimiento a largo plazo
    
    p.mb-4(data-aos="fade") Es importante tener claridad sobre la definición de preservación a largo plazo, ver figura 1:



    
   
   
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
