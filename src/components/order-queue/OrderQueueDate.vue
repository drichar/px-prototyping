<template lang="html">
  <b-card no-body>
    <b-card-header header-tag="header" role="tab">
      <a href="#" v-b-toggle.orderQueueDate>Due Date</a>
    </b-card-header>
    <b-collapse id="orderQueueDate" visible accordion="my-accordion" role="tabpanel">
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
</style>
