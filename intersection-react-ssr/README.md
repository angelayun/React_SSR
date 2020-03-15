* 安装
1. npm i react react-dom //react 基础库
2. npm i @babel/core @babel/cli //babel 基础库
3. mpm i @babel/preset-react //编译 react 代码
4. npm i @babel/preset-env //配置 babel 编译的一些选项
5. npm i babel-loader //编译 js 代码
6. npm i webpack webpack-cli   //webpack 两个核心库
7. npm i koa2 //web 开发框架
8. npm i koa-static //实现静态资源的访问


* 使用
1. 生成es5的client代码
```
npm run dev
```
2. 生成服务器端所需要的最终代码
```
npm run babel-node
```
3. 执行node app


* 注意点
1. 服务端只是生成-html 字符串，只会执行组件的compoentWillmount方法。