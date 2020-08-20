import path from "path";
import { nanoid } from "nanoid";

export default class Review {
  private id: string;
  private rating: number;
  private name: string;
  private review: string;
  private userAvatar: string;
  private postedAt: number;

  constructor(
    id: string = nanoid(),
    rating: number,
    name: string = "Anonym",
    review: string = "",
    postedAt: number = Date.now(),
    userAvatar: string = path.join(
      __dirname,
      "../data/images/placeholder-avatar.jpg"
    )
  ) {
    this.id = id;
    this.rating = rating;
    this.name = name;
    this.review = review;
    this.postedAt = postedAt;
    this.userAvatar = userAvatar;
  }

  public getId() {
    return this.id;
  }

  public getRating() {
    return this.rating;
  }

  public getName() {
    return this.name;
  }

  public getReview() {
    return this.review;
  }

  public getDate() {
    return this.postedAt;
  }

  public getUserAvatar() {
    return this.userAvatar;
  }

  public setRating(rating: number): void {
    this.rating = rating;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setReview(review: string): void {
    this.review = review;
  }

  public setUserAvatar(pathToAvatar: string) {
    this.userAvatar = pathToAvatar;
  }
}
