<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueUsageBroadcast"
        :aria-expanded="showCollapse ? 'true' : 'false'">Broadcast Usage</a>
    </b-card-header>
    <b-collapse id="OrderQueueUsageBroadcast" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <form>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="broadcastSetting1">
              <label class="form-check-label" for="broadcastSetting1">SD 4:3 PAL</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="broadcastSetting2">
              <label class="form-check-label" for="broadcastSetting2">SD 16:9 PAL</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="broadcastSetting3">
              <label class="form-check-label" for="broadcastSetting3">SD 4:3 NTSC</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="broadcastSetting4">
              <label class="form-check-label" for="broadcastSetting4">SD 16:9 NTSC</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="broadcastSetting5">
              <label class="form-check-label" for="broadcastSetting5">HD 2398</label>
            </div>
          </div>
        </form>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueUsageBroadcast',
  data () {
    return {
      showCollapse: false
    }
  }
}
</script>

<style lang="scss">
#OrderQueueUsageBroadcast {

}
</style>
