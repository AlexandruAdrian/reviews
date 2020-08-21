import ReviewController from "../controllers/ReviewController";
import { testReviews } from "../data/reviews";
import { nanoid } from "nanoid";
import Review from "../models/Review";

const RevController = new ReviewController(testReviews);

test("should return as many reviews as limit is set", () => {
  const page = 1;
  const limit = 3;
  const results = RevController.getReviews(page, limit);
  expect(results.result.length).toBe(limit);
});

test("should return requested review by id", () => {
  const requestedId = testReviews[3].getId();
  const requestedReview = RevController.getReview(requestedId);
  expect(requestedReview.getId()).toBe(requestedId);
});

test("should return average rating", () => {
  const currentAverage = 3.8; // current average rating in the dummy data
  expect(RevController.getAverageRating()).toBe(currentAverage);
});

test("should delete review", () => {
  const reviewId = testReviews[3].getId();
  RevController.deleteReview(reviewId);
  expect(() => RevController.getReview(reviewId)).toThrow(Error);
});

test("should insert new review", () => {
  const newReview = new Review(nanoid(), 5, undefined);
  const insertedReview = RevController.insertReview(newReview);
  expect(insertedReview).toBe(newReview);
});

test("should update review", () => {
  const reviewToUpdate = testReviews[3].getId();
  const newData = {
    rating: 1,
    review: "Disappointed",
    postedAt: Date.now(),
  };
  const updatedReview = RevController.updateReview(reviewToUpdate, newData);

  expect(updatedReview.getRating()).toBe(newData.rating);
  expect(updatedReview.getReview()).toBe(newData.review);
  expect(updatedReview.getDate()).toBe(newData.postedAt);
});

test("should return total number of reviews", () => {
  const currentNumberOfReviews = 6; // current reviews in dummy data
  expect(RevController.getNumberOfReviews()).toBe(currentNumberOfReviews);
});
