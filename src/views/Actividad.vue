<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo.color-acento-contenido.mb-4(data-aos="fade")
      h2 Cuestionario de repaso
    .row.mb-4.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0.mb-lg-5(data-aos="fade-right")
        .tarjeta.tarjeta--gris.h-100.d-flex.align-items-center.p-lg-2
          figure.px-lg-5.p-5
            img.px-lg-2.py-lg-4(src="@/assets/curso/act-didactica.svg", alt="Repaso")
      .col-12.col-md-8.col-lg-9.mb-lg-5(data-aos="fade-left")
        .col-lg-11.mb-lg-5.mb-3 
          p Determinar los conocimientos captados por el estudiante durante el desarrollo del programa.
        .tarjeta.bg-gris.p-2
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0.px-lg-2 Preguntas de falso – verdadero
            .col-auto.text-white
              a.boton.color-secundario.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
