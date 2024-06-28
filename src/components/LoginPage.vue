<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-title>Register</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="username"
                  label="Username"
                  :rules="[v => !!v || 'Username is required']"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  :rules="[v => !!v || 'Password is required']"
                  required
                  type="password"
                ></v-text-field>
                <v-btn :disabled="!valid" color="primary" @click="login">Register</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        valid: false,
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Call API or perform login logic here
        console.log('Login successful!')
        // Redirect to protected route or homepage
        this.$router.push('/')
      }
    }
  }
  </script>