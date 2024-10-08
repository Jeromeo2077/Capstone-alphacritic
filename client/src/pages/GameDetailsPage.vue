<script setup>
import { AppState } from "@/AppState.js";
import { gamesService } from "@/services/GamesService.js";
import { reviewsService } from "@/services/ReviewsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const isAccount = computed(() => AppState.account)

const route = useRoute()

const game = computed(() => AppState.activeGame)

const reviews = computed(() => {

  return AppState.gameReviews.filter(review => review.gameId === game.value.id);
})

onMounted(() => {
  getGameById()

  getReviewsByGameId()
})

onUnmounted(() => {
  AppState.activeGame = null
})

async function getGameById() {
  try {
    await gamesService.getGameById(route.params.gameId)
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getReviewsByGameId() {
  try {
    const reviews = await reviewsService.getReviewsByGameId(route.params.gameId)
    logger.log('getting reviews for this game', reviews)
    AppState.gameReviews = reviews
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div class="container-fluid" v-if="game">
    <section class="row">
      <div class="col-md-7 mt-5">
        <img :src="game.background_image" class="img-fluid cover-img" alt="">
      </div>
      <div class="col-md-5 mt-5">
        <div class="bg-text pb-3 px-3">
          <div class="d-flex flex-column">
            <span class="fs-4 fw-bold">{{ game.name }}</span>
            <span>Released on: {{ game.released }}</span>
            <p class="text-small mt-2">{{ game.description }}</p>
          </div>
          <div>
            <div class="d-flex justify-content-between">
              <span class="fs-4 fw-bold">APLHASCORE: </span>
              <div class="alphaScore-bg text-center">
                <span class="fs-1 fw-bold">8</span>
              </div>
            </div>
            <div class="mt-3">
              <span class="text-small">Based on {{ reviews.length }} user reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row">
      <div class="col-md-12">
        <div v-if="isAccount">
          <RouterLink :to="{ name: 'CreateReview', params: { gameId: game.id } }">
            <button class="create-btn selectable my-3">CREATE ALPHA REVIEW</button>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="row">
      <div class="col-md-12 text-center">
        <h1 class="fw-bold text-decoration-underline m-3">ALPHA REVIEWS</h1>
        <h3 class="fw-bold">THE FRONT LINES</h3>
      </div>
    </section>

    <section class="row">
      <div v-for="reviews in reviews" :key="reviews.id" class="col-md-4">
        <div class="text-scale-down">
          <ReviewCard :reviews="reviews" />
        </div>
      </div>

    </section>
  </div>
  <div v-else>loading.........</div>
</template>


<style lang="scss" scoped>
.cover-img {
  height: 50dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.alphaScore-bg {
  background-color: #BB0A0A;
  height: 10dvh;
  width: 10dvh;
}

.bg-text {
  max-height: 50dvh;
  background-color: rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.create-btn {
  height: 10dvh;
  width: 100%;
  background-color: #BB0A0A;
  color: white;
  text-shadow: 1px 1px 3px black;
  border: none;
}

.profile-img {
  height: 10dvh;
  width: 10dvh;
  border-radius: 5dvh;
}

.text-small {
  font-size: small;
}
</style>