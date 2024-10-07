import { dbContext } from "../db/DbContext.js"

class ReviewsService {

  async getAllReviews() {
    const reviews = await dbContext.Review.find()
    return reviews
  }


  async getReviewByReviewId(reviewId) {
    const reviewByReviewId = (await dbContext.Review.findById(reviewId)).populate('creator')
    return reviewByReviewId
  }


  async getReviewByGameId(gameId) {
    const reviewsByGameId = await dbContext.Review.find({ gameId: gameId })
    return reviewsByGameId
  }


  async getReviewByCreatorId(creatorId) {
    const reviews = await dbContext.Review.findById(creatorId)
    return reviews
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