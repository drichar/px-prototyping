<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueUsage"
        :aria-expanded="showCollapse ? 'true' : 'false'">Usage</a>
    </b-card-header>
    <b-collapse id="OrderQueueUsage" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <form>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="usageBroadcast" value="broadcast"
                @change="onChange">
              <label class="form-check-label" for="usageBroadcast">Broadcast</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="usageOnline" value="online"
                @change="onChange">
              <label class="form-check-label" for="usageOnline">Online</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="usageTheatrical" value="theatrical"
                @change="onChange">
              <label class="form-check-label" for="usageTheatrical">Theatrical</label>
            </div>
          </div>
        </form>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueUsage',
  props: ['usagesSelected'],
  data () {
    return {
      showCollapse: false
    }
  },
  methods: {
    onChange() {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss">
#OrderQueueUsage {

}
</style>
