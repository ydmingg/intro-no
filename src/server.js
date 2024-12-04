import express from 'express'
import route from './routes/customer.js'
import { Controllers } from './controllers/index.js'

// 创建服务器实例
const app = express()

// 
app.use(express.urlencoded({ extended: true }))

// 设置解析器
app.use(express.json())

// 设置拦截器
app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, PATCH")
    res.setHeader('Access-Control-Allow-Headers', "Content-Type")
    // 允许的请求方式
    next()
})


const username = process.env.DB_USER;
const password = process.env.DB_PASS;

console.log(username, password);  // 不要在生产环境中打印这些信息

// 使用导入进来的路由对象
app.use(route)


// 处理数据
Controllers();













// 启动服务器,监听端口
app.listen(3000, () => {
    console.log("服务器已经启动！")
})










// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql2');

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
// });/
