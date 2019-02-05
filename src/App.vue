<template>
  <v-app>
    <Nav/>
    <v-content>
       <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <home/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import Home from './views/Home'
import Nav from './views/Nav'
export default {
  name: 'App',
  components: {
    Home,
    Nav
  },
  data () {
    return {
    //
    }
  }
}
</script>
