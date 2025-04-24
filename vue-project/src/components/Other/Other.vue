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

  <section class="tip">
    <h3>Optimization Using Asynchronous Components</h3>

    <p>
      Well, there are certain components, which we don't need every time this application is loaded.
      we can load lazily, asynchronously, only when we need it. because right now, all those
      components, all pages and all other components are downloaded all the time, no matter if a
      user needs them or not and that means we have everything available when we need it, that's
      great, but it also means we download a lot of code in advance which we don't need yet, or
      which we might never need
    </p>

    <p>
      <code>import {createApp, defineAsyncComponent} from 'vue';</code>
    </p>

    <p>
      <img src="/src/assets/images/Optimization-Using-Asynchronous-Components.png" width="700px" />
    </p>
    <p>
      Whenever you have an import statement like this(the traditional way), this in the end tells
      Vue that the code in that file you're importing is needed.
    </p>

    <p>
      Now we cannot just use defineAsyncComponent for global components like this, though, we can
      also use it for local components, and, and that's pretty interesting, for
      <strong>routes</strong>
    </p>

    <div>
      It turns out, that it's NOT recommended to use async components for routing (you may use them
      to conditionally load and fetch component code when working with v-if etc. though). For
      routing, simply change the syntax from

      <pre>
        <code>
          const CoachDetail = defineAsyncComponent(() => import('./pages/coaches/CoachDetail.vue') );
        </code>
      </pre>
      to

      <pre>
        <code> const CoachDetail = () => import('./pages/coaches/CoachDetail.vue'); </code>
      </pre>
      (for all routes)
    </div>
  </section>

  <span></span>
</template>
