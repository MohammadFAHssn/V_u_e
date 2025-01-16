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

  <!--  programmatic navigation -->
  <section class="tip">
    <h3>programmatic navigation</h3>

    <ul>
      <li>if you want to go to "/test" route: this.$router.push('/test')</li>

      <li>this.$router.forward</li>

      <li>this.$router.back</li>
    </ul>
  </section>

  <!--  Passing Data with Route Params (Dynamic Segments) -->
  <section class="tip">
    <h3>Passing Data with Route Params (Dynamic Segments)</h3>

    <ul>
      <li>
        <img
          src="/src/assets/images/Passing-Data-with-Route-Params-Dynamic-Segments.png"
          width="400px"
        />
      </li>

      <li>
        that means that this route will become active if the user enters /teams and then anything
        thereafter
      </li>

      <li>
        the order matters by the way. if you had another route here /teams/new, you should put this
        first because otherwise this path here this route would match this route as well, because
        new would be interpreted as a team ID.
      </li>

      <li>this.$route.path: /teams/t1</li>
      <li>this.$route.params.teamId</li>

      <li>The view router does not destroy and rebuild the components that were loaded</li>
    </ul>
  </section>

  <!--  Passing Params as Props -->
  <section class="tip">
    <h3>Passing Params as Props</h3>

    <p>{path: "/teams/:teamId", component: TeamMembers, props: true}</p>

    <p>in the "TeamMembers" component: props=["teamId"]</p>
  </section>

  <!--  Redirecting & Catch All Routes -->
  <section class="tip">
    <h3>Redirecting & Catch All Routes</h3>

    <ul>
      <li>
        <p>{path: "/", redirect: "/teams"}</p>
        <p>or</p>
        <p>
          {path: "/teams", alias: "/"} ==> in this use case, is that the URL doesn't change, And
          that's the difference to a redirect, With a redirect the URL is changed, You are really
          redirected to a different path, With an alias, the URL does not change, You just load the
          same component as on a different route
        </p>
      </li>

      <li>
        Another thing which we're not handling in this demo here is the use case that the user
        enters any route which is not supported. That's why you can define "catch all" routes. So
        here I'll add a new route at the end. because it should have the lowest priority, and only
        kick in if no other route handles this.
        <p>{path: "/:harChi(.*)", redirect: "/"} ==> (.*) ==> any character combination</p>
      </li>
    </ul>
  </section>

  <!--  Using Nested Routes -->
  <section class="tip">
    <h3>Using Nested Routes -> nested components!</h3>
  </section>

  <!--  Rendering Multiple Routes with Named Router Views -->
  <section class="tip">
    <h3>Rendering Multiple Routes with Named Router Views</h3>
  </section>

  <!--  Controlling Scroll Behavior -->
  <section class="tip">
    <h3>Controlling Scroll Behavior</h3>
  </section>
</template>
