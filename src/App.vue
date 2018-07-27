<template>
  <div id='app'>
    <div class="px-app-grid">
      <AppMenu/>
      <AppSidebar/>
      <AppMain/>
    </div>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'app',
  components: {
    AppMenu,
    AppSidebar,
    AppMain
  }
}
</script>

<style lang='scss'>
#app {

}

.px-app-grid {
  display: grid;
  grid-template: 100vh / auto auto 1fr;
}
</style>
