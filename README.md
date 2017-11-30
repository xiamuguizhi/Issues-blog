## 关于
> Version: 1.2

**Fork自 [wuhaoworld](https://github.com/wuhaoworld)**

    - 感谢原作者提供思路，美化ing
    - 2017/9/27
    - **本项目依赖`issues`，所以不要在`issues`中随意提交代码。谢谢合作**

## Live
> Log

[More](README/Log.md)

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
