import express from 'express';
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql2');

// 创建服务器实例
const app = express();
// 启动服务器
app.listen(8080, () => {
  console.log(45646546);
  
});

// Middleware
// app.use(bodyParser.json());
// app.use(cors());

// Database connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'mydb'
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log('Connected to database');
// });

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});