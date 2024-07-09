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
              <v-checkbox v-model="rememberMe" label="Remember me"></v-checkbox>

              <v-divider class="my-4"></v-divider>

              <p>Select your interests:</p>
              <v-checkbox v-model="interests" label="Technology" value="Technology"></v-checkbox>
              <v-checkbox v-model="interests" label="Finance" value="Finance"></v-checkbox>
              <v-checkbox v-model="interests" label="Health" value="Health"></v-checkbox>
              <v-checkbox v-model="interests" label="Sports" value="Sports"></v-checkbox>
              <v-checkbox v-model="interests" label="Entertainment" value="Entertainment"></v-checkbox>

              <v-btn :disabled="!valid" color="primary" @click="register">Register</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="showSnackbar" timeout="3000">
      Please select at least one interest.
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      valid: false,
      username: '',
      password: '',
      rememberMe: false,
      interests: [],
      showSnackbar: false,
    };
  },
  methods: {
    ...mapActions(['setUser']),
    register() {
      if (this.interests.length === 0) {
        this.showSnackbar = true;
        return;
      }
      const user = {
        name: this.username,
        preferences: this.interests,
      };
      this.setUser(user);
      console.log('Registration successful!');
      this.$router.push('/'); // Redirect to the homepage after registration
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
