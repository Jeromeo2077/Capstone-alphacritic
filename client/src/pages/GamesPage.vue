<script setup>
import { AppState } from '@/AppState.js';
import { gamesService } from '@/services/GamesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

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


async function getGameById(gameID) {
  try {
    await gamesService.getGameById(gameID);
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>

  <div class="container-fluid">
    <div class="row p-3">
      <h2>Popular Games</h2>
      <div v-for="game in games" :key="game.id" class="col-6 col-md-3 g-3 d-flex align-items-stretch">
        <RouterLink :to="{ name: 'GameDetails', params: { gameId: game.id } }">
          <div class="card">
            <img :src="game.background_image" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title caudex-bold">{{ game.name }}</h5>
              <p class="card-text">Release Date: {{ game.released }}</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>