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

  <!-- Introducing Getters - A Better Way Of Getting Data -->
  <section class="tip">
    <h3>Introducing Getters - A Better Way Of Getting Data</h3>

    <ul>
      <li>
        <img
          src="/src/assets/images/Introducing Getters - A Better Way Of Getting Data 4.png"
          width="400px"
        />
        and other getters, Getting other getters in a getter, can be helpful if the value you wanna
        calculate here, depends on the result of an another getter
      </li>

      <li>
        <img
          src="/src/assets/images/Introducing Getters - A Better Way Of Getting Data 2.png"
          width="300px"
        />
      </li>

      <li>
        <img
          src="/src/assets/images/Introducing Getters - A Better Way Of Getting Data 3.png"
          width="400px"
        />
      </li>
    </ul>
  </section>

  <!-- Running Async Code with Actions -->
  <section class="tip">
    <h3>Running Async Code with Actions</h3>

    <ul>
      <li>
        Let's say, in the increment mutation, we don't wanna increment immediately, Instead, we
        wanna wait two seconds and then increment(asynchronously). The problem is that Mutations
        must be synchronous. The reason for that simply is that if multiple Mutations execute, every
        mutation should get the latest state. Components should trigger Actions which then in turn
        commit Mutations.
      </li>

      <li>
        You can use the same name here as you do in your Mutations. often you will because often you
        just have an action in between a component and a mutation.
      </li>

      <li>
        <img src="/src/assets/images/actions-in-vuex.png" width="300px" />
      </li>

      <li><img src="/src/assets/images/use-actions-in-vuex.png" width="400px" /></li>

      <li>
        the context object: So what's inside of context as well: but let's have a look at
        <strong>dispatch</strong>: You can also dispatch a number action from inside an action. You
        can also access <strong>getters</strong>. And you can also directly tap into the
        <strong>state</strong>. You should not manipulate the state from inside the action though,
        Always use a mutation for that.
      </li>
    </ul>
  </section>

  <!-- Auth example -->
  <section class="tip">
    <h3>Auth example</h3>

    <p>
      of course we could manage this locally into component, but again, authentication might matter
      to a lot of parts of this app. So we wanna manage it with vux and states.
    </p>

    <p>
      <img src="/src/assets/images/auth-vuex.png" width="300px" />
    </p>

    <p>
      <img src="/src/assets/images/auth-vuex-2.png" width="350px" />
    </p>

    <p>
      <img src="/src/assets/images/auth-vuex-3.png" width="450px" />
    </p>

    <p>
      <img src="/src/assets/images/auth-vuex-4.png" width="300px" />
    </p>
  </section>

  <!-- Organizing your Store with Modules -->
  <section class="tip">
    <h3>Organizing your Store with Modules</h3>

    <p>
      <img src="/src/assets/images/Organizing-your-Store-with-Modules.png" width="500px" />
    </p>

    <p>
      <img src="/src/assets/images/Organizing-your-Store-with-Modules-2.png" width="300px" />
    </p>
  </section>

  <!-- Understanding Local Module State -->
  <section class="tip">
    <h3>Understanding Local Module State</h3>

    <p>
      I mentioned that modules are merged into your main store on the same level as all the other
      things in the store. Let's say inside of the counter module, inside of a mutation, inside of
      the increased mutation let's say , we console.log, our state. Well, let's have a look what
      happens. This is the log here for our state. And if we have a look at this, we see something
      interesting. We see the counter in there. But there's one thing we don't see in here. Our
      authentication state. Because the state inside of a module, is actually treated as a local
      state, inside of the module.
    </p>
    <p>in a getter, I would not be able to get the auth status.</p>
    <p>
      Now in case you need to work around that, there are ways though.
      <img src="/src/assets/images/Understanding-Local-Module-State.png" width="500px" />
    </p>
  </section>
</template>
