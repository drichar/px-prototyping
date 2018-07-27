<template lang="html">
  <div class="px-sidebar">
    <div class="px-sidebar-order-overview">
      <div class="px-sidebar-order-card card">
        <img class="card-img-top" src="http://placehold.it/640x400/?text=Preview" alt="" />
        <div class="card-body">
          <p class="card-text project-name">Project Name</p>
          <p class="card-text studio-name">Studio Name</p>
        </div>
      </div>
      <nav class="nav">
        <a class="nav-link active">Order Details</a>
        <a class="nav-link">Translation</a>
      </nav>
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

  .nav-link {
    display: flex;
    flex-flow: column;
    align-items: left;
    justify-content: center;
    padding: 1rem;
    width: 12rem;
    height: 4rem;
    color: hsla(0,0,100,0.5) !important;
    cursor: pointer;

    &:hover {
      color: hsla(0,0,100,0.5);
    }

    &.active {
      color: white !important;
      font-weight: 700;
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

        &.studio-name {
          color: hsla(0,0,100,0.33);
        }
      }
    }
  }
}
</style>
