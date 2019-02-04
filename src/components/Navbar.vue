<template>
    <v-toolbar  
    color="primary"
    dense
    fixed
    clipped-left>
      <section id="logo">
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
          <a href="#">
            <v-btn icon  class="mx-3">
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
</template>
<script>
import logo from '../assets/Calca_TIC.png'
    export default{
        data() {
            return{
            logo,
            drawer: true,
      items: [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
            }
        }
    }
</script>
