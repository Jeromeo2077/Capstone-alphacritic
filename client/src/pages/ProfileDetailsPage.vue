<script setup>
import { AppState } from "@/AppState.js";
import { profilesService } from "@/services/ProfilesService.js";
import { reviewsService } from "@/services/ReviewsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()

onMounted(() => {
  getReviewsByCreatorId()
})

watch(() => route.params.profileId, () => {
  getAllReviews()
  getProfileById()

}, { immediate: true })

const reviews = computed(() => AppState.reviews)
const profile = computed(() => AppState.activeProfile)

const account = computed(() => AppState.account)



async function getReviewsByCreatorId() {
  try {
    const profileId = route.params.profileId
    await reviewsService.getReviewsByCreatorId(profileId)
  }
  catch (error) {
    Pop.error(error)
    logger.error(error)
  }
}

async function getProfileById() {
  try {

    const profileId = route.params.profileId
    logger.log('getting profile id from url', profileId)
    await profilesService.getProfileById(profileId)
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getReviewsByProfileId() {

}

async function getAllReviews() {
  try {
    await reviewsService.getAllReviews()
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div v-if="profile" class="container">

    <section class="row">
      <div class="col-md-12">
        <div class="d-flex align-items-center profile-banner-img mt-5 mb-3">
          <div>
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img ms-3" alt="">
          </div>
          <div class="mx-3 fw-bold fs-1">
            {{ profile.name }}

          </div>
        </div>
      </div>
    </section>

    <section class="row">

      <div class="col-md-12">
        <div class="bg-text text-light text-shadow p-3 m-3">
          <div class="fs-1 fw-bold">BIO</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam laudantium nihil ex quis cumque
            sed sint illo possimus voluptates reiciendis, omnis dolore dolorem aut ipsum laborum alias libero nisi.
          </div>
        </div>
      </div>

    </section>

    <section class="row">

      <div class="col-md-12 mt-5">
        <div class="fs-3 fw-bold text-shadow text-light">MY PINNED REVIEWS</div>

        <section class="row bg-text m-3 p-3">

          <div v-for="reviews in reviews" :key="reviews.id" class="col-md-4 g-3">
            <ReviewCard :reviews="reviews" />
          </div>

        </section>

      </div>

    </section>

    <section class="row">

      <div class="col-md-12 mt-5 mb-5">
        <div class="fs-3 fw-bold text-shadow text-light">MY ALPHA REVIEWS</div>

        <section class="row bg-text m-3 p-3">

          <div v-for="reviews in reviews" :key="reviews.id" class="col-md-4 g-3">
            <ReviewCard :reviews="reviews" />
          </div>

        </section>

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
  height: 15dvh;
  width: 100%;
  background-color: #bb0a0a;
  border-radius: .5rem;
}

.bg-text {
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  border-radius: .5rem;
}

.text-shadow {
  text-shadow: 1px 1px 3px black
}

.alphaScore-bg {
  background-color: #BB0A0A;
  height: 5dvh;
  width: 5dvh;
}
</style>