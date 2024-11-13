<script lang="ts">
export default {}
</script>

<template>
  <h2>Other</h2>

  <section class="tip">
    <h3>Call by reference in js</h3>
    <ul>
      <li><img src="/src/assets/images/call-by-reference.png" width="400px" /></li>
    </ul>
  </section>

  <section class="tip">
    <h3>client side validation</h3>
    <ul>
      <li><img src="/src/assets/images/client-side-validation.png" width="700px" /></li>
    </ul>
  </section>

  <!-- arrow function -->
  <section class="tip">
    <h3>arrow function</h3>

    <div>
      I get an error: "Cannot set property results of undefined". I'm getting this because "this"
      keyword in here actually turns out to not refer to my view instance object unfortunately. The
      easiest way of working around that is that we don't use this function syntax here but this
      arrow function syntax instead: "this" keyword inside of them, does refer to the same context
      as it does outside of them.
    </div>
  </section>

  <section class="tip">
    <p>@blur: when the input loses focus</p>
  </section>
</template>
