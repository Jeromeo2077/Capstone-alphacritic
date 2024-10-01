<script setup>
import { AppState } from '@/AppState.js';
import { gamesService } from '@/services/GamesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


onMounted(() => {
  getAllGames();
});

const games = computed(() => AppState.games)

async function getAllGames() {
  try {
    await gamesService.getAllGames();
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>

<template>

  <H1>Alphacritic</H1>
  <p>Alphacritic is a web application that allows users to search for movies and view their ratings from various
    sources.</p>

  {{ games }}

</template>

<style scoped lang="scss"></style>
