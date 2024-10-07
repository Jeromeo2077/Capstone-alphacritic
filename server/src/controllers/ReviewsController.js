import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { reviewsService } from "../services/ReviewsService.js";

export class ReviewsController extends BaseController {
  constructor() {
    super("api/reviews");
    this.router
      .get("", this.getAllReviews)
      .get("/:reviewId", this.getReviewByReviewId)
      .get("/:gameId", this.getReviewByGameId)
      .get("/:creatorId", this.getReviewByCreatorId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createReview)
      .delete("/:reviewId", this.deleteReview)
      .put("/:reviewId", this.saveReview)
      .put("/:reviewId/publish", this.publishReview)


  }

  async getAllReviews(request, response, next) {
    try {
      const reviews = await reviewsService.getAllReviews()
      response.send(reviews)

    } catch (error) {
      next(error);
    }
  }

  async getReviewByReviewId(request, respond, next) {
    try {
      const review = await reviewsService.getReviewByReviewId(request.params.reviewId)
      respond.send(review)

    } catch (error) {
      next(error);
    }
  }


  async getReviewByGameId(request, respond, next) {
    try {
      const review = await reviewsService.getReviewByGameId(request.params.gameId)
      respond.send(review)

    } catch (error) {
      next(error);
    }
  }


  async getReviewByCreatorId(request, respond, next) {
    try {
      const review = await reviewsService.getReviewByCreatorId(request.params.creatorId)
      respond.send(review)
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


  async saveReview(request, respond, next) {
    try {
      // REVIEW this is the service function that edits a review

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