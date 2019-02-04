<template>
  <v-app>
    <Nav/>
    <v-content>
      <home></home>
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
