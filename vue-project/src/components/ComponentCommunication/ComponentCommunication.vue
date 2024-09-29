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

      <li>
        prop drilling(pass-through problems):
        <div>
          in parent:
          <pre>
            <code>
              export default {
                provide(){
                  return props: this.props
                }
              }
            </code>
          </pre>
          in child:
          <pre>
            <code>
              export default {
                inject: ["props"]
              }
            </code>
          </pre>
        </div>
      </li>

      <li>
        custom event drilling(pass-through problems):
        <div>
          in child:
          <pre>
            <code>
              &lt;button @click="somethingChange(id)"&gt;&lt;button&gt;
              export default {
                inject: ["somethingChange"]
              }
            </code>
          </pre>
          in parent:
          <pre>
            <code>
              &lt;child&gt;&lt;/child&gt;

              export default {
                provide(){
                  return {
                    props: this.props,
                    someThingChange: this.OnchangeSomething
                    }
                }

                method:{
                  OnchangeSomething(id){
                    // ...
                  }
                }
              }
            </code>
          </pre>
        </div>
      </li>
    </ul>
  </section>
</template>
