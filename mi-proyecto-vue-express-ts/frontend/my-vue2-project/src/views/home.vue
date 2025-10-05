<template>
  <div class="home">
    <h1>Bienvenido</h1>
    <nav>
      <router-link to="/login">Iniciar Sesión</router-link> |
      <router-link to="/register">Registrarse</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeView'
})
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

nav {
  margin: 20px 0;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}

nav a:hover {
  color: #42b983;
}
</style>