import path from "path";
import { nanoid } from "nanoid";
import IReview from "../interfaces/IReview";

export default class Review implements IReview {
  private id: string;
  private rating: number;
  private name: string;
  private review: string;
  private userAvatar: string;
  private postedAt: number;

  constructor(
    id: string = nanoid(),
    rating: number,
    name = "Anonymous",
    review = "",
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

  public getId(): string {
    return this.id;
  }

  public getRating(): number {
    return this.rating;
  }

  public getName(): string {
    return this.name;
  }

  public getReview(): string {
    return this.review;
  }

  public getDate(): number {
    return this.postedAt;
  }

  public getUserAvatar(): string {
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

  public setUserAvatar(pathToAvatar: string): void {
    this.userAvatar = pathToAvatar;
  }

  public setDate(date: number): void {
    this.postedAt = date;
  }
}
