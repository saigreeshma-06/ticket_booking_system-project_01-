import mongoose from "mongoose";

const SeatSchema = new mongoose.Schema({
  section: String,
  row: Number,
  col: Number,
  booked: { type: Boolean, default: false },
});

export default mongoose.model("Seat", SeatSchema);
