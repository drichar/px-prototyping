<template lang="html">
  <div class="px-sidebar">
    <div class="px-sidebar-order-overview">
      <div class="px-sidebar-order-card card">
        <img class="card-img-top" src="http://placehold.it/640x400/?text=Preview" alt="" />
        <div class="card-body">
          <p class="card-text asset-name">Glossy Bastard Int'l 20</p>
          <p class="card-text project-name">City of Lies</p>
        </div>
      </div>
      <div class="px-sidebar-order-card card" v-for="item in [1,2]" :key="item">
        <img class="card-img-top" src="http://placehold.it/640x400/?text=Preview" alt="" />
        <div class="card-body">
          <p class="card-text asset-name">Asset Name</p>
          <p class="card-text project-name">Project Name</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar'
}
</script>

<style lang="scss">
.px-sidebar {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  background: hsla(0,0,0,0.75);
  width: 0;

  > * {
    display: none;
  }

  @media (min-width: 1200px) {
    width: 14rem;

    > * {
      display: block;
    }
  }

  h5 {
    color: white;
    width: 100%;
    padding-left: 1rem;
    padding-top: 1rem;
    margin-bottom: 0;
    line-height: 2rem;
  }

  .px-sidebar-order-overview {
    .px-sidebar-order-card {
      margin: 1rem;
      border: none;
      background: hsla(0,0,100,0.1);
      color: hsla(0,0,100,0.75);

      .card-body {
        padding: 0.75rem 1rem;
      }

      .card-text {
        font-size: 0.8rem;
        margin-bottom: 0;

        &.project-name {
          color: hsla(0,0,100,0.33);
        }
      }

      &:first-child {
        background: #007bff;
        border: 2px solid #007bff;
        color: white;

        .card-text {
          &.asset-name {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
