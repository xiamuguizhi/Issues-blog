<p align="center"><img src="README/v1.1.png /></p>
<p align="center'>v1.1<p>

## 关于

> 不断的提升，分享＝提升

- Github: [chenhonzhou](http://github.com/chenhonzhou)
- TXQQ:   [2915537708](tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=2915537708)
- Email: [chenhonzhou@gmail.com](https://www.google.com/gmail)
- V2EX:  [chenhonzhou](https://www.v2ex.com/member/chenhonzhou)
- bilibili: [HardDeams](https://space.bilibili.com/27013266?from=search&seid=3275070897980156250#!/index)
- zhihu: [陈宏洲不是NPC](https://www.zhihu.com/people/ChenHonZhouRemix/activities)
- 网易云: [HardDeams](http://music.163.com/#/user/home?id=266341607)

## Live
[Log](README/Log.md)

## 部署方法

 - Fork 本项目，然后再新建一个用于存放 blog（issues）的 repo。 （fork 的项目是没有 issue 的，所以得新建个项目）

 - 修改 gh-pages 分支下根目录的 config.js，填写好对应的博客名称，你自己的 github 用户名、对应项目名、多说 ID，保存。多说账号在这里申请http://duoshuo.com/


            var _config = {
                blog_name : '用于演示的博客',  // 博客名称
                owner: 'lifesinger',          // github 用户名
                repo: 'lifesinger.github.com',// 用于存放 blog（issues）的项目名
                duoshuo_id : 'hello1234',     // 在第三方评论插件多说申请站点的子域名
                // access_token: '',          // 请求量大时需要在 github 后台单独设置一个读取公开库的 token
                per_page: '15'                // 默认一页显示几篇文章
            }
