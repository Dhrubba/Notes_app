const express = require('express');
import notesRoutes from "./Routes/notesRoutes.js";

const app = express();

app.use("/api/notes")



app.listen(5001, () => {
    console.log('Server is running....');
});