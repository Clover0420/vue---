# vue---
vue项目-星巴克咖啡

>     项目名称

starBucks

> 技术线

webpack + vue + vuex + ES6/7 + ajax + sass + flex + felxble

> 项目运行


```
git clone https://github.com/Clover0420/vue---.git
npm install --save-dev
npm run build
```


> 项目目录结构


```
starbucks
    |——clinet       
        |——src
            |——api
                |——index.js     //接口
            |——components       //全局组件
                |——chooseList.vue  
                |——frame.vue    //弹窗
            |——plugins          //插件
                |——index.js
            |——router           //路由
                |——index.js
            |——static           //静态文件 icon图标 
                |——fonts
                |——scss
            |——store            //vuex 状态库
                |——modules
                |——index.js
            |——utils
                |——flexble.js   //flex弹性布局 rem
                |——request.js   //二次封装axios
            |——views            
                |——Detail       //详情
                |——Filtertypes  //分类
                |——History      //审批历史
                |——Home         //首页
                    |——components
                    |——index.vue
                |——Login    //登陆页面
                |——Onfile   //编辑提交页面
                |——Search   //搜索页面
            |——App.vue
            |——main.js
```
