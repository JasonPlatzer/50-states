<template>
<div class="state-map"> 
  <h2>The state of {{state.name}}</h2>
    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state yet</p>
    <div id="map-container" v-if="dataReady">
     <!-- l-map a leaflet map-->
     <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom"> 
         <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors">
          
         </l-tile-layer>
         </l-map>   

    </div>



</div>

    
</template>

<script>
import {LMap, LTileLayer} from '@vue-leaflet/vue-leaflet'

export default {
    name: 'StateMap',
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
        state: {},
        dataReady: false,
        mapReady: false
        }
    },
    mounted(){
        // gets state name from index.js
        this.state.name = this.$route.params.state
        this.fetchStateData()
    },
    methods: {
        fetchStateData(){
            this.$stateService.getOneState(this.state.name).then( state => {
              // overwriting this.state with state put in
              this.state = state 
               this.dataReady = true
            }).catch(err => {
                if (err.response && err.response === 404){
                    this.stateName = '?'
                }else{
                    alert('Sorry, error fetching data about this state')
                    // displays error in dev tools
                    console.error(err)
                }
            })
        },
        onMapReady(){
            this.mapReady = true
        },
        setMapView(){
            // checks to see if data is ready to configure map to display
            if (this.mapReady && this.dataReady){
                this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
            }

        }
    },
    computed: {
        mapCenter(){
            return [this.state.lat, this.state.lon]
        }
    }

}

</script>

<style scoped>
#map-containet{
    height: 30rem;
}

</style>
