<template>
  <div class="app-type-item">
   <dt><a><i class="fa fa-circle"></i>{{h.cat_name}}<i class="fa fa-angle-right ccc"></i></a></dt>
   <dd v-for="j in h.child">{{j.cat_name}}</dd>
  </div>
</template>

<script>
export default {
  name: 'app-type-item',
  data () {
    return {
     
    }
  },
  components:{},
  props:['h'],
  mounted(){

  }
  
}

</script>


<style lang="scss">
.app-type-item{
  dt{
  background-color: #FCFCFC;
    margin: 0.1rem 0;
    border-style: solid;
    border-color: #F5F5F5;
    border-width: 0.012rem 0;
  a{
  display: block;
  overflow:hidden;
    width: 96%;
    height: .34rem;
    padding: 0 0 0 4%;
    font-size: 0.13rem;
    line-height: .34rem;
    color: #111;
    .fa-circle{
    width: 0.09rem;
    height: 0.09rem;
    vertical-align: middle;
    display: inline-block;
    border-radius: 0.045rem;
    margin-right: 0.09rem;
    }
    .ccc{
    display: block;
    width: 0.13rem;
    height: 0.13rem;
    float: right;
    margin: 0.11rem 0.11rem 0 0;
   
    z-index:99
    }
  }
  }
  dd{
  font-size: 0.12rem;
    line-height: .3rem;
    vertical-align: top;
    display: inline-block;
    width:.744rem;
    height: .3rem;
    padding: 0.04rem;
    margin-left: 0.055rem;
    border-radius: 0;
    a{
    display: block;
    color: #444;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    }
  }
}
</style>
