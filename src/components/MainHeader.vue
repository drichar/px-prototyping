<template lang="html">
  <div class="px-header">
    <h4 class="px-header-title">
      <span>Place Order /</span>
      Glossy Bastard Int'l 20
    </h4>
    <nav class="nav">
      <a class="nav-link" href="#" v-for="item in [1,2,3,4,5]" :key="item">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang="scss">
.px-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  color: white;
  background: hsla(0,0,0,1);

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;

      circle {
        fill: hsla(0,0,100,0.25);
      }
    }
  }

  .px-header-title {
    margin: 0;

    @media (max-width: 767.98px) {
      font-size: 1.25rem;
    }

    span {
      font-weight: 300;
      color: hsla(0,0,100,0.5);
      margin-right: 0.25rem;
    }
  }

  @media (max-width: 799.98px) {
    .nav {
      display: none;
    }
  }
}
</style>
