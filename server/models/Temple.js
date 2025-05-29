import mongoose from 'mongoose';

const amenitySchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ['hotel', 'food', 'attraction']
  },
  rating: Number,
  distance: String,
  description: String,
  imageUrl: String
});

const templeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  deity: {
    type: String,
    required: true
  },
  description: String,
  history: String,
  architecture: String,
  timings: String,
  entryFee: String,
  bestTimeToVisit: String,
  imageUrl: String,
  coordinates: {
    lat: Number,
    lng: Number
  },
  amenities: [amenitySchema]
}, { timestamps: true });

export default mongoose.model('Temple', templeSchema);