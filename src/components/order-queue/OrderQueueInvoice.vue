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
            <th scope="row">Localization</th>
            <td>
              <span><strong>Language:</strong> Latin American Spanish</span>
              <span><strong>Territory:</strong> Mexico</span>
            </td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-sm">
        <tbody>
          <tr>
            <th scope="row">Subtitling</th>
            <td>
              <span><strong>Dialogue:</strong> OV</span>
              <span><strong>Narration:</strong> OV</span>
              <span><strong>Graphics:</strong> OV</span>
            </td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-sm">
        <tbody>
          <tr>
            <th scope="row">Tags</th>
            <td><code>COMING SOON</code>, <code>NOW PLAYING</code></td>
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
      <button class="btn btn-lg btn-primary">Place Your Order</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderQueueInvoice'
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 0.5rem;
  border-radius: 0.5rem;
}

::-webkit-scrollbar-track {
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 0.5rem;
}

#OrderQueueInvoice {
  display: grid;
  grid-template: auto 1fr auto auto / 1fr;
  max-height: calc(100vh - 9rem);
  background: #f6f6f6;

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
    padding: 0 1.5rem;
    margin-right: 0.5rem;
    overflow-y: auto;
    font-size: 14px;

    .table {
      // border-bottom: 1px solid #ddd;

      tr {
        th, td {
          border: 0;
          background: hsla(0,0,100,0.75);
        }

        th {
          width: 10rem;
        }

        td {
          span {
            display: block;

            strong {
              display: inline-block;
              width: 5rem;
            }
          }
        }

        td:last-child {
          text-align: right;
          width: 6rem;
        }
      }
    }
  }

  .px-order-invoice-total {
    background: hsla(0,0,0,0.025);
    padding: 1rem 1.5rem;

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
  }

  .px-order-invoice-submit {
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem;
    background: white;
  }
}
</style>
