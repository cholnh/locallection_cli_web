<template>
  <div>
    <h1>{{ vm_title }}</h1>

    <b-card-group>
      <b-card header="get data (guest)">
        <b-card-text>
          data : {{ dataForGuest }}
        </b-card-text>
        <b-button @click="OnFetchDataGuestToken"
                  variant="success">전송</b-button>
      </b-card>

      <b-card header="guest token payload">
        <b-card-text>
          Access Token : {{ getAccessToken }}
        </b-card-text>
        <b-button @click="OnGuestToken"
                  variant="success">전송</b-button>
      </b-card>

      <b-card header="user token payload">
        <b-card-text>
          Access Token : {{ getAccessToken }} <br>
          Refresh Token : {{ getRefreshToken }}
        </b-card-text>
        <b-textarea v-model="vm_token_payload_username" class="mb-3"
                    placeholder="username"
                    :rows="1"
                    :max-rows="1">
        </b-textarea>
        <b-textarea v-model="vm_token_payload_password" class="mb-3"
                    placeholder="password"
                    :rows="1"
                    :max-rows="1">
        </b-textarea>
        <b-button @click="OnUserToken(
                            {
                              username: vm_token_payload_username,
                              password: vm_token_payload_password
                            })"
                  variant="success">전송</b-button>
      </b-card>

      <b-card header="refresh token payload">
        <b-card-text>
          Access Token : {{ getAccessToken }} <br>
          Refresh Token : {{ getRefreshToken }}
        </b-card-text>
        <b-textarea v-model="vm_token_payload_refresh_token" class="mb-3"
                    placeholder="token refresh"
                    :rows="3"
                    :max-rows="6">
        </b-textarea>
        <b-button @click="OnRefreshToken({
                            token: vm_token_payload_refresh_token
                          })"
                  variant="success">전송</b-button>
      </b-card>

    </b-card-group>

    <b-card-group deck class="m-3">

      <b-card header="서버 상태 체크">
        <b-form-textarea v-model="vm_formText" class="mb-3"
                         placeholder="서버 상태 체크"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
        <b-button @click="OnHealthCheck"
                  variant="success">전송</b-button>
      </b-card>

      <b-card header="vuex counter">
        <b-card-text> {{ getCounter }} </b-card-text>
        <button @click="OnAddCounter">+</button>
        <button @click="OnSubCounter">-</button>
      </b-card>

      <b-card header="vuex payload">
        <b-card-text> {{ getPayload }} </b-card-text>
        <b-textarea v-model="vm_vuex_payload" class="mb-3"
                    placeholder="vuex payload"
                    :rows="3"
                    :max-rows="6">
        </b-textarea>
        <b-button @click="OnPayload(vm_vuex_payload)"
                  variant="success">전송</b-button>
      </b-card>
    </b-card-group>

  </div>

</template>

<script>

import { mapGetters, mapMutations, mapActions } from 'vuex'
import { RepositoryFactory } from '@/api/RepositoryFactory'
const HealthCheckRepository = RepositoryFactory.get('HealthCheck')
const TestDataRepository = RepositoryFactory.get('TestData')

export default {
  name: 'HelloWorld',
  created () {},
  data () {
    return {
      vm_title: 'SERVER STATUS TEST PAGE',
      vm_isLoading: false,
      vm_formText: '',
      vm_oauth2guest: '',
      vm_vuex_payload: '',
      vm_token_payload_username: '',
      vm_token_payload_password: '',
      vm_token_payload_refresh_token: '',
      dataForGuest: ''
    }
  },
  computed: {
    ...mapGetters([
      'getCounter', 'getPayload', 'getAccessToken', 'getRefreshToken'
    ])
  },
  methods: {
    ...mapMutations({
      OnAddCounter: 'add',
      OnSubCounter: 'sub',
      OnPayload: 'setPayload'
    }),
    ...mapActions({
      OnGuestToken: 'getOauth2guestToken',
      OnUserToken: 'getOauth2userToken',
      OnRefreshToken: 'getOauth2refreshToken'
    }),
    async OnHealthCheck () {
      try {
        this.vm_isLoading = true
        const {data} = await HealthCheckRepository.get()
        this.vm_isLoading = false
        this.vm_formText = JSON.stringify(data)
      } catch (err) {
        this.vm_formText = err
      }
    },
    async OnFetchDataGuestToken () {
      try {
        const {data} = await TestDataRepository.get()
        this.dataForGuest = data
      } catch (err) {
        this.dataForGuest = err
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
