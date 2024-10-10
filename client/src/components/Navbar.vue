<script setup>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { AppState } from "@/AppState.js";

const theme = ref(loadState('theme') || 'light')

const account = computed(() => AppState.account)

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}

</script>

<template>
  <nav class="navbar navbar-expand-sm px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="/src/assets/img/image.png" height="120" />
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">

        <li>
          <router-link :to="{ name: 'Games' }" class="btn navbar-link lighten-30 selectable text-uppercase">
            Games
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn navbar-link lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
        <li v-if="account">
          <router-link :to="{ name: 'Profile', params: { profileId: account.id } }"
            class="btn navbar-link lighten-30 selectable text-uppercase">
            Profile
          </router-link>
        </li>

      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <div>
        <button class="btn text-light" @click="toggleTheme"
          :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
          <Icon :name="theme == 'light' ? 'weather-sunny' : 'weather-night'" />
        </button>
      </div>
      <Login />
    </div>
  </nav>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.navbar-link {
  color: #d9d9d9;
}


@media screen and (min-width: 576px) {
  nav {
    height: 128px;
  }
}

.navbar {
  background-color: #0c0c0c;
}
</style>
