<template>
  <v-app>
    <v-toolbar  color="primary" class="text-md-center" app>
      <section id="logo">
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
          <a href="#">
            <v-btn icon>
              <v-img :src="logo" height="32px" width="32px"></v-img>
            </v-btn>
            </a>
      </section>
        <v-spacer></v-spacer>
      <section id="titulo">
        <section class="hidden-sm-and-down" >
          <v-toolbar-title >
           <span>Ingenieria en Tecnologias de la Informacion y Comunicaciones</span>
          </v-toolbar-title>
        </section>
        <section class="hidden-md-and-up">
          <v-toolbar-title>
            <span>ITIC</span>
          </v-toolbar-title>
        </section>
      </section>
      
    </v-toolbar>

    <v-content>
    
    </v-content>
  </v-app>
</template>

<script>

import Logo from './assets/Calca_TIC.png'

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      logo:Logo
    }
  }
}
</script>
