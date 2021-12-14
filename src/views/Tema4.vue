<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bases de datos
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .bloque-texto-a.color-secundario.tema4.p-4.p-md-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/tema4-ico.svg', alt='Icono decorativa')
            .col-lg-8
              .bloque-texto-a__texto.p-4.py-md-5
                p Una manera de contener u organizar información que puede ser extensa o no, es en una base de datos, que generalmente hace referencia a información almacenada de manera digital.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-8
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Una base de datos es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático. Normalmente, una base de datos está controlada por un Sistema de Gestión de Bases de Datos DBMS
              br 
              br
            h5.text-right.px-md-5 (Oracle, 2021).
            i.fas.fa-quote-right

    Separador

    // 4.1
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 4.1  Base de datos según su flexibilidad de modificación

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
        .tarjeta-avatar.tema4-1
          img(src='@/assets/curso/tema4-1-ico1.svg' alt='BD Dinámicas')
          .tarjeta.tarjeta__content.color-primario.p-4.mt-3.text-center
            h3 BD Dinámicas
            .texto-content-display
              p.mb-0 Son bases de datos que se pueden modificar en tiempo real.
      .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
        .tarjeta-avatar.tema4-1(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")  
          img(src='@/assets/curso/tema4-1-ico2.svg' alt='BD Estáticas')
          .tarjeta.tarjeta__content.color-primario.p-4.mt-3.text-center
            h3 BD Estáticas
            .texto-content-display
              p.mb-0 Son bases de datos que no se pueden modificar.

    Separador

    // 4.2
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 4.2  Base de datos según su forma de organización 

    p.mb-4(data-aos="fade") Según la forma de organizar los datos, se puede trabajar con bases de datos especializadas para cada tipo de labor:
   
    .row
      .col-md-4.mb-md-0.mb-4
        img(src='@/assets/curso/tema4-2-img.png' alt='Base de datos según su forma de organización')
      .col-md-8 
        TabsD.color-acento-botones.mb-5
          .tarjeta.bg-acento-botones4.p-4(titulo="BD jerárquicas")
            h4 BD jerárquicas
            p Son los organizados en forma de árbol al revés. Guardan la información en unos registros de una estructura jerárquica.
          .tarjeta.bg-acento-botones4.p-4(titulo="BD de red")
            h4 BD de red
            p Esta base de datos proviene de la anterior. La diferencia es que en esta un nodo hijo puede tener varios hijos en la jerarquica no.
          .tarjeta.bg-acento-botones4.p-4(titulo="BD relacionales")
            h4 BD relacionales
            p Admite designar datos y vincularlos entre sí.
          .tarjeta.bg-acento-botones4.p-4(titulo="BD deductivas")
            h4 BD deductivas
            p También llamados bases de datos lógicas. Generalmente se utilizan en motores de búsqueda, pero se pueden utilizar de otras formas.
          .tarjeta.bg-acento-botones4.p-4(titulo="BD multidimensional")
            h4 BD multidimensional
            p Esta BD utiliza un cubo de datos. La información se guarda en la unión de tres o más características.   



</template>

<script>
import TabsD from '../components/TabsD.vue'
export default {
  name: 'Tema4',
  components: {
    TabsD,
  },
  data: () => ({
    mostrarIndicador: true,
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
