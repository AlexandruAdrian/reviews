export default interface IReview {
  getId: () => string;
  getRating: () => number;
  getName: () => string;
  getReview: () => string;
  getDate: () => number;
  getUserAvatar: () => string;
  setRating: (rating: number) => void;
  setName: (name: string) => void;
  setReview: (review: string) => void;
  setUserAvatar: (pathToAvatar: string) => void;
}
