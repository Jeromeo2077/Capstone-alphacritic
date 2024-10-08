import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { reviewsService } from "../services/ReviewsService.js";

export class ReviewsController extends BaseController {
  constructor() {
    super("api/reviews");
    this.router
      .get("", this.getAllReviews)
      .get("/:reviewId", this.getReviewByReviewId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createReview)
      .delete("/:reviewId", this.deleteReview)
      .put("/:reviewId/publish", this.publishReview)


  }

  async getAllReviews(request, response, next) {
    try {
      const query = request.query
      const reviews = await reviewsService.getAllReviews(query)
      response.send(reviews)

    } catch (error) {
      next(error);
    }
  }

  async getReviewByReviewId(request, respond, next) {
    try {
      const reviewByReviewId = await reviewsService.getReviewByReviewId(request.params.reviewId)
      respond.send(reviewByReviewId)

    } catch (error) {
      next(error);
    }
  }


  async createReview(request, response, next) {
    try {
      const reviewData = await request.body;
      const userInfo = request.userInfo;
      reviewData.creatorId = userInfo.id;
      const review = await reviewsService.createReview(reviewData);
      response.send(review);
    } catch (error) {
      next(error);
    }
  }


  async deleteReview(request, respond, next) {
    try {
      const reviewToBeDeleted = await reviewsService.deleteReview(request.params.reviewId)
      respond.send(reviewToBeDeleted)
    } catch (error) {
      next(error);
    }
  }


  async publishReview(request, respond, next) {
    try {
      // REVIEW this is the service function that publishes a review

    } catch (error) {
      next(error);
    }
  }
}