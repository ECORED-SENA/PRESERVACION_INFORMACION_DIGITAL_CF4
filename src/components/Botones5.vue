<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-around.d-flex
    .col-md-4.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/botones-fondo.svg', alt='Texto que describa la imagen')
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
    .col-md-7.botones-fondo2.px-xxl-5.px-lg-0
      
      .tarjeta.back-secundario.py-5.px-4.px-lg-5(v-if="selected === 0")
        h3 Consultas de selección
        ul.lista-ul--color
          li
            i.fas.fa-circle
            | Obtener datos de una tabla o realizar cálculos.
          li
            i.fas.fa-circle
            | Una consulta de selección, facilita obtener los datos que le interese al usuario y los combina  desde varios orígenes. 


      .tarjeta.back-secundario.py-4.px-4.px-lg-5(v-else-if="selected === 1")
        h3 Consultas de acción
        ul.lista-ul--color
          li.mb-1
            i.fas.fa-circle
            | Son consultas que pueden realizar cambios en los datos almacenados de una tabla.
          li.mb-1
            i.fas.fa-circle
            | Este tipo de consultas puede agregar, cambiar o eliminar datos. Cada tarea tiene un tipo específico de consulta de acción.
          li.mb-0
            i.fas.fa-circle
            | Existen varios tipos de consultas de acción, de eliminación, de actualización, de datos anexados y de creación de tablas.

      .tarjeta.back-secundario.py-4.px-4.px-lg-5(v-else-if="selected === 2")
        h3 Consultas de acción
        p.mb-1 Es aquella que se puede crear solamente escribiendo una instrucción SQL en la vista <b>SQL</b>.
        p Este tipo de consultas se realizan en el lenguaje <b>SQL</b> (Lenguaje de Consulta Estructurada (<em>Structured Query Language</em>), lenguaje que permite traer datos de una o varias tablas, como también actualizar contenidos o eliminarlos, de una manera rápida y poderosa y sobre grandes volúmenes de información. 


</template>

<script>
export default {
  name: 'Botones5',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,
    size: '142px',
    botones: [
      {
        img: require('@/assets/curso/botones-ico-01-a.svg'),
        img_h: require('@/assets/curso/botones-ico-01-b.svg'),
        pos_x: '23%',
        pos_y: '30%',
      },
      {
        img: require('@/assets/curso/botones-ico-02-a.svg'),
        img_h: require('@/assets/curso/botones-ico-02-b.svg'),
        pos_x: '23%',
        pos_y: '57%',
      },
      {
        img: require('@/assets/curso/botones-ico-03-a.svg'),
        img_h: require('@/assets/curso/botones-ico-03-b.svg'),
        pos_x: '23%',
        pos_y: '85%',
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
.lista-ul--color li > i:first-of-type
  font-size: 11px
  padding-top: 2px

.botones-fondo2
  background-image: url(../assets/curso/botones-fondo2.svg)
  background-repeat: no-repeat
  background-size: 100% 100%
  background-position: bottom
  height: 360px

.botones
  position: relative
.botones__btn
  background-size: 100% 100%
  position: absolute
  cursor: pointer
  transition: background-image 0.2s ease-in-out
  height: 33px

@media (max-width:$bp-max-md)
  .botones-fondo2
    background-color: #88E0EF
    background-image: none
</style>
