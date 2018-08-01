<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueSubtitling"
        :aria-expanded="showCollapse ? 'true' : 'false'">Subtitling</a>
    </b-card-header>
    <b-collapse id="OrderQueueSubtitling" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <div class="row mb-2">
          <div class="col">
            <div class="form-group">
              <span class="switch">
                <input type="checkbox" class="switch" v-model="autoSubs" id="switch-autosubs">
                <label for="switch-autosubs">
                  Automatic Subtitles
                  <span class="badge badge-secondary">New</span>
                </label>
              </span>
            </div>
          </div>
        </div>
        <div class="px-order-queue-dng">
          <div class="row mb-2">
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
          <div class="row mb-2">
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
          <div class="row mb-2">
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
          <div class="row mb-2" v-if="subtitlesSelected()">
            <div class="col">
              <div class="form-group">
                <label for="subProvider">Subtitles provided by</label>
                <select id="subProvider" class="form-control">
                  <option selected>Jeff Loiselle (jeff@pixwel.com)</option>
                  <option>My subtitling vendor</option>
                  <option>I will upload a script</option>
                </select>
              </div>
            </div>
          </div>

          <div class="px-order-queue-autosubs" :class="{visible: autoSubs}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4.908 2.081l-2.828 2.828 19.092 19.091 2.828-2.828-19.092-19.091zm2.121 6.363l-3.535-3.535 1.414-1.414 3.535 3.535-1.414 1.414zm1.731-5.845c1.232.376 2.197 1.341 2.572 2.573.377-1.232 1.342-2.197 2.573-2.573-1.231-.376-2.196-1.34-2.573-2.573-.375 1.232-1.34 2.197-2.572 2.573zm-5.348 6.954c-.498 1.635-1.777 2.914-3.412 3.413 1.635.499 2.914 1.777 3.412 3.411.499-1.634 1.778-2.913 3.412-3.411-1.634-.5-2.913-1.778-3.412-3.413zm9.553-3.165c.872.266 1.553.948 1.819 1.82.266-.872.948-1.554 1.819-1.82-.871-.266-1.553-.948-1.819-1.82-.266.871-.948 1.554-1.819 1.82zm4.426-6.388c-.303.994-1.082 1.772-2.075 2.076.995.304 1.772 1.082 2.077 2.077.303-.994 1.082-1.772 2.074-2.077-.992-.303-1.772-1.082-2.076-2.076z"/>
            </svg>
            <p>Your order will be ready within 10 minutes, with subtitles rendered automatically by the platform</p>
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
      showCollapse: false,
      autoSubs: false,
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
  },
  methods: {
    subtitlesSelected: function() {
      let subsSelected = false;
      let selected = [this.$data.dialogue.selected, this.$data.narration.selected, this.$data.graphics.selected];

      for (let i = 0; i < selected.length; i++) {
    		if (selected[i].includes('Subtitled')) {
          subsSelected = true;
        }
    	}

      return subsSelected;
    }
  }
}
</script>

<style lang="scss">
.px-order-queue-dng {
  position: relative;

  .px-order-queue-autosubs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    display: none;

    &.visible {
      display: flex;
    }

    svg {
      width: 5rem;
      height: 5rem;
      margin: 1rem;

      path {
        fill: black;
      }
    }

    p {
      text-align: center;
    }
  }
}

.btn-group {
  width: 100%;

  > .btn {
    flex: 0 1 100% !important;
  }
}

$font-size-base: 1rem;
$input-height: 2.375rem;
$input-btn-focus-width: .2rem;
$custom-control-indicator-bg: #dee2e6;
$custom-control-indicator-disabled-bg: #e9ecef;
$custom-control-description-disabled-color: #868e96;
$white: white;
$theme-colors: (
  'primary': #007bff
);

$switch-height: calc(#{$input-height} * .8) !default;
$switch-border-radius: $switch-height !default;
$switch-bg: $custom-control-indicator-bg !default;
$switch-checked-bg: map-get($theme-colors, 'primary') !default;
$switch-disabled-bg: $custom-control-indicator-disabled-bg !default;
$switch-disabled-color: $custom-control-description-disabled-color !default;
$switch-thumb-bg: $white !default;
$switch-thumb-border-radius: 50% !default;
$switch-thumb-padding: 2px !default;
$switch-focus-box-shadow: 0 0 0 $input-btn-focus-width rgba(map-get($theme-colors, 'primary'), .25);
$switch-transition: .2s all !default;

.switch {
  font-size: $font-size-base;
  position: relative;

  input {
    position: absolute;
    height: 1px;
    width: 1px;
    background: none;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    padding: 0;

    & + label {
      position: relative;
      min-width: calc(#{$switch-height} * 2);
      border-radius: $switch-border-radius;
      height: $switch-height;
      line-height: $switch-height;
      display: inline-block;
      cursor: pointer;
      outline: none;
      user-select: none;
      vertical-align: middle;
      text-indent: calc(calc(#{$switch-height} * 2) + 0.625rem);

      .badge {
        margin-left: 0.25rem;
        margin-top: -0.25rem;
        text-indent: 0;
      }
    }

    & + label::before,
    & + label::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(#{$switch-height} * 2);
      bottom: 0;
      display: block;
    }

    & + label::before {
      right: 0;
      background-color: $switch-bg;
      border-radius: $switch-border-radius;
      transition: $switch-transition;
    }

    & + label::after {
      top: $switch-thumb-padding;
      left: $switch-thumb-padding;
      width: calc(#{$switch-height} - calc(#{$switch-thumb-padding} * 2));
      height: calc(#{$switch-height} - calc(#{$switch-thumb-padding} * 2));
      border-radius: $switch-thumb-border-radius;
      background-color: $switch-thumb-bg;
      transition: $switch-transition;
    }

    &:checked + label::before {
      background-color: $switch-checked-bg;
    }

    &:checked + label::after {
      margin-left: $switch-height;
    }

    &:focus + label::before {
      outline: none;
      box-shadow: $switch-focus-box-shadow;
    }

    &:disabled + label {
      color: $switch-disabled-color;
      cursor: not-allowed;
    }

    &:disabled + label::before {
      background-color: $switch-disabled-bg;
    }
  }
}
</style>
