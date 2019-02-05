<template>
    <section>
      <v-navigation-drawer
     fixed
      clipped
      v-model="drawer"
      mobile-break-point="960"
      app>
        <v-list dense>
            <v-toolbar  class="hidden-sm-and-down" color="white" flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
             <v-toolbar  class="hidden-md-and-up"  flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                          ITIC
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
        <v-list-tile v-for="item in items" :key="item.text" @click="clickl(item.text)" >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar  
    color="primary"
    dense
    fixed
    clipped-left>
      <section id="logo">
        <v-toolbar-side-icon @click="cambio()" class="hidden-md-and-up"></v-toolbar-side-icon>
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
    </section>
</template>
<script>
import logo from '../assets/Calca_TIC.png'
    export default{
      name: 'minavbar',
        data:()=> {
            return{
            logo,
            drawer:true,
            items:[
              {icon:"home",text:"Home"},
              {icon:"android",text:"About"}
              ]
            
            }
        },
        methods:{
          cambio(){
            this.drawer= !this.drawer
          },
          clickl(texto){
            console.log(`path ${texto}`)
          }
        }
    }
</script>
