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
              <li class="list-group-item">
                <code>NOW PLAYING</code>
                <svg v-b-tooltip.hover="'NOW_PLAYING_FILE.mp4'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M14.568.074c2.202 1.174 5.938 4.885 7.432 6.882-1.286-.899-4.044-1.657-6.091-1.179.222-1.468-.185-4.535-1.341-5.703zm7.432 10.926v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.42 8.256 3zm-7 3.508l-6-3.528v7.02l6-3.492z"/>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <b-form inline>
              <input type="text" class="form-control" placeholder="Enter new tag">
              <b-button variant="primary">Add Tag</b-button>
            </b-form>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="px-drop-zone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm-5.744 11h-1v-1h1v1zm0-2h-1v-1h1v1zm0-2h-1v-1h1v1zm0-2h-1v-1h1v1zm7 6h-6v-3h6v3zm0-4h-6v-3h6v3zm2 4h-1v-1h1v1zm0-2h-1v-1h1v1zm0-2h-1v-1h1v1zm0-2h-1v-1h1v1zm-2.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/></svg>
              Drop files here
            </div>
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

  .px-drop-zone {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    height: 8rem;
    border: 0.125rem dashed #ddd;
    border-radius: 0.25rem;
    color: #ddd;
    font-size: 1.25rem;

    svg {
      width: 2rem;
      height: 2rem;
      margin: 0 0.5rem;

      path {
        fill: #ddd;
      }
    }
  }
}
</style>
