<script setup>
import { AppState } from '@/AppState.js';
import { gamesService } from '@/services/GamesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

onMounted(() => {
  getAllGames();
});



const filterBy = ref('all')

const games = computed(() => {
  if (filterBy.value == 'all') {
    return AppState.games
  }
  return AppState.games.filter(game => game.genres == filterBy.value)
})

const filterCategories = [
  { text: 'all' },
  { text: 'indie' },
  { text: 'shooter' },
  { text: 'strategy' },
  { text: 'platformer' },
  { text: 'action' },
  { text: 'adventure' }
]




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

async function getGameByGenre(genre) {
  try {
    if (genre == 'all') { getAllGames() }
    else { await gamesService.getGameByGenre(genre) }
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
      <div class="d-flex justify-content-around align-items-center">
        <div v-for="genre in filterCategories" :key="genre.text">
          <button @click.prevent="getGameByGenre(genre.text)" class="rounded" type="button">{{ genre.text }}</button>
        </div>
      </div>




      <div v-for="filteredGame in games" :key="filteredGame.id" class="col-6 col-md-3 g-3 d-flex align-items-stretch">
        <RouterLink :to="{ name: 'GameDetails', params: { gameId: filteredGame.id } }">
          <div class="card">
            <img :src="filteredGame.background_image" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title caudex-bold">{{ filteredGame.name }}</h5>
              <p class="card-text">Release Date: {{ filteredGame.released }}</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.genre-buttons {
  color: #BB0A0A
}
</style>