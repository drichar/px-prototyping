<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueUsageOnline"
        :aria-expanded="showCollapse ? 'true' : 'false'">Online Settings</a>
    </b-card-header>
    <b-collapse id="OrderQueueUsageOnline" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <form>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="onlineSetting1" checked>
              <label class="form-check-label" for="onlineSetting1">1080p</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="onlineSetting2" checked>
              <label class="form-check-label" for="onlineSetting2">720p</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="onlineSetting3" checked>
              <label class="form-check-label" for="onlineSetting3">480p</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="onlineSetting4" checked>
              <label class="form-check-label" for="onlineSetting4">360p</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="onlineSetting5" checked>
              <label class="form-check-label" for="onlineSetting5">YouTube</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="onlineSetting6" checked>
              <label class="form-check-label" for="onlineSetting6">Facebook</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="onlineSetting7" checked>
              <label class="form-check-label" for="onlineSetting7">Instagram</label>
            </div>
          </div>
        </form>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueUsageOnline',
  data () {
    return {
      showCollapse: false
    }
  }
}
</script>

<style lang="scss">
#OrderQueueUsageOnline {

}
</style>
