/**
  秒杀美团优惠券 v1.01

  cron: 0 0 0 * * *
  const $ = new Env("秒杀美团优惠券");
  [task_local]
  # 标题
  0 0 0 * * * test.js, tag=标题, enabled=true
  +脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
  ============Quantumultx===============
  [task_local]
  #京东保价
  39 20 * * * https://raw.githubusercontent.com/KingRan/JDJB/main/jd_price.js, tag=京东保价, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

  ================Loon==============
  [Script]
  cron "39 20 * * *" script-path=https://raw.githubusercontent.com/KingRan/JDJB/main/jd_price.js,tag=京东保价

  ===============Surge=================
  京东保价 = type=cron,cronexp="39 20 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/KingRan/JDJB/main/jd_price.js

  ============小火箭=========
  京东保价 = type=cron,script-path=https://raw.githubusercontent.com/KingRan/JDJB/main/jd_price.js, cronexpr="39 20 * * *", timeout=3600, enable=true
*/

const { default: axios } = require('axios')
const { sendNotify } = require('./sendNotify.js')

const init = async () => {
  sendNotify('标题', '内容')
  const res = await axios.post('http://www.baidu.com')
}

init()
