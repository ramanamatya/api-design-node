import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
      unique: true,
    },
    description: String,
    status: {
      type: String,
      required: true,
      enum: ['active', 'complete', 'archive'],
      default: 'active',
    },
  },
  { timestamps: true }
);

export const Listing = mongoose.model('listing', listingSchema);
