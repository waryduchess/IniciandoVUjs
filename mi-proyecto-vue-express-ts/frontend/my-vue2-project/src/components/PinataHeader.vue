<template>
  <div class="pinata-header">
    <div class="pinata">
      <div class="pinata-body"></div>
      <div class="pinata-fringe"></div>
    </div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PinataHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
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

h1 {
  color: #FF1493;
  font-size: 2.2em;
  margin: 20px 0;
  font-family: 'Comic Sans MS', cursive;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

@keyframes swing {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}
</style>