<template>
  <v-app>
    <Nav/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Nav from './views/Nav'
import Home from './views/home/Home'
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
