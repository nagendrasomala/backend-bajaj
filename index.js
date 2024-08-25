const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3001'
}));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.post('/addData', (req, res) => {
    const { data } = req.body;
    console.log(data);

    const numbers = [];
    const alphabets = [];
    let highestLowercaseAlphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highestLowercaseAlphabet) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "Somala_Nagendra_babu_010102003",
        College_email: "nagendrababu.21bce9403@vitapstudent.ac.in",
        College_roll_number: "21BCE9403",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.json(response);
});


app.get('/getData', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});