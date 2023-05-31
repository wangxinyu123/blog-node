module.exports = app => {
    const mongoose = require('mongoose')

    mongoose.connect('mongdb://127.0.0.27017/node-react-moban', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log('数据库连接失败')
        } else {
            console.log('数据库连接成功')
        }
    })
}