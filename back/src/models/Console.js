import mongoose from "mongoose";

const consoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },

        manufacturer: {
            type: String,
            required: true
        },

        releaseYear: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Console", consoleSchema);
