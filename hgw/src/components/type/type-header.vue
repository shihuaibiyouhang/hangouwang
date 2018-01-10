<template>
  <div class="app-type-header">
    <div class="type-header-l"><a href="javascript:history.go(-1)"><i class="fa fa-angle-left"></i></a></div>
      <div class="type-header-c"><i class="fa fa-search"></i><span class="search-input" id="keyword">请输入关键字</span></div>
        <div class="type-header-r">
        <router-link to='/appGoodCar' class="a"><i class="fa fa-ellipsis-h"></i></router-link></div>
  </div>
</template>

<script>
export default {
  name: 'app-type-header',
  data () {
    return {
     
    }
  }
  
}
</script>


<style lang="scss">
.app-type-header{
	display: block;
    max-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    background: #F8F8F8;
    height: .48rem;
    position: absolute;
    z-index: 8;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    .type-header-l{
    display: block;
    width: .49rem;
    height: .49rem;
    position: absolute;
    top: 0;
    left: 0;
    .a{
    position: relative;
    z-index: 1;
    display: inline-block;
    width: .2rem;
    height: .2rem;
    padding: 0.1rem;
    i{
   font-size:.25rem;
   font-weight:bold;
    opacity: 0.75;
    }
    }
    }
    .type-header-c{
    position: relative;
    display: inline-block;
    i{
    float:right;
    width:35px;
    height:35px;
    display:block;
    text-align:center;
    line-height:35px;
    font-size:.25rem;
    font-weight:200;
    color:#BBB;
    }
    .search-input{
    float: left;
    width: 1.7rem;
    height: 35px;
    font-size: 0.16rem;
    line-height: 35px;
    color: #BBB;
    vertical-align: top;
    border: none 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 6px;
    border-radius: 20px;
    border: solid 1px #ccc;
    }
    }
    .type-header-r{
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    text-align: right;
    z-index:99;
    a{
    z-index: 1;
    display: inline-block;
    vertical-align: top;
    width: 0.21rem;
    height: 0.21rem;
    padding: 0.12rem 0.12rem;
    i{
    font-weight:.30px;
    }
    }
    }
}
</style>
