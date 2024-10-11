<script setup>
import { AppState } from "@/AppState.js";
import { router } from "@/router.js";
import { reviewsService } from "@/services/ReviewsService.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()

const review = computed(() => AppState.activeReview)

// const thereIsAReview = computed(() => {
//   if (review.value == null) return false
//   if (review.value != null) return true
//   return true
// })

const account = computed(() => AppState.account)

onMounted(() => {
  getReviewByReviewId()
})

async function getReviewByReviewId() {
  try {
    await reviewsService.getReviewByReviewId(route.params.reviewId)
  }
  catch (error) {
    Pop.error(error);
  }
}

async function deleteReview() {
  try {
    const reviewId = route.params.reviewId
    const confirmed = await Pop.confirm(`Are you sure you want to delete this review?`)
    if (!confirmed) { return }
    await reviewsService.deleteReview(reviewId)
    await Pop.toast(`You've deleted your review!`)
    router.push({ name: 'Home' })
  }
  catch (error) {
    Pop.error(error);
  }
}

async function publishReview() {
  try {
    const reviewId = route.params.reviewId
    const message = await reviewsService.publishReview(reviewId)
    await Pop.toast(message)
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div v-if="review" class="container">
    <section class="row">
      <div class="col-md-12">
        <div class="d-flex align-items-center profile-banner-img mt-5 mb-3">
          <div>
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img ms-3" alt="">
          </div>
          <div class="mx-3 fw-bold fs-1 text-light text-shadow">
            Profile Name
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-md-12">
        <div class="text-light text-shadow">
          <div class="d-flex flex-column">
            <span class="text-center fw-bold fs-1 mb-5">{{ review.title }}</span>
            <span class="text-center fw-bold fs-4">ALPHA SCORE</span>
            <div class="d-flex justify-content-center">
              <span class="d-flex justify-content-around align-items-center alphaScore-bg-two fs-1 fw-bold mx-3 p-2">{{
                review.alphaScoreAggregate }}</span>
            </div>
          </div>
          <div class="d-flex justify-content-around mt-5 mb-3">
            <div>
              <span class="fw-bold fs-3">STORY SCORE</span>
              <span class="alphaScore-bg fw-bold mx-3 p-2 fs-3">{{ review.storyScore }}</span>
            </div>
            <div>
              <span class="fw-bold fs-3">GAMEMPLAY SCORE</span>
              <span class="alphaScore-bg fw-bold mx-3 p-2 fs-3">{{ review.gameplayScore }}</span>
            </div>
            <div>
              <span class="fw-bold fs-3">GRAPHICS SCORE</span>
              <span class="alphaScore-bg fw-bold mx-3 p-2 fs-3">{{ review.graphicsScore }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-md-12">
        <div class="bg-text text-light text-shadow m-3">
          <p class="p-3">{{ review.body }}</p>
        </div>
      </div>
      <div v-if="account && review.creatorId == account.id">
        <button @click="deleteReview" class="m-3">Delete</button>
        <button @click="publishReview" class="m-3">Publish</button>
      </div>
    </section>
  </div>

</template>


<style lang="scss" scoped>
.profile-img {
  height: 10dvh;
  width: 10dvh;
  border-radius: 5dvh;
}

.profile-banner-img {
  height: 20dvh;
  width: 100%;
  background-color: #bb0a0a;
  border-radius: 1rem;
}

.bg-text {
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
}

.text-shadow {
  text-shadow: 1px 1px 3px black
}

.alphaScore-bg {
  background-color: #BB0A0A;
  border-radius: .5rem;
  min-width: 5dvh;
  min-height: 5dvh;
}

.alphaScore-bg-two {
  background-color: #BB0A0A;
  height: 10dvh;
  width: 10dvh;
  border-radius: .5rem;
}
</style>