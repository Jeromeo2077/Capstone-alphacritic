import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { reviewsService } from "../services/ReviewsService.js";

export class ReviewsController extends BaseController {
  constructor() {
    super("api/reviews");
    this.router
      .get("", this.getAllReviews)
      .get("/:reviewId", this.getReviewById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createReview)
      .delete("/:reviewId", this.deleteReview);
  }

  async getAllReviews(request, response, next) {
    try {
      // REVIEW this is the service function that gets all the reviews

    } catch (error) {
      next(error);
    }
  }

  async getReviewById(request, respond, next) {
    try {
      // REVIEW this is the service function that gets a review by its id

    } catch (error) {
      next(error);
    }
  }

  async createReview(request, response, next) {
    try {
      const reviewData = request.body;
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
      // REVIEW this is the service function that deletes a review

    } catch (error) {
      next(error);
    }
  }
}