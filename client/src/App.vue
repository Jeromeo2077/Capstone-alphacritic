<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="hero-img">
    <router-view />
  </main>
  <!-- <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer> -->
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}

.hero-img {
  background-image: url("https://i.postimg.cc/W4SQb5sP/image-7.jpg");
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
