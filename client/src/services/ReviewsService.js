import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Review } from "@/models/Review.js"
import { AppState } from "@/AppState.js"

class ReviewsService {

  // FIXME
  async getReviewsByGameId(gameId) {
    const response = await api.get(`api/reviews/${gameId}`, gameId)
    logger.log('getting reviews by game ID', response)
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
    const response = await api.post('api/reviews', reviewData)
    logger.log('Created Review!', response.data)
    const newReview = new Review(response.data)
    AppState.reviews.push(newReview)
    return newReview
  }

}


export const reviewsService = new ReviewsService()