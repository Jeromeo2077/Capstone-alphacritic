<script setup>
import { reviewsService } from "@/services/ReviewsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { ref } from "vue";





const editableReviewData = ref({
  title: '',
  body: '',
  gameplayScore: 0,
  storyScore: 0,
  graphicsScore: 0,
  alphaScore: 0,
  alphaScoreAggregate: 0,

})
function calcAlpha() {
  try {
    const alphaScoreData = editableReviewData.value

    let alphaScoreAggregate = Number(alphaScoreData.storyScore) + Number(alphaScoreData.alphaScore) + Number(alphaScoreData.gameplayScore) + Number(alphaScoreData.graphicsScore)
    alphaScoreAggregate = alphaScoreAggregate / 4
    logger.log(alphaScoreData.storyScore, alphaScoreData.alphaScore, alphaScoreData.gameplayScore, alphaScoreData.graphicsScore, alphaScoreAggregate)
    return alphaScoreAggregate

  }
  catch (error) {
    Pop.error(error);
  }
}

async function createReview() {
  try {

    const reviewData = editableReviewData.value
    reviewData.alphaScoreAggregate = calcAlpha()
    const createdReview = await reviewsService.createReview(reviewData)
    editableReviewData.value = {
      title: '',
      body: '',
      gameplayScore: 0,
      storyScore: 0,
      graphicsScore: 0,
      alphaScore: 0,
      alphaScoreAggregate: 0,
    }
    logger.log('you created a review!', createdReview)


  }
  catch (error) {
    Pop.meow(error)
    Pop.error(error);
  }


}





</script>


<template>
  <h1>This is the create review form page</h1>

  <div class="col-6">
    <form @submit.prevent="createReview">
      <div class="mb-3">
        <label class="form-label" for="title">Review Title</label>
        <input v-model="editableReviewData.title" class="form-control" id="title" name="title" type="text" required
          minlength="3" maxlength="50" placeholder="Title your review">
      </div>
      <label class="form-label" for="gameplay-score">Gameplay Score</label>
      <select v-model="editableReviewData.gameplayscore" class="form-select" name="gameplay-score" id="gameplay-score"
        placeholder="Gameplay Score" min="1" max="10" required>Gameplay Score
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label class="form-label" for="story-score">Story Score</label>
      <select v-model="editableReviewData.storyscore" class="form-select" name="story-score" id="story-score" min="1"
        max="10" required>Story Score
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label class="form-label" for="graphics-score">Graphics Score</label>
      <select v-model="editableReviewData.graphicsscore" class="form-select" name="graphics-score" id="graphics-score"
        min="1" max="10" required>Graphics Score
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label class="form-label" for="alpha-score">Alpha Score</label>
      <select v-model="editableReviewData.alphascore" class="form-select" name="alpha-score" id="alpha-score" min="1"
        max="10" required>Alpha Score
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label class="form-label" for="body">Review Body</label>
      <textarea v-model="editableReviewData.body" rows="25" class="w-100 form-control" name="body" maxlength="5000"
        minlength="3" id="body" type="text"
        required>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dignissimos vel cumque libero nesciunt tempore nemo quam, fugit esse dolorum aut veritatis laudantium tempora architecto veniam, quidem eveniet quas deserunt, nam repellendus! Quaerat aut voluptatem praesentium ea error ipsum quidem tempora tenetur! Ut exercitationem officia aliquam minima, harum culpa accusantium.</textarea>
      <button @submit.prevent="createReview" class="save-button">Save Review</button>
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