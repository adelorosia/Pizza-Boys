import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    photo: {
      type: String,
      default:
        "https://res-console.cloudinary.com/ddruqkbvb/thumbnails/v1/image/upload/v1702416009/aW1hZ2VzL3VzZXJfcHJvZmlsZV9pbWFnZS9wcm9maWxlLWljb24tYXZhdGFyLWljb24tdXNlci1pY29uLXBlcnNvbi1pY29uLWZyZWUtcG5nX2ttY2Jjeg==/drilldown",
    },
    bio: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("User", userSchema);
