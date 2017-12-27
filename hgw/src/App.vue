<template>
  <div id="app">
    <app-footer></app-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import AppFooter from './components/footer/AppFooter'
export default {
  name: 'app',
  components:{AppFooter}
}
</script>

<style lang="scss">
    @import './style/app.scss';
</style>
