<template lang="html">
  <div class="px-order">
    <div class="px-order-panes">
      <div class="px-order-form">
        <b-alert show dismissible>
          Would you like to apply settings from a previous order?
          <a href="#" class="btn btn-sm btn-info">Select a Preset</a>
        </b-alert>
        <div role="tablist">
          <OrderQueueDate/>
          <OrderQueueLocalization/>
          <OrderQueueSubtitling v-model="autoSubs"/>
          <OrderQueueTags/>
          <OrderQueueUsage @input="value => updateUsage(value)"/>
          <OrderQueueUsageBroadcast v-if="isUsageSelected('broadcast')"/>
          <OrderQueueUsageOnline v-if="isUsageSelected('online')"/>
          <OrderQueueUsageTheatrical v-if="isUsageSelected('theatrical')"/>
        </div>
      </div>

      <div class="px-order-invoice">
        <OrderQueueInvoice :auto-subs="autoSubs"/>
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
import OrderQueueUsageBroadcast from './OrderQueueUsageBroadcast.vue'
import OrderQueueUsageOnline from './OrderQueueUsageOnline.vue'
import OrderQueueUsageTheatrical from './OrderQueueUsageTheatrical.vue'
import OrderQueueInvoice from './OrderQueueInvoice.vue'

export default {
  name: 'OrderQueue',
  components: {
    OrderQueueDate,
    OrderQueueLocalization,
    OrderQueueSubtitling,
    OrderQueueTags,
    OrderQueueUsage,
    OrderQueueUsageBroadcast,
    OrderQueueUsageOnline,
    OrderQueueUsageTheatrical,
    OrderQueueInvoice
  },
  data () {
    return {
      usagesSelected: [],
      autoSubs: false
    }
  },
  methods: {
    updateUsage(value) {
      let index = this.$data.usagesSelected.indexOf(value)
      if (index > -1) {
        this.$data.usagesSelected.splice(index, 1)
      }
      else {
        this.$data.usagesSelected.push(value)
      }
    },
    isUsageSelected(value) {
      let index = this.$data.usagesSelected.indexOf(value)
      if (index > -1) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss">
.px-order {
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
  height: calc(100vh - 4rem);
}

.px-order-form {
  overflow-y: auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  .alert {
    margin: 0 1.5rem 1.5rem;

    @media (min-width: 1600px) {
      .btn {
        float: right;
        margin-top: -3px;
      }
    }
  }

  .card {
    margin: 0 1.5rem 0 5.5rem;
    border: 0;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -2rem;
      bottom: 0;
      width: 0.25rem;
      margin-left: -0.125rem;
      background: #007bff;
      display: block;
    }

    .card-header {
      position: relative;
      background: white;
      border: 0;
      border-radius: 0;

      a {
        font-weight: bold;
        text-decoration: none;
      }

      &::after {
        content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'><path fill='#ffffff' d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'/></svg>");;
        position: absolute;
        top: 50%;
        left: -3rem;
        width: 2rem;
        height: 2rem;
        margin-top: -1rem;
        border-radius: 2rem;
        background: #007bff;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .card-body {
      max-width: 30rem;
    }

    &.active {
      &::before {
        background: #eee;
      }

      .card-header {
        background: #007bff;

        a {
          color: white;
          pointer-events: none;
        }

        &::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -2rem;
          height: 1.5rem;
          width: 0.25rem;
          margin-left: -0.125rem;
          background: #007bff;
          display: block;
        }

        &::after {
          background: #007bff;
          border-color: #007bff;
        }
      }

      & ~ .card {
        &::before {
          background: #eee;
        }

        .card-header {
          background: white;

          a {
            font-weight: normal;
            color: #eee;
            pointer-events: none;
          }

          &::after {
            background: #eee;
            border-color: #eee;
          }
        }
      }

      & + .card {
        .card-header {
          a {
            font-weight: bold;
            color: #007bff;
            pointer-events: all;

            &::before {
              content: 'Next: ';
            }
          }

          &::after {
            background: white;
            color: #007bff;
            border: 2px solid #007bff;
          }
        }
      }
    }

    &:first-child {
      &::before {
        top: 1.5rem;
      }

      &.active {
        .card-header {
          &::before {
            display: none;
          }
        }
      }
    }

    &:last-child {
      &::before {
        bottom: auto;
        height: 1.5rem;
      }
    }

    @for $i from 1 to 9 {
      &.active {
        &:nth-child(#{$i}) {
          .card-header {
            &::after {
              content: '#{$i}';
            }
          }
        }

        & ~ .card {
          &:nth-child(#{$i}) {
            .card-header {
              &::after {
                content: '#{$i}';
              }
            }
          }
        }
      }
    }
  }
}

.px-order-invoice {
  overflow-y: auto;
  height: calc(100vh - 9rem);
}
</style>
