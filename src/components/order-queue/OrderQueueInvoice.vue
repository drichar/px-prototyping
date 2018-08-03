<template lang="html">
  <div id="OrderQueueInvoice">
    <div class="px-order-invoice-title">
      <h4>Your Order</h4>
    </div>

    <div class="px-order-invoice-table">
      <table class="table table-sm">
        <tbody>
          <tr>
            <th scope="row">Project</th>
            <td>City of Lies</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Asset</th>
            <td>Glossy Bastard Int'l 20</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <table class="table table-sm">
        <tbody>
          <tr>
            <th scope="row">Due Date</th>
            <td>July 31, 2018</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <table class="table table-sm">
        <tbody>
          <tr>
            <th scope="row">Language</th>
            <td>Latin American Spanish</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Territory</th>
            <td>Mexico</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <table class="table table-sm">
        <tbody>
          <tr>
            <th scope="row">Localization</th>
            <td>
              <span><strong>Dialogue:</strong> Subtitled</span>
              <span><strong>Narration:</strong> OV</span>
              <span><strong>Graphics:</strong> OV</span>
              <span><strong>Provider:</strong> Jeff Loiselle (jeff@pixwel.com)</span>
            </td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-sm">
        <tbody>
          <tr>
            <th scope="row">Tags</th>
            <td>
              <span>
                <code>COMING SOONISH</code>
                <svg v-b-tooltip.hover="'COMING_SOON_FILE.mp4'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M14.568.074c2.202 1.174 5.938 4.885 7.432 6.882-1.286-.899-4.044-1.657-6.091-1.179.222-1.468-.185-4.535-1.341-5.703zm7.432 10.926v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.42 8.256 3zm-7 3.508l-6-3.528v7.02l6-3.492z"/>
                </svg>
              </span>
              <span>
                <code>NOW PLAYING</code>
                <svg v-b-tooltip.hover="'NOW_PLAYING_FILE.mp4'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M14.568.074c2.202 1.174 5.938 4.885 7.432 6.882-1.286-.899-4.044-1.657-6.091-1.179.222-1.468-.185-4.535-1.341-5.703zm7.432 10.926v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.42 8.256 3zm-7 3.508l-6-3.528v7.02l6-3.492z"/>
                </svg>
              </span>
            </td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-sm">
        <tbody>
          <tr>
            <th scope="row">Usage (Online)</th>
            <td>1080p, 720p, 480p, 360p, YouTube, Facebook, Instagram</td>
            <td>$0</td>
          </tr>
          <tr>
            <th scope="row">Usage (Theatrical)</th>
            <td>2D Flat, Download Link, 1 USB to Philip Zlotorynski and Doug Richar</td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="px-order-invoice-total">
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Total</th>
            <td>$1390</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="px-order-invoice-submit">
      <button class="btn btn-lg btn-primary">
        <span v-if="autoSubs || subtitlerEnabled">Next Step: Translation</span>
        <span v-else>Place Your Order</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderQueueInvoice',
  props: ['autoSubs'],
  data () {
    return {
      subtitlerEnabled: false
    }
  },
  created() {
    this.$eventBus.$on('subtitlerEnabled', (data) => {
      this.$data.subtitlerEnabled = data;
    });
  }
}
</script>

<style lang="scss">
#OrderQueueInvoice {
  display: grid;
  grid-template: auto 1fr auto auto / 1fr;
  max-height: calc(100vh - 4rem);
  background: hsla(0,0,96,1);

  .px-order-invoice-title {
    padding: 1.5rem;

    h4 {
      font-size: 3rem;
      font-weight: 300;
      line-height: 1.2;
      margin: 0;
    }
  }

  .px-order-invoice-table {
    padding: 0 1.5rem 2rem;
    margin-right: 0.5rem;
    overflow-y: auto;
    font-size: 14px;

    .table {
      tr {
        th, td {
          border: 0;
        }

        th {
          width: 10rem;
        }

        td {
          span {
            display: block;
            margin-bottom: 0.375rem;

            strong {
              display: inline-block;
              width: 5rem;
            }

            svg {
              margin-left: 0.5rem;
            }
          }
        }

        td:last-child {
          text-align: right;
          width: 6rem;
          font-weight: bold;
        }
      }
    }
  }

  .px-order-invoice-total {
    background: hsla(0,0,0,0.025);
    padding: 1rem 1.5rem;
    position: relative;

    .table {
      margin: 0;

      tr {
        th, td {
          border: 0;
          font-size: 1.25rem;
        }

        td:last-child {
          font-weight: bold;
          text-align: right;
          width: 6rem;
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: -3rem;
      left: 0;
      right: 1rem;
      height: 3rem;
      background: linear-gradient(to bottom, hsla(0,0,96,0) 0%, hsla(0,0,96,1) 100%);
    }
  }

  .px-order-invoice-submit {
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem;
    background: white;
  }
}
</style>
