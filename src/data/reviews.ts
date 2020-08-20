import path from "path";
import IReview from "../interfaces/IReview";
import Review from "../models/Review";
import { nanoid } from "nanoid";

const defaultUserAvatar = path.join(
  __dirname,
  "./images/placeholder-avatar.jpg"
);

const halfDay = 60 * 720 * 1000;
const day = halfDay * 2;

const data = [
  {
    id: nanoid(),
    rating: 4,
    name: undefined,
    review:
      "Liked it very much - probably one of the best thai restaurants in the city - recommend!",
    userAvatar: defaultUserAvatar,
    postedAt: Date.now() - halfDay,
  },
  {
    id: nanoid(),
    rating: 3,
    name: "Jenny Svensson",
    review:
      "Maybe a bit too fast food. I personally dislike that. Good otherwise.",
    userAvatar: defaultUserAvatar,
    postedAt: Date.now() - day,
  },
  {
    id: nanoid(),
    rating: 5,
    name: "happy56",
    review: "Super good! Love the food!",
    userAvatar: path.join(__dirname, "./images/user1.jpg"),
    postedAt: Date.now() - day,
  },
  {
    id: nanoid(),
    rating: 3,
    name: "John Doe",
    review:
      "Maybe a bit too fast food. I personally dislike that. Good otherwise.",
    userAvatar: defaultUserAvatar,
    postedAt: Date.now() - day,
  },
  {
    id: nanoid(),
    rating: 4,
    name: "Jane Doe",
    review:
      "Liked it very much - probably one of the best thai restaurants in the city - recommend!",
    userAvatar: path.join(__dirname, "./images/user3.jpg"),
    postedAt: Date.now() - day,
  },
  {
    id: nanoid(),
    rating: 5,
    name: "Harry Potter",
    review: "Super good! Love the food!",
    userAvatar: path.join(__dirname, "./images/user2.jpg"),
    postedAt: Date.now() - day,
  },
];

const reviews: IReview[] = [];

data.forEach((item) => {
  const { id, rating, name, review, userAvatar, postedAt } = item;
  const newReview = new Review(id, rating, name, review, postedAt, userAvatar);
  reviews.push(newReview);
});

export default reviews;
