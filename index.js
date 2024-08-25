/*const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`It's live on http://localhost:${PORT}`)
)*/

const express = require('express');
const app = express();
const port = 8000;

// Middleware to parse JSON requests
app.use(express.json());

// POST endpoint
app.post('/process', (req, res) => {
  const data = req.body.data;
  
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ 
      is_success: false, 
      message: "Invalid data format" 
    });
  }

  const numbers = data.filter(item => !isNaN(item)).map(Number);
  const alphabets = data.filter(item => isNaN(item));
  
  const lowercaseAlphabets = alphabets.filter(char => char.match(/[a-z]/));
  const highestLowercaseAlphabet = lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];

  const response = {
    is_success: true,
    user_id: "shreshtha",
    email: "shreshtha.srivastava2021@vitstudent.ac.in",
    roll_number: "21BKT0070",
    numbers: numbers.map(String),
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  };

  res.json(response);
});

// GET endpoint
app.get('/operation_code', (req, res) => {
  res.json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
