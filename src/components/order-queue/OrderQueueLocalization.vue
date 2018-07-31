<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueLocalization"
        :aria-expanded="showCollapse ? 'true' : 'false'">Localization</a>
    </b-card-header>
    <b-collapse id="OrderQueueLocalization" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <div class="row mb-4">
          <div class="col">
            <label for="">Language</label>
            <select class="form-control">
              <option>Default select</option>
            </select>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <label for="">Territory</label>
            <select class="form-control">
              <option>Default select</option>
            </select>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueLocalization',
  data () {
    return {
      showCollapse: false
    }
  }
}
</script>

<style lang="scss">
</style>
