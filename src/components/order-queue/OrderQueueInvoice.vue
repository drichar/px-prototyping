<template lang="html">
  <div id="OrderQueueInvoice">
    <b-alert show variant="secondary">
      <h4 class="alert-heading">Your Order</h4>
      <hr/>

      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Asset</th>
            <td>Glossy Bastard Int'l 20</td>
          </tr>
        </tbody>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Due Date</th>
            <td>July 31, 2018</td>
          </tr>
          <tr>
            <th scope="row">Language</th>
            <td>Spanish</td>
          </tr>
          <tr>
            <th scope="row">Territory</th>
            <td>Spain</td>
          </tr>
        </tbody>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Dialogue</th>
            <td>OV</td>
          </tr>
          <tr>
            <th scope="row">Narration</th>
            <td>OV</td>
          </tr>
          <tr>
            <th scope="row">Graphics</th>
            <td>OV</td>
          </tr>
        </tbody>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Tags</th>
            <td><code>COMING SOON</code></td>
          </tr>
        </tbody>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Online</th>
            <td>1080p, 720p, 480p, 360p, YouTube, Facebook, Instagram</td>
          </tr>
          <tr>
            <th scope="row">Theatrical</th>
            <td>2D Flat, Download Link, 1 USB to Philip Zlotorynski and Doug Richar</td>
          </tr>
        </tbody>
      </table>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'OrderQueueInvoice'
}
</script>

<style lang="scss">
#OrderQueueInvoice {
  padding-right: 1.5rem;

  .alert {
    padding: 1rem;
  }

  .table {
    tr {
      th {
        width: 10rem;
      }
    }
  }
}
</style>
