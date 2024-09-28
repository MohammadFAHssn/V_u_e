<script lang="ts">
export default {}
</script>

<template>
  <h2>Component Communication</h2>

  <section class="tip">
    <h3>Props</h3>
    <ul>
      <li>Props typically should not be mutated(unidirectional data flow)</li>

      <li>
        validating props:
        <pre>
          <code>
            props: { 
              age: { 
                type: Number,
                required: true,
                // default: 0,
                default: function(){},
                }
                validator: function(passedData){
                  if (passedData === validateDataForThisComponent){
                    return true;
                  }
                  return false;
                }
            }
          </code>
        </pre>
      </li>
    </ul>
  </section>
</template>
