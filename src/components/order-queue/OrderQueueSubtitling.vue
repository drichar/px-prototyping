<template lang="html">
  <b-card no-body>
    <b-card-header header-tag="header" role="tab">
      <a href="#" v-b-toggle.OrderQueueSubtitling>Subtitling</a>
    </b-card-header>
    <b-collapse id="OrderQueueSubtitling" visible accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <div class="row mb-4">
          <div class="col">
            <b-form-group label="Dialogue">
              <b-form-radio-group id="OrderQueueSubtitlingDialogue"
                buttons
                button-variant="outline-primary"
                v-model="dialogue.selected"
                :options="dialogue.options"
                name="OrderQueueSubtitlingDialogue" />
            </b-form-group>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <b-form-group label="Narration">
              <b-form-radio-group id="OrderQueueSubtitlingNarration"
                buttons
                button-variant="outline-primary"
                v-model="narration.selected"
                :options="narration.options"
                name="OrderQueueSubtitlingNarration" />
            </b-form-group>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <b-form-group label="Graphics">
              <b-form-radio-group id="OrderQueueSubtitlingGraphics"
                buttons
                button-variant="outline-primary"
                v-model="graphics.selected"
                :options="graphics.options"
                name="OrderQueueSubtitlingGraphics" />
            </b-form-group>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueSubtitling',
  data () {
    return {
      dialogue: {
        selected: 'dialogueOV',
        options: [
          { text: 'OV', value: 'dialogueOV' },
          { text: 'Dedicated', value: 'dialogueDedicated' },
          { text: 'Subtitled', value: 'dialogueSubtitled' }
        ]
      },
      narration: {
        selected: 'narrationOV',
        options: [
          { text: 'OV', value: 'narrationOV' },
          { text: 'Dedicated', value: 'narrationDedicated' },
          { text: 'Subtitled', value: 'narrationSubtitled' }
        ]
      },
      graphics: {
        selected: 'graphicsOV',
        options: [
          { text: 'OV', value: 'graphicsOV' },
          { text: 'Dedicated', value: 'graphicsDedicated' },
          { text: 'Subtitled', value: 'graphicsSubtitled' }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.btn-group {
  width: 100%;

  > .btn {
    flex: 0 1 100% !important;
  }
}
</style>
