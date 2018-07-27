<template lang="html">
  <div class="px-order">
    <h3>Order Details</h3>

    <div class="px-order-panes">
      <div class="px-order-form">
        <div role="tablist">
          <OrderQueueDate/>
          <OrderQueueLocalization/>
          <OrderQueueSubtitling/>
          <OrderQueueTags/>
          <OrderQueueUsage/>
        </div>
      </div>

      <div class="px-order-invoice">
        <OrderQueueInvoice/>
      </div>
    </div>
  </div>
</template>


<script>
import OrderQueueDate from './OrderQueueDate.vue'
import OrderQueueLocalization from './OrderQueueLocalization.vue'
import OrderQueueSubtitling from './OrderQueueSubtitling.vue'
import OrderQueueTags from './OrderQueueTags.vue'
import OrderQueueUsage from './OrderQueueUsage.vue'
import OrderQueueInvoice from './OrderQueueInvoice.vue'

export default {
  name: 'OrderQueue',
  components: {
    OrderQueueDate,
    OrderQueueLocalization,
    OrderQueueSubtitling,
    OrderQueueTags,
    OrderQueueUsage,
    OrderQueueInvoice
  }
}
</script>

<style lang="scss">
.px-order {
  display: grid;
  grid-template: auto 1fr / 1fr;
  height: calc(100vh - 4rem);
  overflow: hidden;

  h3 {
    padding: 1.5rem;
    margin: 0;
    height: 5rem;
  }
}

.px-order-panes {
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  height: calc(100vh - 9rem);
}

.px-order-form {
  overflow-y: auto;

  .card {
    margin: 1.5rem;
    margin-top: 0;
  }
}

.px-order-invoice {
  overflow-y: auto;
  height: calc(100vh - 9rem);
}
</style>
