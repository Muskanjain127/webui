const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/connectdb');
const companyRoute=require("../backend/router/compsny")
dotenv.config();
connectDB();

const app = express();
app.use(cors({origin:'http://localhost:5173','https://webui-ecru.vercel.app/'}));
app.use(express.json());

// Router
app.use('/api',companyRoute);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server on port ${PORT}`));
