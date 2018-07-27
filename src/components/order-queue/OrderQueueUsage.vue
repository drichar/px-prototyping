<template lang="html">
  <b-card no-body>
    <b-card-header header-tag="header" role="tab">
      <a href="#" v-b-toggle.OrderQueueUsage>Usage</a>
    </b-card-header>
    <b-collapse id="OrderQueueUsage" visible accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <div class="row">
          <div class="col-lg p-3">
            <label for="">Broadcast</label>
            <b-button variant="primary">Settings</b-button>
          </div>
          <div class="col-lg p-3 active">
            <label for="">Online</label>
            <p>1080p, 720p, 480p, 360p, YouTube, Facebook, Instagram</p>
            <b-button variant="primary">Settings</b-button>
          </div>
          <div class="col-lg p-3 active">
            <label for="">Theatrical</label>
            <p>2D Flat, Download Link, 1 USB to Philip Zlotorynski and Doug Richar</p>
            <b-button variant="primary">Settings</b-button>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueUsage'
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
}
</style>
