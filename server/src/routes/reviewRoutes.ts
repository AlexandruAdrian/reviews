import express from "express";
import ReviewController from "../controllers/ReviewController";
import { reviews } from "../data/reviews";
import Review from "../models/Review";

const reviewRoutes = (): express.Router => {
  const router = express.Router();
  const RevController = new ReviewController(reviews);

  router.get(
    "/",
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const page = parseInt(req.query.page as string);
        const limit = parseInt(req.query.limit as string);
        const result = RevController.getReviews(page, limit);
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    "/average-rating",
    (req: express.Request, res: express.Response) => {
      const averageRating = RevController.getNumberOfReviews();

      res.status(200).json({ averageRating });
    }
  );

  router.get(
    "/total-reviews",
    (req: express.Request, res: express.Response) => {
      const totalNumberOfReviews = RevController.getNumberOfReviews();

      res.status(200).json({ totalNumberOfReviews });
    }
  );

  router.get(
    "/:reviewId",
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const reviewId = req.params.reviewId;
        const review = RevController.getReview(reviewId);

        res.status(200).json(review);
      } catch (err) {
        next(err);
      }
    }
  );

  router.post("/", (req: express.Request, res: express.Response) => {
    const { id, rating, name, review } = req.body;
    const newReview = new Review(id, rating, name, review);
    const insertedReview = RevController.insertReview(newReview);

    res.status(201).json(insertedReview);
  });

  router.delete("/:reviewId", (req: express.Request, res: express.Response) => {
    const reviewId = req.params.reviewId;
    RevController.deleteReview(reviewId);

    res.status(200).json({ message: "Review successfully deleted" });
  });

  router.put("/:reviewId", (req: express.Request, res: express.Response) => {
    const reviewId = req.params.reviewId;
    const { rating, review } = req.body;
    const postedAt = Date.now();
    const updatedReview = RevController.updateReview(reviewId, {
      rating,
      review,
      postedAt,
    });

    res.status(200).json(updatedReview);
  });

  return router;
};

export default reviewRoutes;
