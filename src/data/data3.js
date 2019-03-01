import Mock from 'mockjs';
var data3 =Mock.mock({
    "info|4":[{
        'image':"@image('200x100', '#fb0a2a')",
        'detail':"@csentence(12,15)",
        "price":"@natural(100,999)",
        "id":"@natural(0,99)"
    }]
})
Mock.mock('http://www.baidu.com/api/3',data3)
export default data3;