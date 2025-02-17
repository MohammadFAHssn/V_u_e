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

  <!-- Creating & Using a Store -->
  <section class="tip">
    <h3>Creating & Using a Store</h3>

    <ul>
      <li>first for global:</li>

      <li>
        <img src="/src/assets/images/vuex.png" width="300px" />
      </li>

      <li>
        <img src="/src/assets/images/vuex-2.png" width="350px" />
      </li>

      <li>
        <img src="/src/assets/images/vuex-3.png" width="300px" />
      </li>
    </ul>
  </section>

  <!-- Introducing Mutations - A Better Way of Changing Data -->
  <section class="tip">
    <h3>Introducing Mutations - A Better Way of Changing Data</h3>

    <ul>
      <li>
        <img
          src="/src/assets/images/Introducing Mutations - A Better Way of Changing Data.png"
          width="300px"
        />
      </li>

      <li>
        <img
          src="/src/assets/images/Introducing Mutations - A Better Way of Changing Data - 2.png"
          width="300px"
        />
      </li>

      <li>
        <strong>
          in this way, if we change some state in a place and use it in another place, we don't have
          to refresh the page!
        </strong>
      </li>

      <li>
        <img
          src="/src/assets/images/Introducing Mutations - A Better Way of Changing Data - 3.png"
          width="350px"
        />
      </li>

      <li>
        <img
          src="/src/assets/images/Introducing Mutations - A Better Way of Changing Data - 4.png"
          width="350px"
        />
      </li>
    </ul>
  </section>
</template>
