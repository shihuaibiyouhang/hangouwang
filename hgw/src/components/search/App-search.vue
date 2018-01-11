<template>
  <div class="app-search">
    <AppSearchHeader></AppSearchHeader>
    <AppSearchHot/>
    <AppSearchHostory></AppSearchHostory>
  </div>
</template>

<script>
export default {
  name: 'app-search',
  data () {
    return {
     
    }
  },
  methods:{
      
  },
  components:{AppSearchHot,AppSearchHeader,AppSearchHostory}
}
import AppSearchHot from './app-search-Hot.vue'
import AppSearchHeader from './app-search-header.vue'
import AppSearchHostory from './app-search-Hostory.vue'
</script>


<style lang="scss">
  
  
</style>
