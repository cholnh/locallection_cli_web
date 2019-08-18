<template>
  <div>
    <h1>{{ vm_title }}</h1>
    <b-card-group deck class="m-3">
      <b-card header="GET">
        <b-form-textarea v-model="vm_formText" class="mb-3"
                         placeholder="이곳에 결과 값이 나옴"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="healthCheckOn"
                  variant="success">전송</b-button>
      </b-card>
    </b-card-group>

  </div>

</template>

<script>

import { RepositoryFactory } from '@/api/RepositoryFactory'
const HealthCheckRepository = RepositoryFactory.get('HealthCheck')

export default {
  name: 'HelloWorld',
  created () {},
  data () {
    return {
      vm_title: 'SERVER STATUS TEST PAGE',
      vm_isLoading: false,
      vm_formText: ''
    }
  },
  methods: {
    async healthCheckOn () {
      try {
        this.vm_isLoading = true
        const { data } = await HealthCheckRepository.get()
        this.vm_isLoading = false
        this.vm_formText = JSON.stringify(data)
      } catch (err) {
        this.vm_formText = err
        console.error(err)
        this.vm_formText = err
      }
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
