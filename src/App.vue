<template>
  <v-app>
    <v-toolbar color="primary" app>
      
      <v-toolbar-title  class="headline text-uppercase">
        <a href="#">
          <v-btn icon>
           <v-img :src="logo" height="32px" width="32px"></v-img>
          </v-btn>
        </a>
      </v-toolbar-title>
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
