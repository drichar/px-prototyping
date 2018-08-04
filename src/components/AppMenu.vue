<template lang="html">
  <div class="px-menu">
    <nav class="nav flex-column">
      <a class="nav-link" href="#">
        <svg viewBox="0 0 24 24">
          <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"/>
        </svg>
      </a>
      <a class="nav-link" href="#" v-for="item in [1,2,3,4,5,6,7,8]" :key="item">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppMenu'
}
</script>

<style lang="scss">
.px-menu {
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

      path {
        fill: hsla(0,0,100,1);
      }

      circle {
        fill: hsla(0,0,100,0.25);
      }
    }

    &:nth-child(2) {
      background: hsla(0,0,100,0.1875);
    }
  }
}
</style>
