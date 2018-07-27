<template lang="html">
  <b-card no-body>
    <b-card-header header-tag="header" role="tab">
      <a href="#" v-b-toggle.OrderQueueTags>Tags</a>
    </b-card-header>
    <b-collapse id="OrderQueueTags" visible accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <div class="row mb-4">
          <div class="col">
            <label for="">Tags</label>
            <input type="text" class="form-control">
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueTags'
}
</script>

<style lang="scss">
</style>
