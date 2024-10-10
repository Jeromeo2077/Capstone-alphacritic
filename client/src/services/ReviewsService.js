import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Review } from "@/models/Review.js"
import { AppState } from "@/AppState.js"
import Pop from "@/utils/Pop.js"
import App from "@/App.vue"


class ReviewsService {
  
  
  async getReviewsByGameId(gameId) {
    const response = await api.get(`api/reviews?gameId=${gameId}`)
    logger.log('getting reviews by game ID', response.data)
    const gameReviews = response.data.map(review => new Review(review))
    
    AppState.gameReviews = gameReviews
    return gameReviews
  }
  
  async getReviewByReviewId(reviewId) {
    const response = await api.get(`api/reviews/${reviewId}`, reviewId)
    logger.log('getting review by Id', response.data)
    AppState.activeReview = new Review(response.data)
  }
  
  async getAllReviews() {
    const response = await api.get('api/reviews')
    const reviews = response.data.map(reviewData => new Review(reviewData))
    logger.log('getting all reviews', response.data)
    AppState.reviews = reviews
  }
  
  async createReview(reviewData) {
    const response = await api.post('api/reviews/create', reviewData)
    logger.log('Created Review!', response.data)
    const newReview = new Review(response.data)
    AppState.reviews.push(newReview)
    return newReview
  }

  async deleteReview(reviewId) {
    try {
      const fullReview = await this.getReviewByReviewId(reviewId)
      logger.log('full review log', fullReview)
      logger.log('deleting review for ID', reviewId)
      
      const indexToDelete = AppState.gameReviews.findIndex(review => review.id == reviewId)
      const response = await api.delete(`api/reviews/${reviewId}`)
      logger.log(`requesting delete`, response.data, reviewId)
      AppState.gameReviews.splice(indexToDelete, 1)
      
    }
    catch (error) {
      Pop.error(error);
    }
  }
  
  async publishReview(reviewId) {
    AppState.activeReview.isPublished = !AppState.activeReview.isPublished
    const reviewToPublish = AppState.activeReview
        
    await api.put(`api/reviews/${reviewId}`, reviewToPublish)

    return `Review ${reviewToPublish.isPublished ? 'Published' : 'Unpublished'}!`
  }
}


export const reviewsService = new ReviewsService()