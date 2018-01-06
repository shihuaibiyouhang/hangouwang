<template>
  <div class="app-goodsinformimg"> 
    <div v-html="data"></div>
  </div>
</template>

<script>


export default {
  props:['data'],
  name: 'app-goodsinformimg',
  data () {
    return {
     
    }
  }
}
</script>


<style lang="scss">
.app-goodsinformimg{
  display: block;
  margin-top: 0.44rem;
  background-color: #F5F5F5;
  div{
    min-width: 3.2rem;
    max-width: 6.4rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>
