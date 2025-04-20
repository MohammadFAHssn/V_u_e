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

    <p>
      <strong>ref</strong> creates a so-called reference, but now not just a reference to some DOM
      element, but instead, a value which we can reference. So ref creates a value, but not any kind
      of value, Instead a reactive value. where Vue will find out when we change it. the const
      varaible that is assigned to the ref function is an object.
    </p>

    <p>into return object, we'll put all the things, we wanna expose to the template</p>

    <p>
      Now, actually you wouldn't even need the ref method, if I remove it and I store a normal
      string here, then all the words. but it is not reactive anymore.
    </p>

    <p>
      <img src="/src/assets/images/ref.png" width="300px" />
    </p>

    <div class="tip">
      <p>
        Vue.js offers an alternative syntax:&nbsp;You can use
        <code>&lt;script setup&gt;</code> instead of manually adding a
        <code>setup()</code>&nbsp;method.
      </p>
      <p>The following code:</p>
      <pre class="tip">
&lt;script&gt;
import { ref } from 'vue';

export default {
  setup() {
    const uName =&nbsp;ref('Maximilian');

    setTimeout(function()&nbsp;{
      uName.value =&nbsp;'Max';
    }, 2000);

    return { uName };
  }
}
&lt;/script&gt;</pre
      >
      <p>could be replaced with:</p>
      <pre class="tip">
&lt;script setup&gt;
import { ref } from 'vue';

const uName =&nbsp;ref('Maximilian');

setTimeout(function()&nbsp;{
  uName.value =&nbsp;'Max';
}, 2000);
&lt;/script&gt;</pre
      >
    </div>
  </section>

  <!-- Building reactive Objects -->
  <section class="tip">
    <h3>Building reactive Objects</h3>

    <p>if we use in this way:</p>
    <p>
      <img src="/src/assets/images/Building-reactive-Objects.png" width="500px" />
    </p>
    <p>
      every thing is ok, but the changes is not reflect to DOM, the reason is in return, we must
      return the "ref" itself. i mean we must return the "user" itself.
    </p>
  </section>

  <span> </span>
</template>
