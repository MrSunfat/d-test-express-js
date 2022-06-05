const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    var duongDan = path.join(__dirname, "home.html");
    res.sendFile(duongDan);
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
