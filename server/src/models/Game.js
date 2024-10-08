import { Schema } from "mongoose";

export const GameSchema = new Schema(
  {
    // _id: { type: String, required: true },
    name: { type: String, minlength: 3, maxlength: 25, required: true },
    description: { type: String, minlength: 3, maxlength: 5000, required: true },
    background_image: { type: String, minlength: 3, maxlength: 1000, required: true },
    alpha_rating: { type: Number, minlength: 3, maxlength: 25, required: true },
    released: { type: Date, required: true },
    platforms: { type: Array, required: true },
    genre: { type: Array, required: true },
    short_screenshots: { type: Array, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } })