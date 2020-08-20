import ReviewController from "../controllers/ReviewController";
import reviews from "../data/reviews";
import { nanoid } from "nanoid";
import Review from "../models/Review";

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

test("should delete review", () => {
  const reviewId = reviews[3].getId();
  RevController.deleteReview(reviewId);
  expect(() => RevController.getReview(reviewId)).toThrow(Error);
});

test("should insert new review", () => {
  const newReview = new Review(nanoid(), 5, undefined);
  const insertedReview = RevController.insertReview(newReview);
  expect(insertedReview).toBe(newReview);
});

test("should update review", () => {
  const reviewToUpdate = reviews[3].getId();
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
