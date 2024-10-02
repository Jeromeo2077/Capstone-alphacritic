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
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="p-3">Alphacritic is a community-driven game review site where gamers can congregate to find
          information on games
          popular with other gamers, leave their own game reviews, and chat/discuss/share memes/flame war with other
          gamers!Grab your sword and shield and meet us for battle on the front lines of gamer wars!</p>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row">
      <h2>Popular Games</h2>
      <div v-for="game in games" :key="game.id" class="col-6 col-md-3 g-3 d-flex align-items-stretch">
        <div class="card">
          <img :src="game.background_image" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title caudex-bold">{{ game.name }}</h5>
            <p class="card-text">Release Date: {{ game.released }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">
.caudex-regular {
  font-family: "Caudex", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
