<script setup>
import { AppState } from "@/AppState.js";
import { reviewsService } from "@/services/ReviewsService.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";

onMounted(() => {
  getAllReviews()
})

const reviews = computed(() => AppState.reviews)


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
  <div class="container">

    <section class="row">
      <div class="col-md-12">
        <div class="d-flex align-items-center profile-banner-img mt-5 mb-3">
          <div>
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img ms-3" alt="">
          </div>
          <div class="mx-3 fw-bold fs-1">
            Profile Name
          </div>
        </div>
      </div>
    </section>

    <section class="row">

      <div class="col-md-12">
        <div class="bg-text p-3 m-3">
          <div class="fs-1 fw-bold">BIO</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam laudantium nihil ex quis cumque
            sed sint illo possimus voluptates reiciendis, omnis dolore dolorem aut ipsum laborum alias libero nisi.
          </div>
        </div>
      </div>

    </section>

    <section class="row">

      <div class="col-md-12 mt-5 mb-3">
        <div class="fs-3 fw-bold text-shadow text-light">MY PINNED REVIEWS</div>

        <section class="row bg-text">

          <div v-for="reviews in reviews" :key="reviews.id" class="col-md-4">
            <ReviewCard :reviews="reviews" />
          </div>

        </section>

      </div>

    </section>

    <section class="row">

      <div class="col-md-12 mt-5 mb-5">
        <div class="fs-3 fw-bold text-shadow text-light">MY ALPHA REVIEWS</div>

        <section class="row bg-text">

          <div v-for="reviews in reviews" :key="reviews.id" class="col-md-4">
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
}

.bg-text {
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
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