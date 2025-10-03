<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Iniciar Sesión</h2>
        <div>
    <h1>WEEYYYYYyy</h1>
  </div>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">Usuario:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Ingrese su usuario"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        <button type="submit" class="login-button">Ingresar</button>
      </form>
    </div>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {
  username = "";
  password = "";

  handleLogin() {
    console.log("Usuario:", this.username);
    console.log("Contraseña:", this.password);
    // Aquí irá la lógica de autenticación
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.login-box {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: purple;
}

.login-button {
  width: 100%;
  background-color: purple;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #6a0dad;
}
</style>
