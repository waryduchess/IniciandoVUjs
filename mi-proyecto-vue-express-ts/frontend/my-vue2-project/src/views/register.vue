<template>
  <div class="register">
    <h1>Registro</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label>Nombre:</label>
        <input type="text" v-model="name" required>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegisterView',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    handleRegister() {
      // Aquí irá la lógica de registro
      console.log('Register attempt:', { name: this.name, email: this.email })
    }
  }
})
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>