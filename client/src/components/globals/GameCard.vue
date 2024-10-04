<script setup>
import { Game } from "@/models/Game.js";
import { useRoute } from "vue-router";





const route = useRoute()

const props = defineProps({
  game: { type: Game, required: true }
})


</script>


<template>

  <RouterLink :to="{ name: 'GameDetails', params: { gameId: game.id } }">
    <div class="card game-card">
      <img :src="game.background_image" class="card-img-top img-fluid game-card-image" alt="...">
      <div class="card-body">
        <h5 class="card-title caudex-bold">{{ game.name }}</h5>
        <p class="card-text">Release Date: {{ game.released }}</p>
      </div>
    </div>
  </RouterLink>


</template>


<style lang="scss" scoped>
.game-card {
  box-shadow: 1px 2px 4px black;
}

.game-card-image {
  height: 35vh;
  object-fit: cover;
  object-position: center;
  width: 449px;
}
</style>