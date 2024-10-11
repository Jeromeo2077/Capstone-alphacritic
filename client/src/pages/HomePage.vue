<script setup>
import { AppState } from "@/AppState.js";
import ReviewCard from "@/components/globals/ReviewCard.vue";
import { reviewsService } from "@/services/ReviewsService.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";

onMounted(() => {
  getAllReviews()
})

// eslint-disable-next-line no-unused-vars
const reviews = computed(() => AppState.reviews)




// async function getReviewByReviewId(){
//  try {

//  }
//  catch (error){
//    Pop.error(error);
//  } 
// }

async function getAllReviews() {
  try {

    await reviewsService.getAllPublishedReviews()
  }
  catch (error) {
    Pop.error(error);
  }
}


</script>

<template>
  <!-- SUP JEROME -->
  <div class="container">
    <section class="row">

      <div class="col-md-12">
        <div class="fs-1 fw-bold text-shadow text-light text-center mt-5">WELCOME TO THE FRONT LINES</div>
      </div>

    </section>
    <section class="row">

      <div class="col-md-12 mt-3">
        <div class="">
          <div class="fw-bold fs-3 text-shadow text-light mb-3">
            NEWEST ALPHA SCORES
          </div>
          <section class="row bg-text p-3">

            <div v-for="reviews in reviews" :key="reviews.id" class="col-lg-3 g-3">
              <ReviewCard :reviews="reviews" />
            </div>

          </section>
        </div>
      </div>

    </section>


    <section class="row">

      <div class="col-md-12 mt-5 mb-5">
        <div class="">
          <div class="fw-bold fs-3 text-shadow text-light mb-3">
            HIGHEST ALPHA SCORES
          </div>

          <section class="row bg-text p-3">

            <div v-for="reviews in reviews" :key="reviews.id" class="col-lg-3 g-3">
              <ReviewCard :reviews="reviews" />
            </div>
          </section>
        </div>
      </div>

    </section>

  </div>




</template>

<style scoped lang="scss">
.caudex-regular {
  font-family: "Caudex", serif;
  font-weight: 400;
  font-style: normal;
}

.text-shadow {
  text-shadow: 1px 1px 5px black
}

.bg-text {
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
}
</style>
