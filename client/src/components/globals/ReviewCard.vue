<script setup>

import { AppState } from "@/AppState.js";
import { Review } from "@/models/Review.js";
import { computed } from "vue";



defineProps({ reviews: { type: Review, required: true } })




</script>


<template>

  <RouterLink :to="{
    name: 'ReviewDetails', params: { reviewId: reviews.id }
  }">

    <div class="bg-text selectable my-3 p-3 text-style">
      <div class="d-flex justify-content-between align-items-center">
        <RouterLink :to="{ name: 'Profile', params: { profileId: reviews.creator.id } }">
          <img :src="reviews.creator.picture" class="profile-img" alt="">
        </RouterLink>
        <div class="alphaScore-bg text-center">
          <span class="fs-3 fw-bold">{{ reviews.alphaScoreAggregate }}</span>
        </div>
      </div>
      <div class="text-center mt-2 fw-bold">
        <span class="text-decoration-underline">{{ reviews.title }}</span>
      </div>
      <p class="mt-1">{{ reviews.body }}</p>
      <div>{{ reviews.createdAt }}</div>
    </div>

  </RouterLink>

</template>


<style lang="scss" scoped>
.text-style {
  color: black;
}

.bg-text {
  max-height: 50dvh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 1rem;
  color: white;
}

.profile-img {
  height: 10dvh;
  width: 10dvh;
  border-radius: 5dvh;
}

.alphaScore-bg {
  background-color: #BB0A0A;
  height: 5dvh;
  width: 5dvh;
  border-radius: .5rem;
}
</style>