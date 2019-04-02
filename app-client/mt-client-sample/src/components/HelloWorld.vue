<template>
  <div class="hello">
    <h1 v-bind:style="{ color: getHeadingColor() }">Qmatic</h1>

    <button v-on:click="getConfig">Get Config</button>
  
    <button v-on:click="getFromDynamoDB">Get From DynamoDB</button>

    <hr/>
    <h2>{{ greeting }}</h2>

    <div>
      <input type="text" name="nickNameTextBox" id="nickNameTextBox" v-model="nickName">

        <button v-on:click="changeNickName">Change NickName</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
import axios from 'axios';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
private headingColor: string = '#000';
 private greeting: string = '';
 private nickName: string = '';

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


async changeNickName() {


const mutationRequest = `https://5a4f0iqd7f.execute-api.us-east-1.amazonaws.com/dev/query?query=mutation%7BchangeNickname%28firstName%3A%22Jeremy%22%2C%20nickname%3A%22${this.nickName}%22%29%7D`;

  const result = await axios.get(mutationRequest);
  await this.getFromDynamoDB();
}


  async getFromDynamoDB() {
  const dynamoData = await axios.get('https://5a4f0iqd7f.execute-api.us-east-1.amazonaws.com/dev/query?query=%7Bgreeting%28firstName%3A%22Nalaka%22%29%7D');
  this.greeting = dynamoData.data.data.greeting;

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
