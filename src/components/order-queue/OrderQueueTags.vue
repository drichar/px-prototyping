<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueTags"
        :aria-expanded="showCollapse ? 'true' : 'false'">Tags</a>
    </b-card-header>
    <b-collapse id="OrderQueueTags" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <div class="row">
          <div class="col">
            <ul class="list-group">
              <li class="list-group-item">
                <code>COMING SOONISH</code>
                <svg v-b-tooltip.hover="'COMING_SOON_FILE.mp4'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M14.568.074c2.202 1.174 5.938 4.885 7.432 6.882-1.286-.899-4.044-1.657-6.091-1.179.222-1.468-.185-4.535-1.341-5.703zm7.432 10.926v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.42 8.256 3zm-7 3.508l-6-3.528v7.02l6-3.492z"/>
                </svg>
              </li>
              <li class="list-group-item list-group-item-light">
                <code>NOW PLAYING</code>
                <svg v-b-tooltip.hover="'NOW_PLAYING_FILE.mp4'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M14.568.074c2.202 1.174 5.938 4.885 7.432 6.882-1.286-.899-4.044-1.657-6.091-1.179.222-1.468-.185-4.535-1.341-5.703zm7.432 10.926v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.42 8.256 3zm-7 3.508l-6-3.528v7.02l6-3.492z"/>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <b-form inline>
              <input type="text" class="form-control" placeholder="Enter new tag">
              <b-button variant="primary">Add Tag</b-button>
            </b-form>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <b-form-file v-model="files" :state="Boolean(files)" multiple placeholder="Select/drop files"></b-form-file>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueTags',
  data () {
    return {
      showCollapse: false,
      files: null
    }
  }
}
</script>

<style lang="scss">
#OrderQueueTags {
  .list-group {
    margin-bottom: 1rem;

    svg {
      margin-left: 0.5rem;
    }
  }

  .form-inline {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    .form-control {
      flex: 1 1 0px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button {
      flex: 0 0 auto;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
