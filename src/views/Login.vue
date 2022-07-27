<template>
  <v-container fill-height style="max-width: 450px;">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert
          :value="isLoginError"
          type="error"
        >
          아이디와 비밀번호를 확인해주세요.
        </v-alert>
        <v-alert
            :value="isLogin"
            type="success"
        >
          아이디와 비밀번호를 확인해주세요.
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <v-container>
            <v-text-field
                v-model="username"
                label="Username"
            >
            </v-text-field>
            <v-text-field
                v-model="password"
                type="password"
                label="Password"
            >
            </v-text-field>
            <v-btn
              large
              block
              depressed
              color="primary"
              @click="login({username, password})"
            >로그인
            </v-btn>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapActions, mapState } from 'vuex'
  export default{
    data(){
      return{
        username:"",
        password:"",

      }
    },
    computed:{
      ...mapState(['isLogin','isLoginError'])
    },
    methods:{
      ...mapActions(["login"]),
      }
  }
</script>