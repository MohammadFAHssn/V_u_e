<script lang="ts">
export default {}
</script>

<template>
  <h2>Component Communication</h2>

  <section class="tip">
    <h3>Props</h3>
    <p>
      we pass props into components using kebab-case naming, and read this Props in the other side
      using camel-case naming. Vue automatically translates kebab-case into camel-case
    </p>

    <p>Props typically should not be mutated(unidirectional data flow)</p>
  </section>
</template>
