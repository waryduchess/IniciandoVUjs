<template>
  <div class="register-container">
    <div class="register-card">
      <pinata-header title="¡Regístrate!"/>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>🎭 Nombre:</label>
          <input type="text" v-model="name" required placeholder="Tu nombre">
        </div>
        <div class="form-group">
          <label>🎈 Email:</label>
          <input type="email" v-model="email" required placeholder="tu@email.com">
        </div>
        <div class="form-group">
          <label>🎪 Password:</label>
          <input type="password" v-model="password" required placeholder="••••••••">
        </div>
        <button type="submit">¡Registrarme! 🎉</button>
      </form>
      <div class="confetti-decoration"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PinataHeader from '@/components/PinataHeader.vue'

export default Vue.extend({
  name: 'RegisterView',
  components: {
    PinataHeader
  },
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
.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FFC3A0 0%, #FFAFBD 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.register-card {
  max-width: 400px;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.pinata-header {
  text-align: center;
  margin-bottom: 40px;
}

.pinata {
  width: 120px;
  height: 150px;
  margin: 0 auto 20px;
  position: relative;
}

.pinata-body {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #FF69B4, #FFB6C1, #87CEEB, #98FB98);
  border-radius: 60px;
  position: relative;
  transform-origin: top center;
  animation: swing 3s ease-in-out infinite;
}

.pinata-fringe {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: repeating-linear-gradient(
    90deg,
    #FFD700,
    #FFD700 10px,
    #FFA07A 10px,
    #FFA07A 20px
  );
  border-radius: 0 0 30px 30px;
}

.pinata-header h1 {
  color: #FF1493;
  font-size: 2.2em;
  margin: 20px 0;
  font-family: 'Comic Sans MS', cursive;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #FF69B4;
  font-weight: bold;
  font-size: 1.1em;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 3px solid #FFB6C1;
  border-radius: 15px;
  font-size: 1em;
  transition: all 0.3s ease;
  background: rgba(255,255,255,0.9);
}

input:focus {
  outline: none;
  border-color: #FF69B4;
  box-shadow: 0 0 15px rgba(255,105,180,0.3);
  transform: translateY(-2px);
}

button {
  width: 100%;
  padding: 15px;
  background: linear-gradient(45deg, #FF69B4, #FF8C00, #FF1493);
  background-size: 200% 200%;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.2em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: gradientBG 3s ease infinite;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(255,105,180,0.4);
}

button:active {
  transform: translateY(-1px);
}

@keyframes swing {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Confetti effect */
.confetti-decoration::before,
.confetti-decoration::after {
  content: '🎈';
  position: absolute;
  font-size: 2em;
  animation: float 6s ease-in-out infinite;
}

.confetti-decoration::before {
  top: 20px;
  left: 20px;
}

.confetti-decoration::after {
  bottom: 20px;
  right: 20px;
  animation-delay: -3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}
</style>