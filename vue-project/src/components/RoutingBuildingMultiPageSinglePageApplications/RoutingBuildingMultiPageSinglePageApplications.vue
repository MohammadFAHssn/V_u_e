<script lang="ts">
export default {}
</script>

<template>
  <h2>Routing Building Multi Page Single Page Applications</h2>

  <!--  History modes in vue router -->
  <section class="tip">
    <h3>History modes in vue router</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org/guide/essentials/history-mode.html"
          >Different History modes</a
        >
      </li>
      <li>
        <img src="/src/assets/images/catch-all-fallback-route-vite.png" width="800px" />
      </li>
      <li>
        <img src="/src/assets/images/catch-all-fallback-route-laravel.png" width="800px" />
      </li>
    </ul>
  </section>

  <!--  style RouterLink -->
  <section class="tip">
    <h3>style RouterLink</h3>

    <ul>
      <li>to style RouterLink, style a instead!</li>

      <li><img src="/src/assets/images/style-RouterLink.png" width="800px" /></li>

      <li>
        you see that some CSS classes were added here. These classes are added automatically by view
        router on the link which is currently selected, So for the route that's currently active.
        you have two classes on their router-link-active. Now, the difference is that
        router-link-active would also be applied to if we had some nested route to this route here
      </li>
    </ul>
  </section>
</template>
