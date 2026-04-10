const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const vid = req.query.id; // URL parameter ?id=...

    if (!vid) {
        // Agar ID missing ho toh simple error message
        return res.send('<h1 style="font-family:sans-serif; text-align:center; margin-top:50px;">vid required</h1>');
    }

    // ID milne par page render hoga
    res.render('index', { vid: vid });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Try: http://localhost:${PORT}/?id=12345678901234567890`);
});
