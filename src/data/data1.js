import Mock from 'mockjs';
var data1 =Mock.mock({
    "info|5":[{
        'image':"@image('200x100' 'red')",
        'detail':"@csentence(12,15)",
        "price":"@natural(100,999)",
        "id":"@natural(0,99)"
    }]
})
Mock.mock('http://www.baidu.com/api',data1)
export default data1;

