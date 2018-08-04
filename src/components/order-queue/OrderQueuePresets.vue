<template lang="html">
  <div id="OrderQueuePresets">
    <b-alert show dismissible>
      <span>Would you like to apply settings from a previous order?</span>
      <b-btn size="sm" variant="info" v-b-modal.presets>Select a Preset</b-btn>
    </b-alert>

    <b-modal id="presets" title="Select a Preset" size="lg" cancel-variant="outline-primary" ok-title="Apply Settings">
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="Order #PX123ABC" active>
            <div class="px-order-presets">
              <span>Language:</span>
              <span>Dutch</span>

              <span>Territory:</span>
              <span>Netherlands</span>

              <span>Dialogue:</span>
              <span>OV</span>

              <span>Narration:</span>
              <span>OV</span>

              <span>Graphics:</span>
              <span>OV</span>

              <span>Tags:</span>
              <span><code>COMING SOON</code>, <code>FRIDAY</code></span>

              <span>Broadcast:</span>
              <span class="text-muted"><em>N/A</em></span>

              <span>Online:</span>
              <span>
                <em>1080p, 720p, 480p, 360p, YouTube, Facebook, Instagram</em> to Grayson Brown, Doug Richar, Nick Ferraro
              </span>

              <span>Theatrical:</span>
              <span>
                <em>2D Flat, Download Link, 1 USB</em> to Philip Zlotorynski and Doug Richar
              </span>

              <span></span>
              <span>
                <em>3D Scope, Download Link, 2 USB</em> to James Tosi and Grayson Brown
              </span>
            </div>
          </b-tab>
          <b-tab title="Custom Preset 1">
            <div class="px-order-presets">
              <span>Language:</span>
              <span>Spanish</span>

              <span>Territory:</span>
              <span>Spain</span>

              <span>Dialogue:</span>
              <span>Subtitled</span>

              <span>Narration:</span>
              <span>Subtitled</span>

              <span>Graphics:</span>
              <span>OV</span>

              <span>Tags:</span>
              <span><code>COMING SOON</code>, <code>FRIDAY</code></span>

              <span>Broadcast:</span>
              <span>SD 4:3 NTSC</span>

              <span>Online:</span>
              <span class="text-muted"><em>N/A</em></span>

              <span>Theatrical:</span>
              <span class="text-muted"><em>N/A</em></span>
            </div>
          </b-tab>
          <b-tab title="Custom Preset 2">
            <div class="px-order-presets">
              <span>Language:</span>
              <span>Spanish</span>

              <span>Territory:</span>
              <span>Mexico</span>

              <span>Dialogue:</span>
              <span>Subtitled</span>

              <span>Narration:</span>
              <span>Subtitled</span>

              <span>Graphics:</span>
              <span>OV</span>

              <span>Tags:</span>
              <span><code>COMING SOON</code>, <code>FRIDAY</code></span>

              <span>Broadcast:</span>
              <span>SD 4:3 NTSC</span>

              <span>Online:</span>
              <span class="text-muted"><em>N/A</em></span>

              <span>Theatrical:</span>
              <span class="text-muted"><em>N/A</em></span>
            </div>
          </b-tab>
          <b-tab title="Custom Preset 3">
            <div class="px-order-presets">
              <span>Language:</span>
              <span>German</span>

              <span>Territory:</span>
              <span>Austria</span>

              <span>Dialogue:</span>
              <span>Subtitled</span>

              <span>Narration:</span>
              <span>Subtitled</span>

              <span>Graphics:</span>
              <span>OV</span>

              <span>Tags:</span>
              <span><code>COMING SOON</code>, <code>FRIDAY</code></span>

              <span>Broadcast:</span>
              <span>SD 4:3 NTSC</span>

              <span>Online:</span>
              <span class="text-muted"><em>N/A</em></span>

              <span>Theatrical:</span>
              <span class="text-muted"><em>N/A</em></span>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'OrderQueuePresets'
}
</script>

<style lang="scss">
#OrderQueuePresets {
  .alert {
    margin: 0 1.5rem 1.5rem;

    span {
      display: block;
      margin-bottom: 0.5rem;
    }

    @media (min-width: 1600px) {
      span {
        display: inline-block;
        margin-bottom: 0;
      }

      .btn {
        float: right;
        margin-top: -3px;
      }
    }
  }

  .modal-body {
    padding: 0;

    .card {
      border: 0;
      border-radius: 0;
    }
  }

  .px-order-presets {
    display: grid;
    grid-template: auto / auto 1fr;
    grid-gap: 0.5rem;

    span {
      padding: 0 0.5rem;

      &:nth-child(odd) {
        font-weight: bold;
      }
    }
  }
}
</style>
