import { dbContext } from "../db/DbContext.js"

class ReviewsService {

  async getAllReviews() {
    const reviews = await dbContext.Review.find()
    return reviews
  }


  async getReviewByReviewId(reviewId) {
    const review = (await dbContext.Review.findById(reviewId)).populate('creator')
    return review
  }


  async getReviewByGameId(gameId) {
    const review = (await dbContext.Review.findById(gameId)).populate('creator')
    return review
  }


  async getReviewByCreatorId(creatorId) {
    const review = await dbContext.Review.findById(creatorId)
    return review
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