const favoriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    }

});