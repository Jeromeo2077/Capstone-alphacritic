<script setup>
import { AppState } from "@/AppState.js";
import ReviewCard from "@/components/globals/ReviewCard.vue";
import { reviewsService } from "@/services/ReviewsService.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";

onMounted(() => {
  getAllReviews()
})

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

    await reviewsService.getAllReviews()
  }
  catch (error) {
    Pop.error(error);
  }
}


</script>

<template>
  <!-- SUP JEROME -->
  <div class="container-fluid hero-img">
    <section class="row">
      <div class="col-md-12">
        <div class="fs-1 fw-bold text-shadow text-light text-center mt-5">WELCOME TO THE FRONT LINES</div>
      </div>
    </section>
    <section class="row">
      <div class="col-md-12 mt-5">
        <div class="bg-text p-3">
          <div class="fw-bold fs-4 text-shadow text-light">
            NEWEST ALPHA SCORES
          </div>
          <section class="row">
            <div v-for="reviews in reviews" :key="reviews.id" class="col-md-3 text-scale-down">
              <ReviewCard :reviews="reviews" />
            </div>
          </section>
        </div>
      </div>
    </section>


    <section class="row">
      <div class="col-md-12 mt-5">
        <div class="bg-text p-3">
          <div class="fw-bold fs-4 text-shadow text-light">
            HIGHEST APLHA SCORES
          </div>

          <section class="row">

            <div v-for="reviews in reviews" :key="reviews.id" class="col-md-3 text-scale-down">
              <ReviewCard :reviews="reviews" />
            </div>
          </section>
        </div>
      </div>
    </section>




    <!-- <div class="row p-3">
      <div class="col-12">
        <p>Alphacritic is a community-driven game review site where gamers can congregate to find
          information on games popular with other gamers, leave their own game reviews, and chat/discuss/share
          memes/flame war with other gamers! Grab your sword and shield and meet us for battle on the front lines of
          gamer wars!</p>
      </div>
    </div> -->
  </div>




</template>

<style scoped lang="scss">
.caudex-regular {
  font-family: "Caudex", serif;
  font-weight: 400;
  font-style: normal;
}

.hero-img {
  background-image: url("https://i.postimg.cc/W4SQb5sP/image-7.jpg");
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.text-shadow {
  text-shadow: 1px 1px 3px black
}

.bg-text {
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
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

.text-scale-down {
  font-size: .5rem;
}
</style>
