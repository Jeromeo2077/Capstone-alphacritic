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


  async deleteReview(reviewId, userInfo) {
    const reviewToBeDeleted = await dbContext.Review.findById(reviewId)

    if (userInfo.id != reviewToBeDeleted.creatorId) {
      throw new Error('Unauthorized')
    }
    await reviewToBeDeleted.deleteOne()
    return `Review titled: ${reviewToBeDeleted.title} has been deleted!`
  }
}
export const reviewsService = new ReviewsService()