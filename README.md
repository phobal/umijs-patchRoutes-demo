### 使用 umijs patchRoutes 方法出现的问题

#### 版本

umi@2.13.17

nodejs@v16.11.1

#### 问题

代码按照下面 app.ts 中这样配置后，在开发模式下从首页切换路由到 detail 页面是 OK 的，但是执行 yarn build 打包后，运行 dist 下的服务在切换路由的时候就会报 404 的问题

`src/pages/app.ts` 文件

``` tsx
export function patchRoutes(routes: IRoute[]) {
  routes[0].routes?.unshift(
    ...[
      {
        path: '/detail',
        component: require('./pages/detail').default,
      },
    ],
  );
}
```

#### 稳定复现步骤

1、clone 本仓库代码  
2、安装依赖 yarn install  
3、执行 yarn start, 打开页面后，点击页面上的 `go to detail page`,能正常跳转
4、执行 yarn build, 成功后进入 dist 目录，使用 http-serve 启动静态服务，打开网站，点击页面上的 `go to detail page` 不能正常跳转，会报 404

#### ----- 更新 -----  
不是 umi 的问题，是使用 http-serve 的问题， spa 应用需要设置类似 nginx 中的 try_file 属性，在启动 hs 的时候加上 `hs --port 8080 -P http://localhost:8080\?` 就可以将非
index 路径路由代理到 index.html, 然后后 spa 应用自己去处理路由

