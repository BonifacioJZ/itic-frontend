<template>
   <div>
     <v-container>
       <Proceso :Procesos="procesos"></Proceso>
     </v-container>
   </div>
</template>
<script>
import Proceso from '../../components/procesos/Proceso'
export default {
    name: "servicio",
    data: ()=>{
        return{
            procesos:[
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          titulo:'Servicio 1',
          descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maxime? Itaque dolore, natus repellendus nostrum ullam magni voluptate, perferendis eum facilis commodi consectetur provident, amet error quam delectus? Illo, cumque?',
          archivo:1
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          titulo:'Servicio 2',
          descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maxime? Itaque dolore, natus repellendus nostrum ullam magni voluptate, perferendis eum facilis commodi consectetur provident, amet error quam delectus? Illo, cumque?',
          archivo:0
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          titulo:'Servicio 3',
          descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maxime? Itaque dolore, natus repellendus nostrum ullam magni voluptate, perferendis eum facilis commodi consectetur provident, amet error quam delectus? Illo, cumque?',
          archivo:0
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
          titulo:'Servicio 4',
          descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maxime? Itaque dolore, natus repellendus nostrum ullam magni voluptate, perferendis eum facilis commodi consectetur provident, amet error quam delectus? Illo, cumque?',
          archivo:1
        }
        ],
        
        }

    },
    components:{
      Proceso
    }
}
</script>
