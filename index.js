/**
  秒杀美团优惠券 v1.01

  cron: 52 0,6-22/2 * * *
  const $ = new Env("秒杀美团优惠券");
 */

const { default: axios } = require('axios')

const init = async () => {
  console.log(process.env)

  const res = await axios.get('http://www.baidu.com')
  console.log(res.status)
}

init()
