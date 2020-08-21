import IReview from "./IReview";

export default interface IReviewsResult {
  next?: {
    page: number;
  };
  previous?: {
    page: number;
  };
  result: IReview[];
}
