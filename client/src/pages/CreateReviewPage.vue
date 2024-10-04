<script setup>
import { reviewsService } from "@/services/ReviewsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { ref } from "vue";




// const editableReviewData = ref({
//   title: '',
//   body: '',
//   gameplayscore: '',
//   storyscore: '',
//   alphascore: '',
// })

// async function createReview() {
//   try {
//     const reviewData = editableReviewData.value
//     const createdReview = await reviewsService.createReview(reviewData)
//     logger.log('you created a review!')

//   }
//   catch (error) {
//     Pop.meow(error)
//     Pop.error(error);
//   }


// }





</script>


<template>
  <h1>This is the create review form page</h1>

  <div class="col-12">
    <form @submit.prevent="">
      <div class="mb-3">
        <label class="form-label" for="title">Review Title</label>
        <input class="form-control" id="title" name="title" type="text" required minlength="3" maxlength="50"
          placeholder="Title your review">
      </div>
      <select name="gameplay-score" id="gameplay-score">Gameplay Score
        <option value="">
          Gameplay Score Options
        </option>
      </select>
      <select name="story-score" id="story-score">Story Score
        <option value="">
          Story Score Options
        </option>
      </select>
      <select name="graphics-score" id="graphics-score">Graphics Score
        <option value="">
          Graphics Score Options
        </option>
      </select>
      <select name="alpha-score" id="alpha-score">Alpha Score
        <option value="">
          Alpha Score Options
        </option>
      </select>
      <textarea name="body"
        id="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dignissimos vel cumque libero nesciunt tempore nemo quam, fugit esse dolorum aut veritatis laudantium tempora architecto veniam, quidem eveniet quas deserunt, nam repellendus! Quaerat aut voluptatem praesentium ea error ipsum quidem tempora tenetur! Ut exercitationem officia aliquam minima, harum culpa accusantium.</textarea>
      <button class="save-button">Save Review</button>
      <button class="publish-button">Publish Review</button>



    </form>



  </div>


</template>


<style lang="scss" scoped>
.publish-button {
  background-color: #BB0A0A;
  font-weight: bolder;
  box-shadow: 1px 2px 2px black;
}


.save-button {
  background-color: #D9D9D9;
  font-weight: bolder;
  box-shadow: 1px 2px 2px black;
}
</style>