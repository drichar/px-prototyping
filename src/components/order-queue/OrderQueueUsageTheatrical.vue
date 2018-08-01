<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueUsageTheatrical"
        :aria-expanded="showCollapse ? 'true' : 'false'">Theatrical Usage</a>
    </b-card-header>
    <b-collapse id="OrderQueueUsageTheatrical" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <form>
          <table class="table table-borderless table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">D/L Link</th>
                <th scope="col">Ship USB</th>
                <th scope="col">Quantity</th>
                <th scope="col">Recipients</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2D Flat</th>
                <td><input type="checkbox" checked></td>
                <td><input type="checkbox" checked></td>
                <td><input type="number" class="form-control px-order-usage-qty" value="1"></td>
                <td><input type="text" class="form-control" value="phil@pixwel.com, doug@pixwel.com"></td>
              </tr>
              <tr>
                <th scope="row">2D Scope</th>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="number" class="form-control px-order-usage-qty"></td>
                <td><input type="text" class="form-control"></td>
              </tr>
              <tr>
                <th scope="row">2D Combo</th>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="number" class="form-control px-order-usage-qty"></td>
                <td><input type="text" class="form-control"></td>
              </tr>
              <tr>
                <th scope="row">3D Flat</th>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="number" class="form-control px-order-usage-qty"></td>
                <td><input type="text" class="form-control"></td>
              </tr>
              <tr>
                <th scope="row">3D Scope</th>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="number" class="form-control px-order-usage-qty"></td>
                <td><input type="text" class="form-control"></td>
              </tr>
              <tr>
                <th scope="row">3D Combo</th>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
                <td><input type="number" class="form-control px-order-usage-qty"></td>
                <td><input type="text" class="form-control"></td>
              </tr>
            </tbody>
          </table>
        </form>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueUsageTheatrical',
  data () {
    return {
      showCollapse: false
    }
  }
}
</script>

<style lang="scss">
#OrderQueueUsageTheatrical {
  .card-body {
    max-width: none;
  }

  .table {
    border-top: 0;

    th, td {
      vertical-align: middle;
    }

    th:nth-child(2),
    th:nth-child(3),
    td:nth-child(2),
    td:nth-child(3),
    td:nth-child(4) {
      text-align: center;
    }

    .px-order-usage-qty {
      width: 4rem;
    }
  }
}
</style>
