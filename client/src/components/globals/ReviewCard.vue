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

    <div class="bg-text selectable p-3">
      <div class="d-flex justify-content-between align-items-center">
        <RouterLink :to="{ name: 'Profile', params: { profileId: reviews.creator.id } }">
          <img :src="reviews.creator.picture" class="profile-img" alt="">
        </RouterLink>
        <span class="fs-4 text-decoration-underline p-3">{{ reviews.title }}</span>
        <div class="d-flex justify-content-around align-items-center text-center alphaScore-bg">
          <span class="fs-3 fw-bold">{{ reviews.alphaScoreAggregate }}</span>
        </div>
      </div>
      <p class="mt-1">{{ reviews.body }}</p>
      <div>{{ reviews.createdAt }}</div>
    </div>

  </RouterLink>

</template>


<style lang="scss" scoped>
.bg-text {
  height: 30dvh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 1rem;
  color: white;
}

.profile-img {
  max-height: 8dvh;
  max-width: 8dvh;
  border-radius: 5dvh;
}

.alphaScore-bg {
  background-color: #BB0A0A;
  border-radius: .5rem;
  min-width: 8dvh;
  min-height: 8dvh;
}
</style>