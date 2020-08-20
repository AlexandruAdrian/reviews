import ReviewController from "../controllers/ReviewController";
import reviews from "../data/reviews";

const RevController = new ReviewController(reviews);

test("should return as many reviews as limit is set", () => {
  const page = 1;
  const limit = 3;
  const results = RevController.getReviews(page, limit);
  expect(results.result.length).toBe(limit);
});

test("should return requested review by id", () => {
  const requestedId = reviews[3].getId();
  const requestedReview = RevController.getReview(requestedId);
  expect(requestedReview.getId()).toBe(requestedId);
});
