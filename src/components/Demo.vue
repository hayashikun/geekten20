<template>
  <div>
    <label>
      Name:
      <input v-model="name">
    </label>
    <button @click="sayHello">Hello</button>
    <div>{{ answer }}</div>
  </div>
</template>

<script>
const {HelloRequest} = require("../proto/qoin/proto/hello_pb");
const {GreeterClient} = require("../proto/qoin/proto/hello_grpc_web_pb.js");

export default {
  name: "Demo",
  data() {
    return {
      name: '',
      answer: ''
    }
  },
  created() {
    this.client = new GreeterClient('http://localhost:3000', null, null);
  },
  methods: {
    sayHello() {
      const request = new HelloRequest();
      request.setName(this.name);
      this.client.sayHello(request, {}, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          this.answer = response.getMessage();
        }
      })
    }
  }
}
</script>

<style scoped>

</style>