<p align="center" style="font-weight: blod;"><a href="http://装逼.top" target="_blank">YoungDog | DEMO</a> | <a href="http://chenhonzhou.link">YoungDog | HOME</a>  </p>



------------


# 找到我
> **Fork自:[wuhaoworld](https://github.com/wuhaoworld/github-issues-blog)**

- Github: [chenhonzhou](http://github.com/chenhonzhou)

- Email: [chenhonzhou@gmail.com](https://www.google.com/gmail)

- V2EX:  [chenhonzhou](https://www.v2ex.com/member/chenhonzhou)

- Bilibili: [HardDeams](https://space.bilibili.com/27013266/#/)

- Zhihu: [陈宏洲不是NPC](https://www.zhihu.com/people/ChenHonZhouRemix/activities)

- Netease: [HardDeams](http://music.163.com/#/user/home?id=266341607)

# 使用到的开源项目

<p align="center">
  <a href="https://github.com/flatiron/director">director.js</a> |
  <a href="http://www.ractivejs.org">ractive.js</a> |
  <a href="http://fontawesome.io/">marked.js</a> |
  <a href="http://underscorejs.org/">Underscore.js</a> |
  <a href="https://typo.sofi.sh/">typo.css</a> |
  <a href="http://underscorejs.org/">normalize.css</a> |
  <a href="http://fontawesome.io/">font-awesome.css</a> |
  <a href="http://jquery.com/">jquery.js</a>
</p>

## 部署

 - Fork 本项目，然后再新建一个用于存放 blog（issues）的 repo。 （fork 的项目是没有 issue 的，所以得新建个项目）

 - 修改根目录的 config.js，填写好对应的博客名称，你自己的 github 用户名、对应项目名、多说 ID，保存。多说账号在这里申请http://duoshuo.com/


            var _config = {
                blog_name : '用于演示的博客',  // 博客名称
                owner: 'lifesinger',          // github 用户名
                repo: 'lifesinger.github.com',// 用于存放 blog（issues）的项目名
                duoshuo_id : 'hello1234',     // 在第三方评论插件多说申请站点的子域名
                // access_token: '',          // 请求量大时需要在 github 后台单独设置一个读取公开库的 token
                per_page: '15'                // 默认一页显示几篇文章
            }
