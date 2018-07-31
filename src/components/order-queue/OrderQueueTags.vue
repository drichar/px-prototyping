<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueTags"
        :aria-expanded="showCollapse ? 'true' : 'false'">Tags</a>
    </b-card-header>
    <b-collapse id="OrderQueueTags" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <div class="row mb-4">
          <div class="col">
            <input type="text" class="form-control">
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueTags',
  data () {
    return {
      showCollapse: false
    }
  }
}
</script>

<style lang="scss">
</style>
