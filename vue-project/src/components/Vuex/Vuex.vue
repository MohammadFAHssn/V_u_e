<script lang="ts">
export default {}
</script>

<template>
  <h2>Vuex</h2>

  <!-- >What & Why -->
  <section class="tip">
    <h3>What & Why</h3>

    <ul>
      <li>So, exactly is Vuex: Vuex is a library for managing global state</li>

      <li>
        local state: inside of one component. which only affects this one component and possibly
        indirectly through props, also a child component
      </li>
      <li>
        global state: that affects multiple components, possibly the entire app. here could be the
        user authentication status. thus far, we managed this state through provide and inject.
      </li>
    </ul>
  </section>
</template>
