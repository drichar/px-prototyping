<template lang="html">
  <div class="px-content">
    <OrderQueue/>
  </div>
</template>

<script>
import OrderQueue from './order-queue/OrderQueue.vue'

export default {
  name: 'MainContent',
  components: {
    OrderQueue
  }
}
</script>

<style lang="scss">
.px-content {
  overflow-y: auto;
}
</style>
