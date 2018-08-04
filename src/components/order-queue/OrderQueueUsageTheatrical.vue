<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueUsageTheatrical"
        :aria-expanded="showCollapse ? 'true' : 'false'">Theatrical Options</a>
    </b-card-header>
    <b-collapse id="OrderQueueUsageTheatrical" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <form>
          <div class="px-theatrical-option active">
            <div class="px-theatrical-option-primary">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting1" checked>
                <label class="form-check-label" for="theatricalSetting1">2D Flat</label>
              </div>
            </div>
            <div class="px-theatrical-option-dl">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting1Dl">
                <label class="form-check-label" for="theatricalSetting1Dl">Download</label>
              </div>
            </div>
            <div class="px-theatrical-option-usb">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting1Usb" checked>
                <label class="form-check-label" for="theatricalSetting1Usb">USB</label>
              </div>
            </div>
            <div class="px-theatrical-option-qty">
              <b-form inline>
                <label class="mr-sm-2" for="theatricalSetting1Qty">Qty</label>
                <b-form-input size="sm" type="number" value="1" id="theatricalSetting1Qty"></b-form-input>
              </b-form>
            </div>
            <div class="px-theatrical-option-recipients">
              <ul class="list-group">
                <li class="list-group-item">
                  <span>Philip Zlotorynski</span>
                  <span>123 Main St</span>
                  <span>Anytown, USA 01234</span>
                </li>
                <li class="list-group-item">
                  <span>Biff Tannen</span>
                  <span>1809 Mason Street</span>
                  <span>Hill Valley, CA 95420</span>
                </li>
              </ul>
              <b-btn variant="primary" block="true">Edit Recipients</b-btn>
            </div>
          </div>

          <div class="px-theatrical-option active">
            <div class="px-theatrical-option-primary">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting2" checked>
                <label class="form-check-label" for="theatricalSetting2">2D Scope</label>
              </div>
            </div>
            <div class="px-theatrical-option-dl">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting2Dl">
                <label class="form-check-label" for="theatricalSetting2Dl">Download</label>
              </div>
            </div>
            <div class="px-theatrical-option-usb">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting2Usb" checked>
                <label class="form-check-label" for="theatricalSetting2Usb">USB</label>
              </div>
            </div>
            <div class="px-theatrical-option-qty">
              <b-form inline>
                <label class="mr-sm-2" for="theatricalSetting2Qty">Qty</label>
                <b-form-input size="sm" type="number" value="1" id="theatricalSetting2Qty"></b-form-input>
              </b-form>
            </div>
            <div class="px-theatrical-option-recipients">
              <b-btn variant="primary" block="true">Select Recipients</b-btn>
            </div>
          </div>

          <div class="px-theatrical-option active">
            <div class="px-theatrical-option-primary">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting3" checked>
                <label class="form-check-label" for="theatricalSetting3">2D Combo</label>
              </div>
            </div>
            <div class="px-theatrical-option-dl">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting3Dl" checked>
                <label class="form-check-label" for="theatricalSetting3Dl">Download</label>
              </div>
            </div>
            <div class="px-theatrical-option-usb">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting3Usb">
                <label class="form-check-label" for="theatricalSetting3Usb">USB</label>
              </div>
            </div>
            <div class="px-theatrical-option-qty hidden">
              <b-form inline>
                <label class="mr-sm-2" for="theatricalSetting2Qty">Qty</label>
                <b-form-input size="sm" type="number" value="1" id="theatricalSetting2Qty"></b-form-input>
              </b-form>
            </div>
            <div class="px-theatrical-option-recipients">
              <ul class="list-group">
                <li class="list-group-item">
                  <span>Philip Zlotorynski</span>
                </li>
                <li class="list-group-item">
                  <span>Biff Tannen</span>
                </li>
              </ul>
              <b-btn variant="primary" block="true">Edit Recipients</b-btn>
            </div>
          </div>

          <div class="px-theatrical-option">
            <div class="px-theatrical-option-primary">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting4">
                <label class="form-check-label" for="theatricalSetting4">3D Flat</label>
              </div>
            </div>
          </div>

          <div class="px-theatrical-option">
            <div class="px-theatrical-option-primary">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting5">
                <label class="form-check-label" for="theatricalSetting5">3D Scope</label>
              </div>
            </div>
          </div>

          <div class="px-theatrical-option">
            <div class="px-theatrical-option-primary">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="theatricalSetting6">
                <label class="form-check-label" for="theatricalSetting6">3D Combo</label>
              </div>
            </div>
          </div>
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
    padding: 1rem 0 0;
  }

  .px-theatrical-option {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 1rem;

    &.active {
      background: #f9f9f9;
      border-radius: 0.25rem;
      border: 1px solid #ddd;
      margin-bottom: 1rem;
      padding: 1rem 1rem 1.25rem;

      .px-theatrical-option-primary {
        margin-bottom: 0.75rem;
      }
    }

    .px-theatrical-option-primary,
    .px-theatrical-option-dl,
    .px-theatrical-option-usb,
    .px-theatrical-option-qty,
    .px-theatrical-option-recipients {
      flex: 0 0 auto;
    }

    .px-theatrical-option-primary {
      text-align: left;
      width: 100%;

      [type='checkbox']:checked ~ label {
        font-weight: bold;
      }
    }

    .px-theatrical-option-dl {
      width: 33.333%;
    }

    .px-theatrical-option-usb {
      text-align: center;
      width: 33.333%;
    }

    .px-theatrical-option-qty {
      text-align: right;
      width: 33.333%;

      .form-inline {
        justify-content: flex-end;
      }

      [type='number'] {
        width: 3rem;
      }

      &.hidden {
        visibility: hidden;
      }
    }

    .px-theatrical-option-recipients {
      width: 100%;
      padding: 1rem 0 0;

      .list-group {
        margin-bottom: 1rem;

        span {
          display: block;
        }
      }
    }
  }

  .px-theatrical-option-qty {
    width: 4rem;
  }
}
</style>
