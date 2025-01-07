const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('frontend'));

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Upload endpoint
app.post('/upload', upload.single('photo'), (req, res) => {
    console.log('File uploaded:', req.file);
    res.send('Photo uploaded successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
