<script setup>
import { AppState } from '@/AppState.js';
import GameCard from "@/components/globals/GameCard.vue";
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

  <div class="container">
    <div class="row">

      <!-- SECTION buttons -->
      <div class="d-flex justify-content-around align-items-center mt-5">
        <div v-for="genre in filterCategories" :key="genre.text">
          <button @click.prevent="getGameByGenre(genre.text)" class="rounded genre-buttons text-uppercase"
            type="button">{{
              genre.text
            }}</button>
        </div>
      </div>



      <!-- SECTION Game Card  -->
      <div v-for="filteredGame in games" :key="filteredGame.id"
        class="col-12 col-md-6 col-lg-3 g-3 d-flex align-items-stretch">
        <RouterLink :to="{ name: 'GameDetails', params: { gameId: filteredGame.id } }">
          <GameCard :game="filteredGame" />
        </RouterLink>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.genre-buttons {
  background-color: #BB0A0A;
  font-weight: bolder;
  box-shadow: 1px 2px 2px black;
  width: 25dvh;
}

.bg-text {
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
}

.text-shadow {
  text-shadow: 1px 1px 5px black
}
</style>