<script setup>
import { Review } from "@/models/Review.js";


defineProps({ reviews: { type: Review, required: true } })

</script>


<template>

  <RouterLink :to="{
    name: 'ReviewDetails', params: { reviewId: reviews.id }
  }">

    <div class="bg-text selectable my-3 p-3 text-style">
      <div class="d-flex justify-content-between align-items-center">
        <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img" alt="">
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
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
}

.profile-img {
  height: 5dvh;
  width: 5dvh;
  border-radius: 5dvh;
}

.alphaScore-bg {
  background-color: #BB0A0A;
  height: 5dvh;
  width: 5dvh;
}
</style>