import path from "path";
import Review from "../models/Review";
import { nanoid } from "nanoid";

const generatedId: string = nanoid();
const rating = 5;
const name = "Test";
const review = "Lorem ipsum";
const postedAt = Date.now();
const testReview = new Review(generatedId, rating, name, review, postedAt);
const testAnonym = new Review(generatedId, rating);

test("should return same id", () => {
  expect(testReview.getId()).toBe(generatedId);
});

test("should return proper rating", () => {
  expect(testReview.getRating()).toBe(rating);
});

test("should return proper name", () => {
  expect(testReview.getName()).toBe(name);
});

test("should return proper review", () => {
  expect(testReview.getReview()).toBe(review);
});

test("should return default user avatar", () => {
  const defaultUserAvatar = path.join(
    __dirname,
    "../data/images/placeholder-avatar.jpg"
  );
  expect(testReview.getUserAvatar()).toBe(defaultUserAvatar);
});

test("should return date", () => {
  expect(testReview.getDate()).toBe(postedAt);
});

test("should return Anonym name", () => {
  expect(testAnonym.getName()).toBe("Anonym");
});

test("should set proper name", () => {
  const newName = "Test";
  testAnonym.setName(newName);
  expect(testAnonym.getName()).toBe(newName);
});

test("should set proper rating", () => {
  const newRating = 3;
  testAnonym.setRating(newRating);
  expect(testAnonym.getRating()).toBe(newRating);
});

test("should set proper review", () => {
  const newReview = "Lorem ipsum dolor amet";
  testAnonym.setReview(newReview);
  expect(testAnonym.getReview()).toBe(newReview);
});

test("should set proper user avatar", () => {
  const newUserAvatar = path.join(__dirname, "../data/images/user1.jpg");
  testAnonym.setUserAvatar(newUserAvatar);
  expect(testAnonym.getUserAvatar()).toBe(newUserAvatar);
});
