<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueDate"
        :aria-expanded="showCollapse ? 'true' : 'false'">Due Date</a>
    </b-card-header>
    <b-collapse id="OrderQueueDate" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <date-picker v-model="date" :config="options"></date-picker>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

export default {
  name: 'OrderQueueDate',
  data () {
    return {
      showCollapse: true,
      date: new Date(),
      options: {
        format: 'MM/DD/YYYY',
        useCurrent: false,
      }
    }
  },
  components: {
    datePicker
  }
}
</script>

<style lang="scss">
.card {
  margin-left: 3rem;
}
</style>
