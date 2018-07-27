<template lang="html">
  <div class="px-sidebar">
    <div class="px-sidebar-order-overview">
      <div class="px-sidebar-order-card card" v-for="item in [1,2,3]" :key="item">
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
  justify-content: space-between;
  background: hsla(0,0,0,0.625);
  width: 0;

  > * {
    display: none;
  }

  @media (min-width: 1200px) {
    width: 12rem;

    > * {
      display: block;
    }
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
        border: 2px solid blue;
      }
    }
  }
}
</style>
