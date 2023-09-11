/**
  秒杀美团优惠券 v1.01

  cron: 0 0 0 * * *
  const $ = new Env("秒杀美团优惠券");
  [task_local]
  # 标题
  0 0 0 * * * test.js, tag=标题, enabled=true
*/

const { default: axios } = require('axios')
const { sendNotify } = require('./sendNotify.js')

const init = async () => {
  sendNotify('标题', '内容')
  const res = await axios.post('http://www.baidu.com')
}

init()
