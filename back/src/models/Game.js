const mongoose =require("mongoose");

const gameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        genres: [String],

        consoles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Console",
                required: true
            }
        ],

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        visibility: {
            type: String,
            enum: ["public", "unlisted", "private"],
            default: "public"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Game", gameSchema);
