<template lang="html">
  <div class="px-main">
    <MainHeader/>
    <MainContent/>
  </div>
</template>

<script>
import MainHeader from './MainHeader.vue'
import MainContent from './MainContent.vue'

export default {
  name: 'AppMain',
  components: {
    MainHeader,
    MainContent
  }
}
</script>

<style lang="scss">
.px-main {
  display: grid;
  grid-template: 4rem 1fr / 1fr;
  height: 100vh;
}
</style>
