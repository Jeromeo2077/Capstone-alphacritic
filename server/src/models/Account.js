import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional properties do so here
    // NOTE for profiles
    bio: { type: String, maxlength: 150 },
    coverImg: { type: String, maxlength: 500, },
    youtubeLink: { type: String, maxlength: 500 },
    twitchLink: { type: String, maxlength: 500 },
    discordLink: { type: String, maxlength: 500 },
    embedYoutubeChannel: { type: String, maxlength: 500 },
    userProfileImg: { type: String, maxlength: 500 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

