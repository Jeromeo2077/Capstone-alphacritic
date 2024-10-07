import { Schema } from "mongoose";

export const ReviewSchema = new Schema(
  {
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    body: { type: String, minlength: 3, maxlength: 5000, required: true },
    title: { type: String, minlength: 3, maxlength: 50, required: true },
    alphaScore: { type: Number, min: 1, max: 10, required: true },
    gameplayScore: { type: Number, min: 1, max: 10, required: true },
    storyScore: { type: Number, min: 1, max: 10, required: true },
    graphicsScore: { type: Number, min: 1, max: 10, required: true },
    alphaScoreAggregate: { type: Number, min: 1, max: 10 },
    createdAt: { type: Date, default: Date() },
    isPublished: { type: Boolean, default: false, required: true },
    isPinned: { type: Boolean, default: false, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ReviewSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})