import { dbContext } from "../db/DbContext.js"

class ReviewsService {

  async createReview(reviewData) {
    const review = await dbContext.Review.create(reviewData)
    await review.populate('creator')
    return review
  }

}

export const reviewsService = new ReviewsService()