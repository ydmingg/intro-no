import express from 'express'

// 创建路由
const route = express.Router()

// 设置路由
const data = [
    {
        id: 1,
        name: '张三',
        age: 20,
        sex: '男'
    },
]

// 定义登录的路由
route.post("/login", (req, res) => {
    // 获取用户输入的用户名和密码
    const { username, password } = req.body;
    // 判断用户名和密码是否正确
    if (username === 'admin' && password === '123123') {
        res.send({
            code: 200,
            msg: '登录成功',
            data: {id: 1, username: 'admin', nickname: '管理员'}
        })
    } else {
        res.status(403).send({
            code: 403,
            msg: '登录失败'
        })
    }
    
})


// 定义首页信息的路由
route.get('/', (req, res) => {
    console.log("接收到时，打印消息！！！");
    res.send(data)
})


export default route