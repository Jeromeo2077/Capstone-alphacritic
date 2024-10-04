import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Review } from "@/models/Review.js"
import { AppState } from "@/AppState.js"

class ReviewsService {
  // async createReview(reviewData) {
  //   const response = await api.post('api/reviews', reviewData)
  //   logger.log('Created Review!', response.data)
  //   const newReview = new Review(response.data)
  //   AppState.reviews.push(newReview)
  //   return newReview
  // }

}


export const reviewsService = new ReviewsService()