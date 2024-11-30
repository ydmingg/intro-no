import express from 'express'

const data = [
    {
        id: 1,
        name: '张三',
        age: 20,
        sex: '男'
    },
]


// 创建服务器实例
const app = express()

// 
app.use(express.urlencoded({ extended: true }))

// 设置允许的请求方式
app.use(express.json())

// 设置允许的请求头
app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, PATCH")
    res.setHeader('Access-Control-Allow-Headers', "Content-Type")
    // 允许的请求方式
    next()
})

// 定义登录的路由
app.post("/login", (req, res) => { 
    console.log(req.body);
    // 获取用户输入的用户名和密码
    const { username, password } = req.body;
    // 判断用户名和密码是否正确
    if (username === 'admin' && password === '123123') {
        res.send({
            code: 200,
            msg: '登录成功'
        })
    } else {
        res.status(403).send({
            code: 403,
            msg: '登录失败'
        })
    }
    
})


// 定义首页信息的路由
app.get('/', (req, res) => {
    console.log("接收到时，打印消息！！！");
    res.send(data)


})



// 启动服务器
app.listen(8080, () => {
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