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
      results.previous = {
        page: page - 1,
      };
    }

    if (endIndex < this.reviews.length) {
      results.next = {
        page: page + 1,
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
    const reviewIndex = this.reviews.findIndex(
      (review) => review.getId() === reviewId
    );
    this.reviews.splice(reviewIndex, 1);
  }

  public getAverageRating(): number {
    const totalRating = this.reviews.reduce(
      (acc, review) => acc + review.getRating(),
      0
    );
    const averageRating = parseFloat(
      (totalRating / this.reviews.length).toFixed(1)
    );

    return averageRating;
  }

  public insertReview(review: IReview): IReview {
    this.reviews.unshift(review);
    return this.reviews[0];
  }

  public updateReview(
    reviewId: string,
    newData: {
      rating: number;
      review: string;
      postedAt: number;
    }
  ): IReview {
    const { rating, review, postedAt } = newData;
    const foundReview = this.getReview(reviewId);

    foundReview.setRating(rating);
    foundReview.setReview(review);
    foundReview.setDate(postedAt);

    const reviewIndex = this.reviews.findIndex(
      (review) => review.getId() === foundReview.getId()
    );
    this.reviews[reviewIndex] = foundReview;
    this.reviews.sort((a, b) => a.getDate() - b.getDate());
    const newReviewIndex = this.reviews.findIndex(
      (review) => review.getId() === foundReview.getId()
    );

    return this.reviews[newReviewIndex];
  }

  public getNumberOfReviews(): number {
    return this.reviews.length;
  }
}
