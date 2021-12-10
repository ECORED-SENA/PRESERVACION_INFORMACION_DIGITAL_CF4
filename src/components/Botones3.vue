<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-around
    .col-md-6.mb-4.mb-md-0.pb-5
      .botones
        img(src='@/assets/curso/tema3-4-botones-fondo.svg', alt='Texto que describa la imagen')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-6.col-lg-6
      .tarjeta.color-tarjeta-botones3.p-3(v-if="selected === 0")
        h3 Copia Completa
        p.mb-4 Se realiza una copia de seguridad de todos los archivos y carpetas existentes. Al hacer otras copias, se guarda toda la lista de archivos. Restauración de copia de seguridad completa rápida. Sin embargo, cada uno de ellos corre lentamente y ocupa más espacio que el resto.
        .row
          .col-lg-4
            img.px-3.mb-4(src='@/assets/curso/tema3-4-tarjeta-img1.svg', alt='Imagen decorativa')
          .col-lg-4.text-center
            img.px-3.mb-4(src='@/assets/curso/tema3-4-tarjeta-img2.svg', alt='Imagen decorativa')
            p.mb-2 <strong>Copia completa</strong>
            p.mb-2 Día 1
            p.mb-0 Domingo
          .col-lg-4.text-center
            img.px-3.mb-4(src='@/assets/curso/tema3-4-tarjeta-img3.svg', alt='Imagen decorativa')
            p.mb-2 <strong>Copia completa</strong>
            p.mb-2 Día 2
            p.mb-0 Lunes

      .tarjeta.color-tarjeta-botones3.p-3(v-else-if="selected === 1")
        h3 Copia Incremental
        p.mb-4 En primer lugar, se realiza una copia de seguridad completa y las copias posteriores contienen sólo los cambios realizados desde la última copia de seguridad. Es mucho más rápido que una copia de seguridad completa y ocupa menos espacio, pero la restauración es más lenta que una copia de seguridad completa o diferencial.
        .row.text-center
          .col-lg-4
            p.mb-1 <strong>Backup Incremental 1</strong>
            img.px-3.mb-3(src='@/assets/curso/tema3-4-tarjeta2-img1.svg', alt='Imagen decorativa')
            p.mb-2 <strong>12 GB</strong>
          .col-lg-4.text-center
            p.mb-1 <strong>Backup Incremental 2</strong>
            img.px-3.mb-3(src='@/assets/curso/tema3-4-tarjeta2-img2.svg', alt='Imagen decorativa')
            p.mb-2 <strong>23 GB</strong>
          .col-lg-4.text-center
            p.mb-1 <strong>Backup Incremental 3</strong>
            img.px-3.mb-3(src='@/assets/curso/tema3-4-tarjeta2-img3.svg', alt='Imagen decorativa')
            p.mb-2 <strong>7 GB</strong>

      .tarjeta.color-tarjeta-botones3.p-3(v-else-if="selected === 2")
        h3 Copia Diferencial
        p.mb-4 Cambios realizados después de guardar una copia de seguridad completa. Es más rápido y requiere menos espacio que una copia de seguridad completa, pero ocupa más espacio que una copia de seguridad incremental. La restauración es más lenta que la copia de seguridad completa y más rápida que la copia de seguridad incremental.
        .row.text-center.align-items-end
          .col-lg-3
            p.mb-1 <strong>Backup Full</strong>
            img.mb-3(src='@/assets/curso/tema3-4-tarjeta3-img1.svg', alt='Imagen decorativa')
            p.mb-2 <strong>20 GB</strong>
          .col-lg-3.text-center
            p.mb-1 <strong>Diferencial 1</strong>
            img.px-3.mb-3(src='@/assets/curso/tema3-4-tarjeta3-img2.svg', alt='Imagen decorativa')
            p.mb-2 <strong>4 GB</strong>
          .col-lg-3.text-center
            p.mb-1 <strong>Diferencial 2</strong>
            img.px-2.mb-3(src='@/assets/curso/tema3-4-tarjeta3-img3.svg', alt='Imagen decorativa')
            p.mb-2 <strong>6 GB</strong>
          .col-lg-3.text-center
            p.mb-1 <strong>Diferencial 3</strong>
            img.px-1.mb-3(src='@/assets/curso/tema3-4-tarjeta3-img4.svg', alt='Imagen decorativa')
            p.mb-2 <strong>8 GB</strong>  

      .tarjeta.color-tarjeta-botones3.p-3(v-else-if="selected === 3")
        h3 Copia Espejo
        p.mb-4 Es un retrato exacto de la fuente que se está protegiendo, esto quiere decir que un archivo eliminado en la fuente también se eliminará en la copia de seguridad. Por este motivo, este tipo de copia de seguridad debe utilizarse con precaución.
        img.px-3.mb-3(src='@/assets/curso/tema3-4-tarjeta4-img.svg', alt='Imagen decorativa')
            
      .tarjeta.color-tarjeta-botones3.p-3(v-else-if="selected === 4")
        h3 Copia Sintética completa
        p.mb-4 Reconstruye la imagen de respaldo completa con cualquier tipo de copia incremental o diferencial.  Se puede almacenar en cintas en ubicaciones externas, con la ventaja de reducir el tiempo de recuperación.
        h4.text-center Copia de seguridad sintética
        img.mb-3(src='@/assets/curso/tema3-4-tarjeta5-img.svg', alt='Imagen decorativa')

      .tarjeta.color-tarjeta-botones3.p-3(v-else-if="selected === 5")
        h3 Backup incremental inverso
        p.mb-4 Los cambios realizados en dos informes de una copia constituyen una copia de seguridad incremental. Después de la versión completa inicial, se creará una nueva copia de seguridad completa a partir de cada versión de revisión posterior, y las versiones anteriores estarán disponibles.
        img.mb-3.px-3.px-md-4(src='@/assets/curso/tema3-4-tarjeta6-img.svg', alt='Imagen decorativa')

      .tarjeta.color-tarjeta-botones3.p-3(v-else-if="selected === 6")
        h3 Protección de datos continua
        p.mb-4 Permite más puntos de recuperación que otros tipos  de copias de seguridad. 
        img.mb-3.px-3.px-md-4(src='@/assets/curso/tema3-4-tarjeta7-img.svg', alt='Imagen decorativa')


</template>

<script>
export default {
  name: 'Botones3',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,
    size: '24%',
    botones: [
      {
        img: require('@/assets/curso/botones3-ico-01-a.svg'),
        img_h: require('@/assets/curso/botones3-ico-01.svg'),
        pos_x: '4.6%',
        pos_y: '11%',
      },
      {
        img: require('@/assets/curso/botones3-ico-02-a.svg'),
        img_h: require('@/assets/curso/botones3-ico-01.svg'),
        pos_x: '4.6%',
        pos_y: '29%',
      },
      {
        img: require('@/assets/curso/botones3-ico-03-a.svg'),
        img_h: require('@/assets/curso/botones3-ico-01.svg'),
        pos_x: '4.6%',
        pos_y: '46.7%',
      },
      {
        img: require('@/assets/curso/botones3-ico-04-a.svg'),
        img_h: require('@/assets/curso/botones3-ico-01.svg'),
        pos_x: '4.6%',
        pos_y: '64.5%',
      },
      {
        img: require('@/assets/curso/botones3-ico-05-a.svg'),
        img_h: require('@/assets/curso/botones3-ico-01.svg'),
        pos_x: '56.6%',
        pos_y: '29.5%',
      },
      {
        img: require('@/assets/curso/botones3-ico-06-a.svg'),
        img_h: require('@/assets/curso/botones3-ico-01.svg'),
        pos_x: '56.6%',
        pos_y: '47.5%',
      },
      {
        img: require('@/assets/curso/botones3-ico-07-a.svg'),
        img_h: require('@/assets/curso/botones3-ico-01.svg'),
        pos_x: '56.6%',
        pos_y: '65.1%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.tarjeta.color-tarjeta-botones3
  border-radius: 0px
  background-color: #FFF
  border: 4px solid #FF5151
.botones
  position: relative
.botones__btn
  padding-top: 9%
  background-size: cover
  position: absolute
  cursor: pointer
  transition: background-image 0.2s ease-in-out
</style>
