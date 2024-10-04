<script setup>
import { AppState } from "@/AppState.js";
import { gamesService } from "@/services/GamesService.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const game = computed(() => AppState.activeGame)

const review = computed(() => AppState.reviews)

onMounted(() => {
  getGameById()
})

onUnmounted(() => {
  AppState.activeGame = null
})

async function getGameById() {
  try {
    await gamesService.getGameById(route.params.gameId);
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div class="container" v-if="game">
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
              <span class="text-small">Based on X number of user reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-md-12">
        <RouterLink :to="{ name: 'CreateReview', params: { gameId: game.id } }">
          <button class="create-btn selectable my-3">CREATE ALPHA REVIEW</button>
        </RouterLink>
      </div>
    </section>
    <section class="row">
      <div class="col-md-12 text-center">
        <h1 class="fw-bold text-decoration-underline">ALPHA REVIEWS</h1>
        <h3 class="fw-bold">THE FRONT LINES</h3>
      </div>
    </section>
    <section class="row">
      <div class="col-md-4">
        <div class="my-3 bg-text p-2">
          <div class="d-flex justify-content-between align-items-center">
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img" alt="">
            <div class="alphaScore-bg text-center">
              <span class="fs-1 fw-bold">8</span>
            </div>
          </div>
          <div class="text-center mt-2 fw-bold">
            <span class="text-decoration-underline">THIS IS ALPHA</span>
          </div>
          <p class="text-small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque obcaecati
            voluptate
            doloribus nostrum
            necessitatibus, nesciunt quisquam, eius tenetur debitis in officiis.</p>
          <div>October 1, 2024</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="my-3 bg-text p-2">
          <div class="d-flex justify-content-between align-items-center">
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img" alt="">
            <div class="alphaScore-bg text-center">
              <span class="fs-1 fw-bold">8</span>
            </div>
          </div>
          <div class="text-center mt-2 fw-bold">
            <span class="text-decoration-underline">THIS IS ALPHA</span>
          </div>
          <p class="text-small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque obcaecati
            voluptate
            doloribus nostrum
            necessitatibus, nesciunt quisquam, eius tenetur debitis in officiis.</p>
          <div>October 1, 2024</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="my-3 bg-text p-2">
          <div class="d-flex justify-content-between align-items-center">
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img" alt="">
            <div class="alphaScore-bg text-center">
              <span class="fs-1 fw-bold">8</span>
            </div>
          </div>
          <div class="text-center mt-2 fw-bold">
            <span class="text-decoration-underline">THIS IS ALPHA</span>
          </div>
          <p class="text-small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque obcaecati
            voluptate
            doloribus nostrum
            necessitatibus, nesciunt quisquam, eius tenetur debitis in officiis.</p>
          <div>October 1, 2024</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="my-3 bg-text p-2">
          <div class="d-flex justify-content-between align-items-center">
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img" alt="">
            <div class="alphaScore-bg text-center">
              <span class="fs-1 fw-bold">8</span>
            </div>
          </div>
          <div class="text-center mt-2 fw-bold">
            <span class="text-decoration-underline">THIS IS ALPHA</span>
          </div>
          <p class="text-small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque obcaecati
            voluptate
            doloribus nostrum
            necessitatibus, nesciunt quisquam, eius tenetur debitis in officiis.</p>
          <div>October 1, 2024</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="my-3 bg-text p-2">
          <div class="d-flex justify-content-between align-items-center">
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img" alt="">
            <div class="alphaScore-bg text-center">
              <span class="fs-1 fw-bold">8</span>
            </div>
          </div>
          <div class="text-center mt-2 fw-bold">
            <span class="text-decoration-underline">THIS IS ALPHA</span>
          </div>
          <p class="text-small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque obcaecati
            voluptate
            doloribus nostrum
            necessitatibus, nesciunt quisquam, eius tenetur debitis in officiis.</p>
          <div>October 1, 2024</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="my-3 bg-text p-2">
          <div class="d-flex justify-content-between align-items-center">
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img" alt="">
            <div class="alphaScore-bg text-center">
              <span class="fs-1 fw-bold">8</span>
            </div>
          </div>
          <div class="text-center mt-2 fw-bold">
            <span class="text-decoration-underline">THIS IS ALPHA</span>
          </div>
          <p class="text-small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque obcaecati
            voluptate
            doloribus nostrum
            necessitatibus, nesciunt quisquam, eius tenetur debitis in officiis.</p>
          <div>October 1, 2024</div>
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
  background-color: rgba(0, 0, 0, 0.25);
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