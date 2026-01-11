import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


//Utilisation de cette API  pour les images et screenshots : https://www.igdb.com/api