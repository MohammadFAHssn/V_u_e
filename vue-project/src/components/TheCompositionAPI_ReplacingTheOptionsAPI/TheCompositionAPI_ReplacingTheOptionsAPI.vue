<script lang="ts">
export default {}
</script>

<template>
  <h2>The Composition API - Replacing the Options API</h2>

  <!-- Which Problem Does The Composition API Solve -->
  <section class="tip">
    <h3>Which Problem Does The Composition API Solve</h3>

    <p>
      <img src="/src/assets/images/option-api.png" width="300px" />
    </p>

    <p>in option api, re-using logic across components can also be tricky or cumbersome</p>

    <p>
      <img
        src="/src/assets/images/Which-Problem-Does-The-Composition-API-Solve.png"
        width="600px"
      />
    </p>
  </section>

  <!-- Replacing data with refs -->
  <section class="tip">
    <h3>Replacing data with refs</h3>

    <p>
      <img src="/src/assets/images/from-options-api-to-composition-api.png" width="600px" />
    </p>

    <p>
      all the other options we also learned about Props, emits, components, those remain untouched
      by the Composition API
    </p>

    <p>The only other part which will also change will be the lifecycle methods</p>
  </section>

  <span></span>
</template>
