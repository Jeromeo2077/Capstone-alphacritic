import { dbContext } from "../db/DbContext.js"

class ReviewsService {

  async getAllReviews(query) {
    const reviews = await dbContext.Review.find(query).populate('creator')
    return reviews
  }


  async getReviewByReviewId(reviewId) {
    const reviewByReviewId = (await dbContext.Review.findById(reviewId)).populate('creator')
    return reviewByReviewId
  }


  async createReview(reviewData) {
    const review = await dbContext.Review.create(reviewData)
    await review.populate('creator')
    return review
  }


  deleteReview(reviewId) {
    throw new Error("Method not implemented.")
  }
}

export const reviewsService = new ReviewsService()