<p align="center"><img src="src/v1.8.png"/></p>
<p align="center" style="font-weight: blod;">
  <a href="http://装逼.top" target="_blank">YoungDog | DEMO</a>  |
  <a href="http://html.chenhonzhou.link/?https://github.com/chenhonzhou/Note-blog/blob/develop/index.html" target="_blank">Develop | DEMO</a>
</p>
<p align="center">
  <a href="http://html.chenhonzhou.link/?https://github.com/chenhonzhou/Note-blog/blob/develop/index.html">Develop | Log</a>
</p>

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

## 1. 部署方法(方案1)

1. fork 本项目，然后再新建一个用于存放 blog（issues）的 repo。 （fork 的项目是没有 issue 的，所以得新建个项目）
2. 修改 gh-pages 分支下根目录的 config.js，填写好对应的博客名称，你自己的 github 用户名、对应项目名、多说 ID，保存。多说账号在这里申请http://duoshuo.com/


        var _config = {
            blog_name : '用于演示的博客',  // 博客名称
            owner: 'lifesinger',          // github 用户名
            repo: 'lifesinger.github.com',// 用于存放 blog（issues）的项目名
            duoshuo_id : 'hello1234',     // 在第三方评论插件多说申请站点的子域名
            // access_token: '',          // 请求量大时需要在 github 后台单独设置一个读取公开库的 token
            per_page: '15'                // 默认一页显示几篇文章
        }


保存后即可通过 `http://用户名.github.io/github-issues-blog` 访问

    注意：至少得有一次提交，github 的 pages 功能才会生效，直接 fork，没有任何修改是不行的。

如果你想绑定独立域名，修改根目录的 CNAME 文件，将其中的网址修改为你的域名，并把你的域名 CNAME 到 `用户名.github.io` 即可

## 2. 部署方法(方案2)

1.克隆本项目，修改根目录的 config.js

    var _config = {
        blog_name : '用于演示的博客',   // 博客名称
        owner: 'lifesinger',          // github 用户名
        repo: 'lifesinger.github.com',// github 中对应项目名
        duoshuo_id : 'hello1234',     // 在第三方评论插件多说申请站点的子域名
        // access_token: '',          // 请求量大时需要在 github 后台单独设置一个读取公开库的 token
        per_page: '15'                // 默认一页显示几篇文章
    }

2.填写好对应的博客名称，你自己的 github 用户名、对应项目名和多说 ID，保存。多说账号在这里申请http://duoshuo.com/    
3.将所有文件上传到一个静态空间，打开首页即可看到效果。  

接下来就是在对应的 repo 的 issues 下写文章了！

## 3. 提高 API 访问次数的配额

默认情况下你是用匿名权限访问 github 接口的， github 的访问限制是一个小时最多 60 次请求，这显然是不够的，如何提高限制呢？

1. 到个人设置下的 Personal access tokens 页（https://github.com/settings/tokens ），如下图，点击右上角的 Generate new token

    ![](http://ww1.sinaimg.cn/large/0066xOjKgy1fmz5k9vfaqj30o20c9abn.jpg)

2. 填写名称，只勾选 `public_repo`,然后保存，github 会生成一个可访问你公开项目的 access_token，将它填入到配置文件的 access_token 的值中，并取消注释。
    ![](http://ww1.sinaimg.cn/large/0066xOjKgy1fmz5nsh5ahj30qr07ydgv.jpg)

3. 打开 `app.js`,取消掉第 17 行和 88 行的注释，保存后重新上传即可

        data:{
            // access_token:_config['access_token']
        },
