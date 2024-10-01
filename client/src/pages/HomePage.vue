<script setup>
import { gamesService } from '@/services/GamesService.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';


onMounted(() => {
  getAllGames();
});

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

</template>

<style scoped lang="scss"></style>
