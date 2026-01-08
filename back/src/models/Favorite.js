const favoriteSchema = new mongoose.Schema({
    user: ObjectId,
    game: ObjectId
});