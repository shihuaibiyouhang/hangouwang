<template>
  <div id="app">
    <router-view></router-view>
    <app-footer v-if="$route.path=='/main'|| $route.path=='/find' || $route.path=='/myshop'"></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/footer/AppFooter'
export default {
  name: 'app',
  components:{AppFooter},
}
</script>

<style lang="scss">
    @import './style/app.scss';
</style>
