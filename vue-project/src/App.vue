<script lang="ts">
export default {}
</script>

<template>
  <section>
    <h1>Vue Tutorial</h1>
  </section>

  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/component-communication">Component Communication</RouterLink></li>
      <li>
        <RouterLink to="/diving-deeper-into-components">Diving Deeper Into Components</RouterLink>
      </li>
      <li>
        <RouterLink to="/forms">Forms</RouterLink>
      </li>
      <li><RouterLink to="/other">Other</RouterLink></li>
    </ul>
  </nav>

  <section class="body">
    <RouterView />
  </section>
</template>

<style scoped>
nav {
  border: 1px solid black;
}

.body {
  margin: 1em;
  padding: 1em;

  border: 1px solid black;
}
</style>
