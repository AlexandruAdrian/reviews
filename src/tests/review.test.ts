import path from "path";
import Review from "../models/Review";
import { nanoid } from "nanoid";

test("should return same id", () => {
  const generatedId = nanoid();
  const newReview = new Review(generatedId, 4, undefined);
  expect(newReview.getId()).toBe(generatedId);
});

test("should return proper rating", () => {
  const rating = 5;
  const newReview = new Review(nanoid(), rating, undefined);
  expect(newReview.getRating()).toBe(rating);
});

test("should return proper name", () => {
  const name = "John Doe";
  const newReview = new Review(nanoid(), 5, name);
  expect(newReview.getName()).toBe(name);
});

test("should return proper review", () => {
  const review = "Lorem ipsum dolor amet";
  const newReview = new Review(nanoid(), 5, undefined, review);
  expect(newReview.getReview()).toBe(review);
});

test("should return default user avatar", () => {
  const defaultUserAvatar = path.join(
    __dirname,
    "../data/images/placeholder-avatar.jpg"
  );
  const newReview = new Review(
    nanoid(),
    5,
    undefined,
    "Lorem ipsum",
    Date.now(),
    defaultUserAvatar
  );
  expect(newReview.getUserAvatar()).toBe(defaultUserAvatar);
});

test("should return date", () => {
  const postedAt = Date.now();
  const newReview = new Review(nanoid(), 5, undefined, "Lorem ipsum", postedAt);
  expect(newReview.getDate()).toBe(postedAt);
});

test("should return Anonymous name", () => {
  const newReview = new Review(nanoid(), 5, undefined);
  expect(newReview.getName()).toBe("Anonymous");
});

test("should set proper name", () => {
  const newName = "Test";
  const newReview = new Review(nanoid(), 5);
  newReview.setName(newName);
  expect(newReview.getName()).toBe(newName);
});

test("should set proper rating", () => {
  const newRating = 3;
  const newReview = new Review(nanoid(), 3);
  newReview.setRating(newRating);
  expect(newReview.getRating()).toBe(newRating);
});

test("should set proper review", () => {
  const newReviewText = "Lorem ipsum dolor amet";
  const newReview = new Review(nanoid(), 5);
  newReview.setReview(newReviewText);
  expect(newReview.getReview()).toBe(newReviewText);
});

test("should set proper user avatar", () => {
  const newUserAvatar = path.join(__dirname, "../data/images/user1.jpg");
  const newReview = new Review(nanoid(), 5);
  newReview.setUserAvatar(newUserAvatar);
  expect(newReview.getUserAvatar()).toBe(newUserAvatar);
});

test("should set proper date", () => {
  const newDate = Date.now();
  const newReview = new Review(nanoid(), 3);
  newReview.setDate(newDate);
  expect(newReview.getDate()).toBe(newDate);
});
