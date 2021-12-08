<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-tema

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Software de gestión documental 
    
    p.mb-4(data-aos="fade") El software de gestión documental es un sistema (programa) que almacena, organiza y recupera documentos de las empresas donde facilita el manejo y administración de grandes cantidades de información de manera eficiente y segura. Al hacer referencia a documentos de empresa, estos pueden ser:  facturas de compra, de venta, hojas de datos, documentos de ingresos, documentos de gastos, contratos, historias, expedientes, entre otros, según la naturaleza y fin de las empresas. La gestión documental mitiga una serie de dificultades, como:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.bg-acento-botones2
        .row.justify-content-center.align-items-center.p-4
          .col-lg-3.mb-lg-0.mb-4
            img.px-lg-4(src='@/assets/curso/tema6-ico.svg', alt='Icono decorativa')  
          .col-lg-9
            ul.lista-ul--color
              li.mb-0 
                i.fas.fa-check
                | Tiempo, personal e infraestructura, para organizar la documentación.
              li.mb-0 
                i.fas.fa-check
                | La disponibilidad en tiempo y espacio de la información.
              li.mb-0 
                i.fas.fa-check
                | La incompatibilidad de diferentes formatos: PDF, EXCEL, WORD, ETC, de los documentos originales.  

    h3.mb-4(data-aos="fade-right") Plan integrado de conservación documental 

    p.mb-4(data-aos="fade") A continuación, se mencionan algunas ventajas, al implementar software de gestión documental:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6-bloque.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color
              li.mb-0 
                i.fas.fa-check
                | Se configura y relaciona directamente con el escaner de documentos. 
              li.mb-0 
                i.fas.fa-check
                | Compatibilidad con todos los formatos de documentos.
              li.mb-0 
                i.fas.fa-check
                | Conectividad desde cualquier lugar para ver sus documentos.
              li.mb-0 
                i.fas.fa-check
                | La información se mantendrá confidencial y se controlará en el servidor de documentos. 
              li.mb-0 
                i.fas.fa-check
                | Optimiza la gestión de archivos y datos relevantes de la empresa. 
              li.mb-0 
                i.fas.fa-check
                | Posibilita el manejo de seguridad de acceso y almacenamiento confiable. 
              li.mb-0 
                i.fas.fa-check
                | Integración de bases de datos.
              li.mb-0 
                i.fas.fa-check
                | Controlar el ciclo de vida de los documentos.           

    p.mb-4(data-aos="fade") Teniendo en cuenta la gran revolución tecnológica digital que actualmente estamos viviendo, las empresas han optado por implementar Software de gestión documental que permita facilitar la realización de las tareas administrativas. Estos software pueden adquirirse de dos formas:

    .row.justify-content-center
      .col-sm-6.col-xl-5.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-4(src='@/assets/curso/tema6-flip1.svg', alt='Software disponibles en el mercado')
              h2 Software disponibles en el mercado
            .tarjeta-flip__contenido.p-5
              h2.mb-3 Software disponibles en el mercado
              p.mb-0 Estas soluciones usualmente se encuentran en el mercado a nivel nacional o mundial, donde las empresas compran la licencia de su uso y pueden parametrizar las utilidades según las necesidades de la organización. Ejemplo: Google Apps for work, Microsoft Office 365, Microsoft SharePoint Oline, Oper Text Content Suite, Docuware, Alfresco. 
      .col-sm-6.col-xl-5.mb-4
        .tarjeta.tarjeta-flip.color-acento-botones.text-center(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-4(src='@/assets/curso/tema6-flip2.svg', alt='Software diseñados a la medida')
              h2 Software diseñados a la medida
            .tarjeta-flip__contenido.p-5
              h2.mb-3 Software diseñados a la medida
              p.mb-0 Estas soluciones son diseñadas de manera personalizada por un grupo de programadores o compañía especializada en producir Software, donde previamente levantarán las necesidades de la empresa con la finalidad de construir una solución que se ajuste a la medida. 





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
