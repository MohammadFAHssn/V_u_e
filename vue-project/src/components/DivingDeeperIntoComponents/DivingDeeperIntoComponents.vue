<script lang="ts">
export default {}
</script>

<template>
  <h2>Diving Deeper Into Components</h2>

  <!-- global component -->
  <section class="tip">
    <h3>global component</h3>
  </section>

  <!-- more on slots -->
  <section class="tip">
    <h3>more on slots</h3>

    <ul>
      <li>
        default slot content:
        <div>
          if you have a slot which receives no content, that this slot can then render some default
          content. we can add default content by adding content between our slots tags.
        </div>
      </li>

      <li>
        <pre>
          <code>
            this.$slots.slot_name
          </code>
        </pre>
      </li>
    </ul>
  </section>

  <!-- scoped slots -->
  <section class="tip">
    <h3>scoped slots</h3>

    <div>
      parent:
      <pre>
        <code>
        &lt;child&gt;
            &lt;template #chem=&quot;slotProps&quot;&gt;
                &lt;p&gt;&lcub;&lcub;slotProps.goal&rcub;&rcub;&lt;/p&gt;
            &lt;/template&gt;
        &lt;/child&gt;
        </code>
      </pre>
    </div>

    <div>
      child:
      <pre>
        <code>
        &lt;ul&gt;
            &lt;li v-for=&quot;goal in goals&quot; :key=&quot;goal&quot;&gt;
                &lt;slot name=&quot;chem&quot; :goal=&quot;goal&quot;&gt;&lt;/slot&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code>
      </pre>
    </div>
  </section>

  <!-- dynamic components -->
  <section class="tip">
    <h3>dynamic components</h3>

    <div>
      the build-in vue &lt;component&gt;&lt;/component&gt; tag:
      <pre>
        <code>
            &lt;component :is=&quot;selectedComponent&quot;&gt;&lt;/component&gt;
        </code>
      </pre>
      if the selected component is child1 then the child1 will be shown.
    </div>
  </section>
</template>
