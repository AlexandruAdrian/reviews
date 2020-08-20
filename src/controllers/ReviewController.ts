import IReview from "../interfaces/IReview";
import IReviewResult from "../interfaces/IReviewsResult";

export default class ReviewController {
  private reviews: IReview[];

  constructor(reviews: IReview[]) {
    this.reviews = reviews;
  }

  public getReviews(page: number, limit: number): IReviewResult {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results: IReviewResult = {
      result: [],
    };

    if (startIndex > 0) {
      results.next = {
        page: page + 1,
      };
    }

    if (endIndex < this.reviews.length) {
      results.previous = {
        page: page - 1,
      };
    }

    results.result = this.reviews.slice(startIndex, endIndex);

    return results;
  }

  public getReview(reviewId: string): IReview {
    const review = this.reviews.find((review) => review.getId() === reviewId);

    if (!review) {
      throw new Error("Review not found");
    }
    return review;
  }

  public deleteReview(reviewId: string): void {
    this.reviews = this.reviews.filter((review) => review.getId() !== reviewId);
  }
}
