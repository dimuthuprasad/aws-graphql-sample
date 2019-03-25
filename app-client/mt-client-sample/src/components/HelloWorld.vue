<template>
  <div class="hello">
    <h1 v-bind:style="{ color: getHeadingColor() }">Qmatic</h1>

    <button v-on:click="getConfig">Get Config</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import gql from "graphql-tag";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
private headingColor: string = '#000';
 

  async getConfig() {
    console.log("getting config");

    const result = await this.$apollo.query( {query :gql` 
      {
        configuration {
          key
          value
        }
      }
    `});

    if(result) {
      this.headingColor = result.data.configuration[0].value;
    }
  }

  getHeadingColor() {
    return this.headingColor;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
