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
              <v-spacer></v-spacer>
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
        <v-list-tile v-for="item in items" :key="item.text" @click="link(item.path)" >
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
      <v-list>
        <v-list-group
          v-for="proceso in procesos"
          v-model="proceso.active"
          :key="proceso.text"
          :prepend-icon="proceso.icon"
          no-action>
            <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ proceso.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="subproceso in proceso.items"
              :key="subproceso.title"
              @click="link(subproceso.name)"
              >
                <v-list-tile-content>
                    <v-list-tile-title>{{ subproceso.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list-group>
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
              {icon:"home",text:"Home",path:""},
              {icon:"android",text:"About"}
              ],
            procesos:[
              {
                icon:"cached",
                text:"Procesos",
                active:false,
                items:[
                  {title:"Servicio Social",name:"servicio"},
                  {title:"Residencias Profecionales",name:"recidencias"}
                ]
              }
            ]
            
            }
        },
        methods:{
          cambio(){
            this.drawer= !this.drawer
          },
          clickl(texto){
            console.log(`path ${texto}`)
          },
          link(name){
            this.$router.push({path:`/${name}`})
          }
        }
    }
</script>
