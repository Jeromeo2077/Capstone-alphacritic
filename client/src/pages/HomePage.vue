<script setup>
import { AppState } from "@/AppState.js";
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
  <div class="container">
    <section class="row">
      <div class="col-md-12">
        <span class="fs-1 fw-bold text-shadow text-light">WELCOME TO THE FRONT LINES</span>
      </div>
    </section>
    <section class="row">
      <div class="col-md-12 mt-5">
        <div class="bg-text p-3">
          <div class="fw-bold fs-4 text-shadow text-light">
            NEWEST ALPHA SCORES
          </div>
          <section class="row">
            <div class="col-md-3 text-scale-down">
              <div class="bg-text my-3 p-3">
                <div class="d-flex justify-content-between align-items-center">
                  <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img" alt="">
                  <div class="alphaScore-bg text-center">
                    <span class="fs-3 fw-bold">8</span>
                  </div>
                </div>
                <div class="text-center mt-2 fw-bold">
                  <span class="text-decoration-underline">THIS IS ALPHA</span>
                </div>
                <p class="text-small mt-1">{{ reviews }}</p>
                <div>October 1, 2024</div>
              </div>
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
            <div class="col-md-3 text-scale-down">
              <div class="bg-text my-3 p-3">
                <div class="d-flex justify-content-between align-items-center">
                  <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img" alt="">
                  <div class="alphaScore-bg text-center">
                    <span class="fs-3 fw-bold">8</span>
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

.text-shadow {
  text-shadow: 1px 1px 3px black
}

.bg-text {
  background-color: rgba(0, 0, 0, 0.25);
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
