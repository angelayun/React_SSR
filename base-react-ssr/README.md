* 安装
1. npm i react react-dom
2. npm i @babel/core @babel/cli @babel/preset-react
* 使用
1. 用如下命令编译es6代码
```
npx babel index.js --out-file index-compiled.js --presets=@babel/preset-react
```
2. 把编译好的代码复制放到server/index上半部分
3. 执行node server