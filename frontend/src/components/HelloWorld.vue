<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="hh">
      <h4>{{serverStatus}}</h4>
    </div>
    <button v-on:click="healthCheckOn">serverStatus!</button>

    <b-card-group deck class="m-3">
      <b-card header="POST">
        <b-form-textarea v-model="txtPost" class="mb-3"
                         placeholder="이곳에 결과 값이 나옴"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="sendPost"
                  variant="primary">전송</b-button>
      </b-card>
      <b-card header="GET">
        <b-form-textarea v-model="txtGet" class="mb-3"
                         placeholder="이곳에 결과 값이 나옴"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="sendGet"
                  variant="success">전송</b-button>
      </b-card>
      <b-card header="PUT">
        <b-form-textarea v-model="txtPut" class="mb-3"
                         placeholder="이곳에 결과 값이 나옴"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="sendPut"
                  variant="warning">전송</b-button>
      </b-card>
      <b-card header="DELETE">
        <b-form-textarea v-model="txtDelete" class="mb-3"
                         placeholder="이곳에 결과 값이 나옴"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="sendDelete"
                  variant="danger">전송</b-button>
      </b-card>
    </b-card-group>

  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      txtPost: '',
      txtGet: '',
      txtPut: '',
      txtDelete: '',
      msg: 'Test Page',
      serverStatus: '??'
    }
  },
  computed: {
    hasResult: () => {
      return this.serverStatus != null && this.serverStatus.length > 0
    }
  },
  methods: {
    sendPost: () => {
      this.txtPost = 'pppp'
    },
    sendPut: () => {
      this.txtPut = 'uuuuu'
    },
    sendDelete: () => {
      this.txtDelete = 'ddddd'
    },
    sendGet: () => {
      axios.get('https://localhost:9530/api/v1/application/healthCheck')
        .then((res) => {
          console.log(res)
          this.txtGet = JSON.stringify(res.data.status)
        })
        .catch((err) => {
          console.log(err)
          this.txtGet = JSON.stringify(err)
        })
    },
    healthCheckOn: () => {
      const baseURI = 'https://localhost:9530'
      axios.get(`${baseURI}/api/v1/application/healthCheck`)
        .then((result) => {
          console.log(result)
          this.serverStatus = 'gg'
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
