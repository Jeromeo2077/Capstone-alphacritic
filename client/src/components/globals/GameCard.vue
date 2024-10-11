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
    <div class="card game-card bg-text text-light text-shadow mt-3">
      <img :src="game.background_image" class="card-img-top img-fluid game-card-image" alt="...">
      <div class="card-body">
        <h5 class="card-title caudex-bold fs-6 text-center">{{ game.name }}</h5>
        <p class="card-text fs-6 text-center">Release Date: {{ game.released }}</p>
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
  width: 450px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.text-shadow {
  text-shadow: 1px 1px 5px black
}

.bg-text {
  background-color: rgba(187, 10, 10, 0.75);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
}
</style>