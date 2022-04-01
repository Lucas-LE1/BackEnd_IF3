
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Controllers } = require('./src/Controllers');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.post('/user/singup', Controllers.UserCreate)

app.listen(port, () => {
  console.log(`[server]: Sevidor esta iniciando em http://localhost:${port}`);
});