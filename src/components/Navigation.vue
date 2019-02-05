<template>
    <v-navigation-drawer
     fixed
      clipped
      v-model="drawer"
      mobile-break-point="960"
      app
    >
    </v-navigation-drawer>
    
</template>

<script>
export default {
    data(){
        return{
            drawer: true
    
        }
    }
}
</script>