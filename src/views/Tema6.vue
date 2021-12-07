<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Software de gestión documental 
    
    p.mb-4(data-aos="fade") El software de gestión documental es un sistema (programa) que almacena, organiza y recupera documentos de las empresas donde facilita el manejo y administración de grandes cantidades de información de manera eficiente y segura. Al hacer referencia a documentos de empresa, estos pueden ser:  facturas de compra, de venta, hojas de datos, documentos de ingresos, documentos de gastos, contratos, historias, expedientes, entre otros, según la naturaleza y fin de las empresas. La gestión documental mitiga una serie de dificultades, como:



    h3 Plan integrado de conservación documental 

    p.mb-4(data-aos="fade") A continuación, se mencionan algunas ventajas, al implementar software de gestión documental:




</template>

<script>
export default {
  name: 'Tema6',
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
