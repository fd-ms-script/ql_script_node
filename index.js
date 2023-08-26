/*
测试脚本
@Leaf

cron: 33 7,22 * * *
*/

const { default: axios } = require('axios')

const init = async () => {
  console.log(process.env)

  // const res = await axios.get('http://www.baidu.com')
  // console.log(res.status)
}

init()
