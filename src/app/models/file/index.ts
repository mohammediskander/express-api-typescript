import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "accounts",
    },
    dataType: {
      type: String,
      required: true,
    },
    resolution: {
      height: Number,
      width: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("files", Schema);
