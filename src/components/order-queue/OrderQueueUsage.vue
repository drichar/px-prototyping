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
        <div class="row">
          <div class="col-lg p-3">
            <label for="">Broadcast</label>
            <b-btn variant="primary" v-b-modal.OrderQueueUsageBroadcast>Settings</b-btn>
          </div>
        </div>
        <div class="row">
          <div class="col-lg p-3 active">
            <label for="">Online</label>
            <p>1080p, 720p, 480p, 360p, YouTube, Facebook, Instagram</p>
            <b-button variant="primary" v-b-modal.OrderQueueUsageOnline>Settings</b-button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg p-3 active">
            <label for="">Theatrical</label>
            <p>2D Flat, Download Link, 1 USB to Philip Zlotorynski and Doug Richar</p>
            <b-button variant="primary" v-b-modal.OrderQueueUsageTheatrical>Settings</b-button>
          </div>

          <b-modal id="OrderQueueUsageBroadcast" title="Broadcast Settings">
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
          </b-modal>

          <b-modal id="OrderQueueUsageOnline" title="Online Settings">
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
          </b-modal>

          <b-modal id="OrderQueueUsageTheatrical" size="lg" title="Theatrical Settings">
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
          </b-modal>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueUsage',
  data () {
    return {
      showCollapse: false
    }
  }
}
</script>

<style lang="scss">
#OrderQueueUsage {
  .row {
    margin: 0;
  }

  .card-body {
    padding: 0;
  }

  .col-lg {
    &:not(.active) {
      label {
        opacity: 0.33;
      }
    }
  }

  label {
    display: block;
  }

  p {
    color: #999;
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
